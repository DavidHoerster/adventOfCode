module Main exposing (Model, Msg(..), createStepGraph, createStepGraphHelper, getEdgeName, getNodeName, init, input, main, parseStep, update, view)

import Browser
import Dict exposing (..)
import Graph exposing (..)
import Graph.DOT exposing (..)
import Html exposing (Html, div, h1, img, p, text)
import Html.Attributes exposing (src)
import IntDict exposing (..)



---- MODEL ----


type alias Model =
    String


init : ( Model, Cmd Msg )
init =
    let
        partGraph =
            input
                |> String.lines
                |> createStepGraph

        stepOrder =
            constructStepOrder partGraph
    in
    ( String.fromList stepOrder, Cmd.none )


constructStepOrder : Graph Char () -> List Char
constructStepOrder g =
    constructStepOrderHelper g []


constructStepOrderHelper : Graph Char () -> List Char -> List Char
constructStepOrderHelper g currOrder =
    if Graph.isEmpty g then
        currOrder

    else
        let
            roots =
                getTopNodes g (Graph.nodes g) []

            sortedRoots =
                List.sort roots

            labelToRemove =
                Maybe.withDefault '$' (List.head sortedRoots)

            idToRemove =
                Char.toCode labelToRemove

            updatedGraph =
                Graph.remove idToRemove g

            newOrder =
                currOrder ++ [ labelToRemove ]
        in
        constructStepOrderHelper updatedGraph newOrder


getTopNodes : Graph Char () -> List (Node Char) -> List Char -> List Char
getTopNodes g nodes roots =
    case nodes of
        x :: xs ->
            let
                ctx =
                    Maybe.withDefault { node = x, incoming = IntDict.empty, outgoing = IntDict.empty } (Graph.get x.id g)
            in
            if IntDict.isEmpty ctx.incoming then
                getTopNodes g xs (roots ++ [ x.label ])

            else
                getTopNodes g xs roots

        [] ->
            roots


getNodeName : Char -> Maybe String
getNodeName n =
    Just (String.fromChar n)


getEdgeName : () -> Maybe String
getEdgeName e =
    Nothing


createStepGraph : List String -> Graph Char ()
createStepGraph steps =
    let
        nodesAndEdges =
            steps
                |> List.foldl createStepGraphHelper ( Dict.empty, [] )

        nodeList =
            Dict.values (Tuple.first nodesAndEdges)

        edgeList =
            Tuple.second nodesAndEdges
    in
    Graph.fromNodesAndEdges nodeList edgeList


createStepGraphHelper : String -> ( Dict Char (Node Char), List (Edge ()) ) -> ( Dict Char (Node Char), List (Edge ()) )
createStepGraphHelper step ( nodes, edges ) =
    let
        parsedStep =
            parseStep step

        nodeFromName =
            parsedStep
                |> Tuple.first
                |> String.toList
                |> List.head
                |> Maybe.withDefault '$'

        nodeFromNameCode =
            Char.toCode nodeFromName

        nodeToName =
            parsedStep
                |> Tuple.second
                |> String.toList
                |> List.head
                |> Maybe.withDefault '$'

        newToNameCode =
            Char.toCode nodeToName

        newNodeDict =
            if Dict.member nodeFromName nodes then
                nodes

            else
                Dict.insert nodeFromName (Node nodeFromNameCode nodeFromName) nodes

        newNodeDict2 =
            if Dict.member nodeToName newNodeDict then
                newNodeDict

            else
                Dict.insert nodeToName (Node newToNameCode nodeToName) newNodeDict

        newEdges =
            edges ++ [ Edge nodeFromNameCode newToNameCode () ]
    in
    ( newNodeDict2, newEdges )


parseStep : String -> ( String, String )
parseStep s =
    ( String.slice 5 6 s, String.slice -12 -11 s )



---- UPDATE ----


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )



---- VIEW ----


view : Model -> Html Msg
view model =
    div []
        [ img [ src "/logo.svg" ] []
        , h1 [] [ text "Your Elm App is working!" ]
        , p [] [ text model ]
        ]



