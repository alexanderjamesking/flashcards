(ns flashcards.core
  (:require [reagent.core :as reagent]
            [flashcards.routes :as routes]
            [flashcards.game-logic :as game-logic]))

(enable-console-print!)

(game-logic/init)
(routes/init)

(reagent/render-component [routes/render-app]
                          (. js/document (getElementById "app")))
