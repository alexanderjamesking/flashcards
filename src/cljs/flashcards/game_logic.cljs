(ns flashcards.game-logic
  (:require [flashcards.game :as game]
            [re-frame.core :as rf]
            [flashcards.content :as content]))

(def cards (merge content/verbs-p1 content/verbs-p2))

(defn- initial-game-state []
  {:route :home
   :questions (let [n-questions 5
                    n-possible-answers 5]
                (game/generate-shuffled-questions cards
                                                  n-questions
                                                  n-possible-answers))
   :current-question nil
   :score {:correct 0
           :incorrect 0}})

(rf/reg-event-fx
 ::init
 (fn [{:keys [db]} _]
   {:db (initial-game-state)
    :dispatch [:move-to-next-question]}))

(rf/reg-event-fx
 :reset-game-state
 (fn [{:keys [db]}]
   {:db (merge db (initial-game-state))
    :dispatch-n [[:move-to-next-question]
                 [:navigate-to :play]]}))

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
 :score
 (fn [db _]
   (:score db)))

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

(defn init []
  (rf/dispatch-sync [::init]))