---- PROGRAM ----


main : Program () Model Msg
main =
    Browser.element
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = always Sub.none
        }


input : String
input =
    """Step A must be finished before step B can begin.
Step A must be finished before step K can begin.
Step A must be finished before step S can begin.
Step B must be finished before step O can begin.
Step B must be finished before step Y can begin.
Step C must be finished before step H can begin.
Step C must be finished before step K can begin.
Step C must be finished before step X can begin.
Step D must be finished before step O can begin.
Step D must be finished before step S can begin.
Step E must be finished before step D can begin.
Step E must be finished before step G can begin.
Step E must be finished before step S can begin.
Step E must be finished before step U can begin.
Step E must be finished before step W can begin.
Step F must be finished before step A can begin.
Step F must be finished before step B can begin.
Step F must be finished before step O can begin.
Step F must be finished before step S can begin.
Step F must be finished before step V can begin.
Step F must be finished before step Y can begin.
Step G must be finished before step D can begin.
Step G must be finished before step S can begin.
Step G must be finished before step W can begin.
Step H must be finished before step D can begin.
Step H must be finished before step S can begin.
Step H must be finished before step W can begin.
Step H must be finished before step Y can begin.
Step I must be finished before step A can begin.
Step I must be finished before step B can begin.
Step I must be finished before step K can begin.
Step I must be finished before step P can begin.
Step I must be finished before step S can begin.
Step I must be finished before step U can begin.
Step I must be finished before step X can begin.
Step J must be finished before step A can begin.
Step J must be finished before step G can begin.
Step J must be finished before step H can begin.
Step J must be finished before step I can begin.
Step K must be finished before step D can begin.
Step K must be finished before step E can begin.
Step K must be finished before step P can begin.
Step K must be finished before step Y can begin.
Step L must be finished before step F can begin.
Step L must be finished before step M can begin.
Step M must be finished before step D can begin.
Step M must be finished before step H can begin.
Step M must be finished before step P can begin.
Step M must be finished before step S can begin.
Step N must be finished before step A can begin.
Step N must be finished before step C can begin.
Step N must be finished before step E can begin.
Step N must be finished before step I can begin.
Step N must be finished before step J can begin.
Step N must be finished before step U can begin.
Step N must be finished before step Z can begin.
Step P must be finished before step D can begin.
Step P must be finished before step E can begin.
Step P must be finished before step G can begin.
Step P must be finished before step O can begin.
Step P must be finished before step S can begin.
Step P must be finished before step W can begin.
Step P must be finished before step X can begin.
Step P must be finished before step Y can begin.
Step Q must be finished before step C can begin.
Step Q must be finished before step H can begin.
Step Q must be finished before step W can begin.
Step R must be finished before step B can begin.
Step R must be finished before step D can begin.
Step R must be finished before step K can begin.
Step R must be finished before step O can begin.
Step R must be finished before step S can begin.
Step R must be finished before step V can begin.
Step R must be finished before step W can begin.
Step S must be finished before step O can begin.
Step T must be finished before step C can begin.
Step T must be finished before step P can begin.
Step T must be finished before step Q can begin.
Step T must be finished before step X can begin.
Step T must be finished before step Y can begin.
Step U must be finished before step D can begin.
Step U must be finished before step G can begin.
Step U must be finished before step S can begin.
Step U must be finished before step W can begin.
Step V must be finished before step H can begin.
Step V must be finished before step I can begin.
Step V must be finished before step S can begin.
Step W must be finished before step D can begin.
Step W must be finished before step O can begin.
Step W must be finished before step S can begin.
Step X must be finished before step S can begin.
Step X must be finished before step W can begin.
Step X must be finished before step Y can begin.
Step Y must be finished before step E can begin.
Step Y must be finished before step U can begin.
Step Z must be finished before step C can begin.
Step Z must be finished before step E can begin.
Step Z must be finished before step I can begin.
Step Z must be finished before step O can begin.
Step Z must be finished before step S can begin.
Step Z must be finished before step U can begin."""
