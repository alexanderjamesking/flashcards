(ns flashcards.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [flashcards.game :as game]
            [bidi.bidi :as bidi]
            [pushy.core :as pushy]
            [clojure.set :refer [map-invert]]))

(enable-console-print!)

(def verbs-p1 {"арендова́ть" "to rent"
               "боле́ть | заболе́ть" "to fall ill"
               "бояться | побояться" "to be afraid of"
               "брать | взять" "to take"
               "ве́рить | пове́рить" "to believe"
               "ви́деть | уви́деть" "to see"
               "возвращат́ься | вернут́ься" "to return"
               "волнова́ться | разволнова́ться" "to be worried"
               "воскли́кнуть [pf.]" "to exclaim"
               "вспоминат́ь | вспо́мнить" "to recall"
               "встава́ть | встать" "to get up"
               "встречат́ь | встре́тить" "to meet"
               "встречат́ься | встре́титься" "to meet (reflexive)"
               "входи́ть | войти́" "to enter (on foot)"
               "выбират́ь | вы́брать" "to choose"
               "выи́грывать | вы́играть" "to win"})

(def verbs-p2 {"держат́ь" "to hold"
               "жить [imp.]" "to live"
               "дружи́ть [imp.]" "to become friends"
               "вы́ключать | вы́ключить" "to turn off"
               "выходи́ть | вы́йти" "to exit"
               "говори́ть | сказа́ть" "to say"
               "горе́ть | сгоре́ть" "to burn"
               "гото́вить | пригото́вить" "to prepare, to cook"
               "гуля́ть | погуля́ть" "to walk, to stroll"
               "дава́ть | дать" "to give"
               "дари́ть | подари́ть" "to present"
               "де́лать | сде́лать" "to do, to make"
               "добавля́ть | добав́ить" "to add, to contribute"
               "догова́риваться | договори́ться" "to agree"
               "доходи́ть | дойти́" "to reach (on foot)"
               "ду́мать | поду́мать" "to think"
               "есть | съесть" "to eat"
               "е́здить, е́хать | пое́хать" "to go (by transport)"
               "жале́ть | пожале́ть" "to feel sorry"
               "ждать | подожда́ть" "to wait"
               "забыва́ть | забы́ть" "to forget"
               "за́втракать | поза́втракать" "to have breakfast"
               "задават́ь | задат́ь" "to set, to pose (questions)"
               "зака́зывать | заказа́ть" "to order, to reserve"
               "закрыва́ть | закры́ть" "to close"})

(def reflexive-verbs {"интересоваться" "to be interested in"
                      "волноваться" "to be worried"
                      "Мыться" "to wash"
                      "Гордиться" "to be proud"
                      "учиться" "to study"
                      "стараться" "to try"
                      "Готовиться" "to prepare"
                      "Улыбаться" "to smile"
                      "заниматься" "to be engaged in"
                      "смеяться" "to laugh"
                      "бояться" "to be afraid"
                      "Бриться" "to shave"
                      "Одеваться" "to dress"
                      "Раздеваться" "to undress"
                      "Надеяться" "to hope"})

(def cards (merge verbs-p1 verbs-p2))

(def classes ["orange" "pink" "light-blue" "dark-blue" "green" "purple"])

(def app-routes ["/" {"" :home
                      "play" :play
                      "end" :end}])
(def history
  (pushy/pushy (fn [response]
                 (println "this handler..." response))
               (partial bidi/match-route app-routes)))

(def possible-answers 5)
(def n-questions 1000)

(defn- initial-game-state []
  {:route :home
   :questions (-> (game/generate-n-questions cards n-questions possible-answers)
                  (concat (game/generate-n-questions (map-invert cards) n-questions possible-answers))
                  shuffle)
   :current-question nil
   :score {:correct 0
           :incorrect 0}})

(rf/reg-event-fx
 :initialize
 (fn [{:keys [db]} _]
   {:db (initial-game-state)
    :dispatch [:move-to-next-question]}))

(rf/reg-event-fx
 :reset-game-state
 (fn [{:keys [db]}]
   {:db (initial-game-state)
    :dispatch-n [[:move-to-next-question]
                 [:navigate-to :play]]}))

(defn- parse-url [url]
  (bidi/match-route app-routes url))

(defn navigate-to [route]
  (rf/dispatch [:navigate-to route]))

(defn- dispatch-route [matched-route]
  (navigate-to (:handler matched-route)))

(rf/reg-event-db
 :navigate-to
 (fn [db [_ route]]
   (pushy/set-token! history (bidi/path-for app-routes route))
   (assoc db :route route)))

(rf/reg-event-fx
 :move-to-next-question
 (fn [{:keys [db]} _]
   (let [questions (:questions db)
         current-question (first questions)]
     (if current-question
       {:db (merge db
                   {:questions (rest questions)
                    :current-question (first questions)})}
       {:dispatch [:navigate-to :end]}))))

