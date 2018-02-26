(ns flashcards.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [flashcards.game :as game]
            [bidi.bidi :as bidi]
            [pushy.core :as pushy]))

(enable-console-print!)

(def cards {"интересоваться" "to be interested in"
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

(def classes ["orange" "pink" "light-blue" "dark-blue" "green" "purple"])

(def app-routes ["/" {"" :home
                      "play" :play
                      "end" :end}])
(def history
  (pushy/pushy (fn [response]
                 (println "this handler..." response))
               (partial bidi/match-route app-routes)))

(defn- initial-game-state []
  (let [questions (game/generate-n-questions cards 3 6)]
    {:route :home
     :questions questions
     :current-question nil
     :score {:correct 0
             :incorrect 0}}))

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
      :dispatch-later [{:ms 2500
                        :dispatch [:auto-move-to-next-question question]}]})))

(defn next-question-button []
  [:div
   [:button {:class "next-question button is-info"
             :on-click (fn [] (rf/dispatch [:move-to-next-question]))} "Next"]])

(defn correct-answer [question]
  [:section {:class "hero is-success"}
   [:div {:class "hero-body result"}
    [:h1 {:class "question"} (:question question)]
    [:p (:correct-answer question)]
    [next-question-button]]])

(defn wrong-answer [question]
  (let [[l1 l2] @(rf/subscribe [:lookup-wrong-answer (-> question :answered :guess)])]
    [:section {:class "hero is-danger"}
     [:div {:class "hero-body result"}
      [:h1 {:class "question"} (:question question)]
      [:p (:correct-answer question)]
      [:blockquote (str "You answered '" l2 "' " l1)]
      [next-question-button]]]))

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
                   :class (str "answer button " class)
                   :key answer} answer]))]]])

(defn render-card [card]
  (if-let [answered (:answered card)]
    [render-result card]
    [render-answers card]))

(defn page-title []
  [:div
   [:h1 {:class "title is-size-1"} "Flashcards"]
   [:h2 {:class "subtitle is-size-4"} "Флэшкарточки"]])

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
                :on-click (partial navigate-to :play)} "Play"]]]]])

(defmethod render-page :play []
  [ui])

(defmethod render-page :end []
  [:div
   [:h1 "I am the end game page"]

   [:p "test"]
   [:button {:on-click (fn []


                         (rf/dispatch-sync [:reset-game-state]))} "Play Again"]])

(defn page []
  [:div
   ;;[navigation-bar]
   [render-page @(rf/subscribe [:route])]])


(reagent/render-component [page]
                          (. js/document (getElementById "app")))

(rf/dispatch-sync [:initialize])

(pushy/start! (pushy/pushy dispatch-route parse-url))
