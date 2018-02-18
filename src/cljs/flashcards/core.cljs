(ns flashcards.core
  (:require [reagent.core :as reagent]))

(enable-console-print!)

(reagent/render-component
 [:div
  [:h1 "Hello World!"]
  [:p "This is just me testing figwheel"]]
 (. js/document (getElementById "app")))
