library(shiny)
library(RWeka)
library(data.table)


options(shiny.maxRequestSize=64*1024^2) 
load("ngram45.RData")
load("ngram1.RData")
load("ngram2.RData")
load("ngram3.RData")
source("ngramPredictionFunction.R")


# Define server logic required to generate and plot a random distribution
shinyServer(function(input, output, session) {
  
  observe({
    t1 <- Sys.time()
    load("ngram1.RData")
    load("ngram2.RData")
    load("ngram3.RData")
    input$phrase
    out2 <- ngramPredictionFunction(input$phrase, ngram1, ngram2, ngram3, ngram4, ngram5)
    words <- as.data.frame(out2)[,1]
    t2 <- Sys.time()                            
    output$table <- renderTable({ data.frame(out2[,1, with=FALSE]) })
    output$time  <-renderPrint({ print(t2-t1)  })
    session$sendCustomMessage(type = "myCallbackHandler", words)
    
  })
  
})
