module Main exposing (Model, Msg(..), init, input, main, update, view)

import Browser
import Html exposing (Html, div, h1, img, p, text)
import Html.Attributes exposing (src)
import List.Extra exposing (..)



---- MODEL ----


type alias Model =
    String


init : ( Model, Cmd Msg )
init =
    let
        result =
            input
                |> String.lines
                --["abc", "acd", "sdf", "xys", "sdg", ...]
                |> processList
    in
    ( result, Cmd.none )


processList : List String -> String
processList list =
    case list of
        x :: xs ->
            processListHelper x xs

        -- "abc"  ["acd", "sdf", "xys", "sdg", ...]
        [] ->
            "BLAH"


processListHelper : String -> List String -> String
processListHelper x xs =
    let
        result =
            case xs of
                x1 :: xs1 ->
                    innerComparer x x1 xs1 ""

                -- "abc" "acd" ["sdf", "xys", "sdg", ...]
                [] ->
                    ""
    in
    if String.isEmpty result then
        let
            h1 =
                case List.head xs of
                    Just aHead ->
                        aHead

                    Nothing ->
                        ""

            t1 =
                case List.tail xs of
                    Just aTail ->
                        aTail

                    Nothing ->
                        []
        in
        processListHelper h1 t1

    else
        result


innerComparer : String -> String -> List String -> String -> String
innerComparer x1 x2 xs curr =
    -- "abc" "acd" ["sdf", "xys", "sdg", ...] ""
    let
        tupList =
            List.Extra.zip (String.toList x1) (String.toList x2)

        --[('a','a'),('b', 'c'),('c', 'd')]
        match =
            innerComparerHelper tupList [] 0

        -- [('a','a'),('b', 'c'),('c', 'd')] [] 0
        --  ->  (['a'], 2)
    in
    case match of
        -- (['a'], 2)
        ( x :: xs1, 1 ) ->
            --match...return it
            String.join "" (List.map String.fromChar (x :: xs1))

        ( _, _ ) ->
            -- (['a'], 2)
            --no match...get the next item
            case xs of
                xshead :: xstail ->
                    -- "sdf" ["xys", "sdg", ...]
                    --recursive call
                    innerComparer x1 xshead xstail ""

                -- "abc" "sdf" ["xys", "sdg", ...] ""
                [] ->
                    --return empty
                    ""


innerComparerHelper : List ( Char, Char ) -> List Char -> Int -> ( List Char, Int )
innerComparerHelper tupList matches countOfDiffs =
    -- [('a','a'),('b', 'c'),('c', 'd')] [] 0
    -- [('b','c'),('c','d')] ['a'] 0
    -- [('c','d')] ['a'] 1
    -- [] ['a'] 2
    case tupList of
        x :: xs ->
            -- ('a','a') [('b','c'),('c','d')]
            -- ('b','c') [('c','d')]
            -- ('c','d') []
            let
                f =
                    Tuple.first x

                -- 'a'
                -- 'b'
                -- 'c'
                s =
                    Tuple.second x

                -- 'a'
                -- 'c'
                -- 'd'
            in
            if f == s then
                innerComparerHelper xs (f :: matches) countOfDiffs
                -- [('b','c'),('c','d')] ['a'] 0

            else
                innerComparerHelper xs matches (countOfDiffs + 1)

        -- [('c','d')] ['a'] 1
        -- [] ['a'] 2
        [] ->
            -- []
            ( List.reverse matches, countOfDiffs )