(rf/reg-sub
 :current-question
 (fn [db _]
   (:current-question db)))

(rf/reg-sub
 :route
 (fn [db _]
   (or (:route db) :home)))

(rf/reg-sub
 :score
 (fn [db _]
   (:score db)))

(rf/reg-sub
 :next-question
 (fn [db _]
   (-> (:questions db)
       shuffle
       first)))

(rf/reg-sub
 :lookup-wrong-answer
 (fn [db [_ users-answer]]
   (->> cards
        (filter (fn [[k v]]
                  (= users-answer v)))
        first)))

(rf/reg-event-fx
 :auto-move-to-next-question
 (fn [_ [_ question]]
   (let [current-question @(rf/subscribe [:current-question])]
     (if (= (:question question) (:question current-question))
       {:dispatch [:move-to-next-question]}
       {}))))

(rf/reg-event-fx
 :answer-question
 (fn [{:keys [db]} [_ guess]]
   (let [question @(rf/subscribe [:current-question])
         correct? (= (:correct-answer question) guess)]
     {:db (-> db
              (assoc-in [:current-question :answered] {:guess guess :correct? correct?})
              (update-in [:score (if correct? :correct :incorrect)] inc))
      :dispatch-later [{:ms (if correct? 2200 5000)
                        :dispatch [:auto-move-to-next-question question]}]})))

(defn next-question-button []
  [:div
   [:button {:class "next-question button is-info"
             :on-click (fn [] (rf/dispatch [:move-to-next-question]))} "Next"]])

(defn correct-answer [question]
  [:section {:class "hero is-success"}
   [:div {:class "hero-body result"
          :on-click (fn [] (rf/dispatch [:move-to-next-question]))}
    [:h1 {:class "question"} (:question question)]
    [:h1 {:class "question"} (:correct-answer question)]]])

(defn wrong-answer [question]
  (let [[l1 l2] @(rf/subscribe [:lookup-wrong-answer (-> question :answered :guess)])]
    [:section {:class "hero is-danger"
               :on-click (fn [] (rf/dispatch [:move-to-next-question]))}
     [:div {:class "hero-body result"}
      [:h1 {:class "question"} (:question question)]
      [:h1 {:class "correct-answer"} (:correct-answer question)]
      [:h1 {:class "wrong-answer"} l2]]]))

(defn render-result [question]
  (if (:correct? (:answered question))
    [correct-answer question]
    [wrong-answer question]))

(defn render-answers [question]
  [:section {:class "hero is-primary"}
   [:div {:class "hero-body"}
    [:h1 {:class "question"} (:question question)]
    [:div {:class "buttons"}
     (let [answers (:possible-answers question)]
       (for [[answer class] (map vector answers (take (count answers) (cycle (shuffle classes))))]
         [:button {:on-click (fn [] (rf/dispatch [:answer-question answer]))
                   :class (str "answer " class)
                   :key answer} answer]))]]])

(defn render-card [card]
  (if-let [answered (:answered card)]
    [render-result card]
    [render-answers card]))

(defn page-title []
  [:div
   [:h1 {:class "title is-size-4"} "Flashcards"]
   [:h2 {:class "subtitle is-size-5"} "Флэшкарточки"]])

(defn ui []
  [:div
   [:div {:class "app-section"}
    [:div {:class "container"}
     (let [score @(rf/subscribe [:score])]
       [:div {:class "score"}
        [:span {:class "button is-info"} (:correct score)]
        [:span {:class "button is-danger"} (:incorrect score)]])

     [page-title]
     [:div {:class "content"}

      [render-card @(rf/subscribe [:current-question])]]]]

   [:footer "© 2018 Tortue Ltd"]])

(defn navigation-bar []
  [:p
   [:button {:on-click (partial navigate-to :home)} "home"]
   [:button {:on-click (partial navigate-to :play)} "play"]
   [:button {:on-click (partial navigate-to :end)} "end"]])

(defmulti render-page identity)

(defmethod render-page :home []
  [:div
   [:div {:class "app-section"}
    [:div {:class "container"}
     [page-title]

     [:section {:class "section"}
      [:button {:class "button"
                :on-click (partial navigate-to :play)} "Play"]]]]]  )

(defmethod render-page :play []
  [ui])

(defmethod render-page :end []

  [:div
   [:div {:class "app-section"}
    [:div {:class "container"}
     [page-title]

     [:section {:class "section"}

      (let [score @(rf/subscribe [:score])]
        [:div {:class "content"}
         [:h3 (str "You scored "(:correct score) " / 20")]])

      [:button {:class "button"
                :on-click (fn []
                            (rf/dispatch-sync [:reset-game-state]))} "Play Again"]]]]])

(defn page []
  [:div
   ;;[navigation-bar]
   [render-page @(rf/subscribe [:route])]])


(reagent/render-component [page]
                          (. js/document (getElementById "app")))

(rf/dispatch-sync [:initialize])

(pushy/start! (pushy/pushy dispatch-route parse-url))
