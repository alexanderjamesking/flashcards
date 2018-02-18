(ns flashcards.core
  (:require [reagent.core :as reagent]))

(enable-console-print!)

(reagent/render-component
 [:div
  [:h1 "Hello World"]]
 (. js/document (getElementById "app")))