-- (['a'], 2)
-- startCompare : List String -> List String -> String
-- startCompare code1 code2 =
--     case code1 of
--         x :: xs ->
--             startCompareHelper x xs code2
--         [] ->
--             ""
-- startCompareHelper String -> List String -> List String -> String
-- startCompareHelper x xs codes =
--     let
--         match = innerCompare x codes
--     in
--     ""
-- innerCompare : String -> List String -> String
-- innerCompare x codes =
--     case codes of
--         x1 :: xs1 ->
--         let
--             xList = String.toList x
--             x1List = String.toList x1
--             matchList = innerCompareHelper xList x1List
--         in
--         [] ->
--             ""
-- startListCompare : List String -> List String -> String
-- startListCompare codes1 codes2 =
--     case codes1 of
--         x :: xs ->
--             startListCompareHelper x xs codes2
--         [] ->
--             ""
-- startListCompareHelper String -> List String -> List String -> String
-- startListCompareHelper s xs codes =
-- compareStrings : String -> String -> (String, Bool)
-- compareStrings main comparer =
--     let
--         mainList = String.toList main
--         comparerList = String.toList comparer
--     in
--     ("", false)
-- compareStringsHelper : List Char -> List Char -> Int -> Int
-- compareStringsHelper mainList comparerList currCount =
--     case mainList of
--         x :: xs ->
--             case comparerList of
--                 x1 :: xs1 ->
--                     let
--                         tempCount = currCount + (if x /= x1 then 1 else 0)
--                     in
--                         if tempCount > 1 then
--                             tempCount
--                         else
--                 [] ->
--                     currCount
--         [] ->
--             currCount
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
        , p [] [ text ("Your code is :: " ++ model) ]
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
    """bvhfawknyoqsudzrpgslecmtkj
bpufawcnyoqxldzrpgsleimtkj
bvhfawcnyoqxqdzrplsleimtkf
bvhoagcnyoqxudzrpgsleixtkj
bxvfgwcnyoqxudzrpgsleimtkj
bvqfawcngoqxudzrpgsleiktkj
bvhfawcnmoqxuyzrpgsleimtkp
bvheawcnyomxsdzrpgsleimtkj
bcdfawcnyoqxudzrpgsyeimtkj
bvhpawcnyoqxudzrpgsteimtkz
bxhfawcnyozxudzrpgsleimtoj
bvhfdwcnyozxudzrposleimtkj
bvpfawcnyotxudzrpgsleimtkq
bvhfpwccyoqxudzrpgslkimtkj
bvhfawcnyoqxudirpgsreimtsj
bvhfawcnyoqxudzppgbleemtkj
bvhzawcnyoqxudqrpgslvimtkj
bvhfawclyoqxudirpgsleimtka
bvhgawfnyoqxudzrpguleimtkj
bvhfazcnytqxudzrpgslvimtkj
bvhfawcnygxxudzrpgjleimtkj
bxhfawcnyoqxudzipgsleimtxj
bvhptwcnyoqxudzrpgsleimtmj
bzhfawcgyooxudzrpgsleimtkj
bvhjlwcnyokxudzrpgsleimtkj
bvhfawcnyoqxudbrmgslesmtkj
bvhfawcnysixudzwpgsleimtkj
bvhflwcnymqxxdzrpgsleimtkj
bvifawcnyoyxudzrpgsleimtvj
bvhfawcnyofxudlrpgsheimtkj
bvhbawcmyoqxudzrpggleimtkj
bhhxgwcnyoqxudzrpgsleimtkj
bvhfawgnyoqxbdzrpgsleimfkj
bvhfawcnyoqxudcrngsleimykj
bvhfawcnyofxudzrpgslebgtkj
bvhfaocnybqxudzapgsleimtkj
bvhxawcnyodxudzrpfsleimtkj
bchfawcnyoqxudrrtgsleimtkj
bvhfawcqyoqxudzdpgsltimtkj
bvhfawknyoqxudzrpnsleimtbj
cihfawcnyoqxudirpgsleimtkj
bvlfawpnyoqxudzrpgslgimtkj
bulfawcnyoqbudzrpgsleimtkj
bvhfajcnyoqkudzrpgsoeimtkj
bvhrakcnyoqxudzrpgsleimjkj
bvbftwcnyoqxuvzrpgsleimtkj
bvhfhwcnyoqxudzrpgslelmtbj
bvhyawcntoqxudzrpgsleimtuj
xvhuawcnyoqxuqzrpgsleimtkj
pvhfawcnyoqxudzdpglleimtkj
bvhfawsnyoqxudzrpgvlefmtkj
bvhfawcnyoqxudzrpgepeiwtkj
bvhfawcnyoqxudzrphsleittkr
dvhfawcnyoqxudzrpkslzimtkj
bvhfawpnyoqxudzrpgmlcimtkj
bvhsawcnyzqxudzrpgsaeimtkj
bdhfawcnyoqxudzrpasleiwtkj
bvhfawbnyoqxpdbrpgsleimtkj
mvhfawwnyoqxujzrpgsleimtkj
bvafawcnyoyxudzrpgsleidtkj
bvhyawcnyoqxudztpgzleimtkj
besfawcnyoqxudzrpgsleimdkj
bvhfawcnyoqxudrrpgsjeimjkj
xvhfkwcnyoqxudzcpgsleimtkj
bvhfawcnyeqdudzrpgzleimtkj
bvhfuwcnybqxudzrpgsleimttj
lvhfawcnyoqhudzdpgsleimtkj
bvhfawcnyoqxudzrpgslevwtnj
bvhfadcnzoqxxdzrpgsleimtkj
bvsfawcnyoqxpdzrpgileimtkj
bzhfaycnyoqxudzrpgsxeimtkj
bwhfdwcnyoqxudzrpgsleimtkz
bvhfawcnyoqxudzrpgsjlimtkm
bvhfawcnyoqxudsrwgsleimtlj
bbhfalynyoqxudzrpgsleimtkj
bvhfawcnyeqxudzrpglleimtkr
bvhfawnnboqxurzrpgsleimtkj
yvhfawcnyoqxudzrpgslzimtpj
bvhfjwcnyoqxqdxrpgsleimtkj
bthfawcnyoqfudzrpgslhimtkj
bvhfawchuoqxudzqpgsleimtkj
bvhfawcndoqxudzrugsleimrkj
bvhfawcnnoqxjdzrpgsleidtkj
bvhpawcnyoqkudzrpgsleimtzj
bvhfaiinyoqxudzopgsleimtkj
bvhfawcnyxqxuizrigsleimtkj
bvnfawcnyoqxudzqpgsleimbkj
bvnfawcnyoeyudzrpgsleimtkj
bvhfawcnyoqxudarpgsieimtoj
bthcawcnyoqxudlrpgsleimtkj
bvhfnwcnyozxudzrpgsleomtkj
bpwfawcnyoqxudzrpgskeimtkj
bvhfapcnyoqxudnrpgsxeimtkj
bvhfdwcnyoqxubzrxgsleimtkj
fvhfawcnyoqxjdzrpgsleirtkj
bvhfawcneoqxudzrvzsleimtkj
bvhaawcnyoqxudzrpgsleimtex
bvhfawcnyojxudvrpgsleimckj
bvlfawcnyoqxddzrpgsleimtko
bvhfawclfoqxudzrpgsleiktkj
bvhfawciyobxudzrpgkleimtkj
bvhfpwcnyoqxudzrpgsqeimtkd
bvhyawcnyyqxudzrkgsleimtkj
bvhfawcncoqxudzrphsaeimtkj
bvhfawmnyoqxudzrpgifeimtkj
bvhfawcjyoqxudzjpgszeimtkj
bohfawcnwoqxudzrpgsleimwkj
bvhfaucnyoqxudzrpgfluimtkj
bvhfawlnyoqgudzrpgwleimtkj
bmhfawcnyoqxndzrpgsleymtkj
bvhfawcngoqxudzrpzxleimtkj
bihfawcnyoqxudrrpgsleimokj
lvhfawcnylqxudzrpgsleintkj
bvhfawcnyoqvugzrqgsleimtkj
bvhfawcnyoqxudzgpgslqimtij
bvhfawcnyoqludzrpgslnimtcj
hvhfawcnyolxudzrpgsmeimtkj
nvhfawcdkoqxudzrpgsleimtkj
bvhfawcnyoqxkdzrggsneimtkj
bvhfawnnyoqxudzrpgqleibtkj
bvhfawyuyoqxudzrhgsleimtkj
wvhfbwcnyoqxtdzrpgsleimtkj
bvhfawcnyoqxedzzpgoleimtkj
bvhfawcnioqxunzrpgsleimtnj
bvhfawctyoqxudzrpgsldkmtkj
bvhfawcnyonxudzrpgsleitpkj
bvefawcnyoqaudzhpgsleimtkj
bvhfawcnyxqxudzrpgslelmbkj
bvhfamrnyoqxudzrpgsleimgkj
bvhfaqcnyoqxudzrpgsaeimekj
bvhfawcnyoqcidzrpgsleimvkj
bvhfawcnnorxudzrpgsmeimtkj
bvroawcnyoqxudzrpgsleiwtkj
bvhfwwcnyoqxudzrpaslewmtkj
bvsfawcnyoqxudzcpgszeimtkj
bkhfmwcnyoqjudzrpgsleimtkj
bvtfawcnyoqxudzrcgslecmtkj
bvhfawcnypzxudzrpgsleimtkv
bvhfawcnyoqzudzrfgtleimtkj
bvhpawcnyoqxudhrpgsleimtko
tvhfawcnyoqxudzxpfsleimtkj
bvhfawccyofxudzrpqsleimtkj
bvnfawtnyoqxuzzrpgsleimtkj
bvhfamcnuwqxudzrpgsleimtkj
bvhfawcfyoqxudjrpgsleimrkj
bvhpalcnyoqxudzrpgslexmtkj
bvhfawcnjsqxudzlpgsleimtkj
bvhfafcnioqxydzrpgsleimtkj
bvzfawcnyxqxudzgpgsleimtkj
bvhzawcnyoqxudzrpgslewctkj
bvhiawcnhoqrudzrpgsleimtkj
bvhfawcnyoqxuszrggslenmtkj
bvhfowcnyoqxudzrptseeimtkj
behfawfnyoqxudzrpgsleimlkj
lvhfawcnyoqxudsrpgvleimtkj
bvhfawnnyaqxudzrpgsqeimtkj
lvhfawcnfoqxvdzrpgsleimtkj
svhxawcnyoqxudzrpqsleimtkj
bvhfawqnfoqxudzrpgsleimkkj
bvhfafcnyoqcudzrpgsleimtcj
bvhfyfcntoqxudzrpgsleimtkj
bvhfpwcnyoqxudzrpgsleimumj
bvhfawccyoqxudzrqgrleimtkj
bvhfawqnyoqxudzbpgsleimkkj
bvhflwcnyoqxudzrpxsleemtkj
bvhfawcnyoqxuezrpgslehrtkj
bvhfawceyoqxudzrpgsleimswj
bvhfawcncohgudzrpgsleimtkj
bahfawcnyoqxgdzrpgsleamtkj
yvhfawcnyoqxudzrppslrimtkj
fvhfawcmyoqxudzrpgskeimtkj
bvylawsnyoqxudzrpgsleimtkj
bvhfswcnyyqxedzrpgsleimtkj
fvrfawcnyoqxudzrpgzleimtkj
bvhfawcnyoqxuvzrpgslermtks
bvhkawccyoqxudzcpgsleimtkj
bvhfaobnyoqxudzrprsleimtkj
bvbfawcnyoqxudirpgsleimhkj
bvhfawcnyoqxudzvpgsueimtgj
bvhxawcnyoqxudzrpgsleimtgi
svhfawcjyoqxuszrpgsleimtkj
bvnfawcnyoeyudzrpgsldimtkj
bvhfawcnyoqxuhzrpgsleimcki
bvhfvwcnyoqxudzizgsleimtkj
bvhfapznyohxudzrpgsleimtkj
bvhfaelnyosxudzrpgsleimtkj
xvhfawcnmoqxuhzrpgsleimtkj
bjhfawcnyaqxutzrpgsleimtkj
bvhfawcnyohxudzrpgslgnmtkj
bvhfawcnyoqxudzrppsreimtkx
fvhfapcnyoqyudzrpgsleimtkj
qvhfafcnyoqxudorpgsleimtkj
bvhfawcnyoqxedzrwgsleimtvj
bvhfawgnyoqxudzupgqleimtkj
bvhfowctyoqxudzrpgbleimtkj
bvhwawcnyoqxudzapgslvimtkj
bvhfadcnyoqxudzrugsleimtuj
bvhfawcnyosxudzlpgsleamtkj
bvhfawcnywqxuqzrpgsloimtkj
bvhfawcnyoqxumzrpgvlfimtkj
bvhfawcgyoqxbdzrpgsleomtkj
bvhfahcnyoqwudzrfgsleimtkj
gvbfawcnyrqxudzrpgsleimtkj
svhfawcnyoqxudlrpgsleimtkx
avhfafcnyoqxuhzrpgsleimtkj
bvhfawcsyoqxuazrpgsleimtej
bvofawcnyoqxudzrpgsteimtkf
bvhfajcnyoqxudzqpgszeimtkj
bvhfawcsyoqxudzrmgsleiktkj
mvhfawcnyoqxudzrpgkluimtkj
bvhfawcnhoqxudzrpgslwhmtkj
bmhaawsnyoqxudzrpgsleimtkj
bvhfawcnyoqxudzhpgsleimhyj
bvhfxwcnyoqxsdzypgsleimtkj
bvhpawcyyoqxuczrpgsleimtkj
bvomawcnyovxudzrpgsleimtkj
bvhfawcnjvqxudzrpgsleimtkt
nvhfawcnyqqxudzrpgsleittkj
bvhiawcnyzqxudzrpysleimtkj
bvhdawcnyoqxukzrpgsleimtuj
bvhfawcnyyxxudzrpgslzimtkj
hvhfawcnyoqxudzupgslemmtkj
byhfawknyoqxudzrpgsleimtkb
bvhfawcnyoqxudzrpasleihakj
bvafahcnyaqxudzrpgsleimtkj
bkhfawcnyoqxudzrpgllepmtkj
bghfawcnycqxuzzrpgsleimtkj
bvhfawcnyoqxudzrbgeleimtkl
bvhfascnyoqgudzrpgsveimtkj
bvhfawnnyoqxudzrpgsleimtdl
bvhqawcnyoqxudzrpgsleimgrj
bvhsawdwyoqxudzrpgsleimtkj
bvhfawcnyoqxudzrpgaleipttj
bvhfawcnrlqxudzrbgsleimtkj
bvhfdwcnyoqxudzqpcsleimtkj
bvhfawcnyoqxudzopgslexmokj
bvhfawcoyoqxudzrpghlewmtkj
bvhfozcnykqxudzrpgsleimtkj
bvhfawcnyoqxuvzrpgslrimtkr
bvhfrncnyoqrudzrpgsleimtkj
bvhfawcnyocxuizrpgslefmtkj
bvhfawywyoqxudzrpgsleimxkj
bvhfawcnyoqxugzrpgslrimtij
bvtfawcnyoqxudzcpgsleimtfj
bvhfawcnyoqxuzzspgsleimtkz
bvhfawcnzoqxvdzrpgslsimtkj
bvhfzwcnyoqxudzrpgslenmhkj
bvhfkccnyoqxudzrpgzleimtkj
bvhfawcnyoqzudzrpgslhimwkj
bzhfawvnyooxudzrpgsleimtkj"""
