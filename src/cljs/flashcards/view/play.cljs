(ns flashcards.view.play
  (:require [re-frame.core :as rf]))


(def classes ["orange" "pink" "light-blue" "dark-blue" "green" "purple"])

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

(defn view []
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
