(ns flashcards.view.end
  (:require [re-frame.core :as rf]))

(defn view []
  [:div
   [:div {:class "app-section"}
    [:div {:class "container"}
     [:div
      [:h1 {:class "title is-size-4"} "Flashcards"]
      [:h2 {:class "subtitle is-size-5"} "Флэшкарточки"]]

     [:section {:class "section"}

      (let [score @(rf/subscribe [:score])]
        [:div {:class "content"}
         [:h3 (str "You scored "(:correct score) " / 20")]])

      [:button {:class "button"
                :on-click (fn []
                            (rf/dispatch-sync [:reset-game-state]))} "Play Again"]]]]])
