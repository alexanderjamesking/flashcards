(ns flashcards.view.home
  (:require [re-frame.core :as rf])  )

(defn view []
  [:div
   [:div {:class "app-section"}
    [:div {:class "container"}
     [:div
      [:h1 {:class "title is-size-4"} "Flashcards"]
      [:h2 {:class "subtitle is-size-5"} "Флэшкарточки"]]

     [:section {:class "section"}
      [:button {:class "button"
                :on-click #(rf/dispatch [:navigate-to :play])} "Play"]]]]]  )
