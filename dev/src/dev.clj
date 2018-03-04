(ns dev
  (:refer-clojure :exclude [test])
  (:require [clojure.repl :refer :all]
            [flashcards.config :refer [port]]
            [integrant.core :as ig]
            [integrant.repl :refer [set-prep! clear go halt prep init reset reset-all]]))

(def config {:flashcards.web-server/server {:port port
                                            :app-js "/public/cljs/dev/main.js"}})

(ig/load-namespaces config)

(set-prep! (constantly config))
