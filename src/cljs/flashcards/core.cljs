(ns flashcards.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [flashcards.game :as game]
            [camel-snake-kebab.core :as csk]))

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

(rf/reg-event-db
 :initialize
 (fn [_ _]
   (let [questions (game/generate-n-questions cards 50 6)]
     {:questions questions
      :current-question nil
      :score {:correct 0
              :incorrect 0}})))

(rf/reg-event-db
 :move-to-next-question
 (fn [db _]
   (let [questions (:questions db)]
     (merge db
            {:questions (rest questions)
             :current-question (first questions)}))))

(rf/reg-sub
 :current-question
 (fn [db _]
   (:current-question db)))

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
 :answer-question
 (fn [{:keys [db]} [_ guess]]
   (let [question @(rf/subscribe [:current-question])
         correct? (= (:correct-answer question) guess)]
     {:db (-> db
              (assoc-in [:current-question :answered] {:guess guess :correct? correct?})
              (update-in [:score (if correct? :correct :incorrect)] inc))})))

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
                   :key (csk/->kebab-case answer)} answer]))]]])

(defn render-card [card]
  (if-let [answered (:answered card)]
    [render-result card]
    [render-answers card]))

(defn ui []
  [:div
   [:div {:class "app-section"}
    [:div {:class "container"}
     [:h1 {:class "title is-size-1"} "Flashcards"]
     [:h2 {:class "subtitle is-size-4"} "Флэшкарточки"]
     [:div {:class "content"}

      (let [score @(rf/subscribe [:score])]
        [:div {:class "score"}
         [:span {:class "button is-success"} (:correct score)]
         [:span {:class "button is-danger"} (:incorrect score)]])

      [render-card @(rf/subscribe [:current-question])]]]]

   [:footer "© 2018 Tortue Ltd"]])

(reagent/render-component [ui]
                          (. js/document (getElementById "app")))

(rf/dispatch-sync [:initialize])
(rf/dispatch-sync [:move-to-next-question])
