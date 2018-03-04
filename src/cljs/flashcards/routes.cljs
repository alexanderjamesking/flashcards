(ns flashcards.routes
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [flashcards.game :as game]
            [flashcards.content :as content]
            [flashcards.view.home :as home]
            [flashcards.view.play :as play]
            [flashcards.view.end :as end]
            [bidi.bidi :as bidi]
            [pushy.core :as pushy]
            [clojure.set :refer [map-invert]]))

(def app-routes ["/" {"" :home
                      "play" :play
                      "end" :end}])

(defmulti render-view identity)

(defmethod render-view :home [] [home/view])

(defmethod render-view :end [] [end/view])

(defmethod render-view :play [] [play/view])

(rf/reg-sub
 ::route
 (fn [db _]
   (or (:route db) :home)))

(defn render-app []
  [render-view @(rf/subscribe [::route])])

(rf/reg-event-db
 ::init
 (fn [db [_ history]]
   (assoc db :pushy history)))

(rf/reg-event-db
 :navigate-to
 (fn [db [_ route]]
   (pushy/set-token! (:pushy db) (bidi/path-for app-routes route))
   (assoc db :route route)))

(defn init []
  (let [history (pushy/pushy (fn [matched-route]
                               (rf/dispatch [:navigate-to (:handler matched-route)]))
                             (fn [url]
                               (bidi/match-route app-routes url)))]
    (pushy/start! history)
    (rf/dispatch-sync [::init history])))
