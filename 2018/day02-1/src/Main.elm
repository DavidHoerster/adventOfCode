module Main exposing (Model, Msg(..), init, input, main, sortString, update, view)

import Browser
import Dict exposing (Dict)
import Html exposing (Html, div, h1, img, p, text)
import Html.Attributes exposing (src)



---- MODEL ----


type alias Model =
    { twos : Int
    , threes : Int
    }


type alias WordStatus =
    { hasTwo : Bool
    , hasThree : Bool
    }


type alias Word =
    List Char


type alias CharCount =
    Dict Char Int


init : ( Model, Cmd Msg )
init =
    let
        counts =
            { twos = 0, threes = 0 }

        codes =
            String.lines input

        sortedCodes =
            List.map sortString codes

        newModel =
            getChecksumValues sortedCodes
    in
    ( newModel, Cmd.none )


sortString : String -> String
sortString inputString =
    inputString
        |> String.toList
        |> List.sort
        |> List.map String.fromChar
        |> String.concat


getChecksumValues : List String -> Model
getChecksumValues words =
    let
        charList =
            List.map String.toList words

        statusList =
            List.map checkWordStatus charList

        sumOfTwos =
            List.foldl
                (\stat total ->
                    total
                        + (if stat.hasTwo then
                            1

                           else
                            0
                          )
                )
                0
                statusList

        sumOfThrees = 
            List.foldl
                (\stat total ->
                    total
                        + (if stat.hasThree then
                            1

                           else
                            0
                          )
                )
                0
                statusList
    in
    { twos = sumOfTwos, threes = sumOfThrees }



checkWordStatus : Word -> WordStatus
checkWordStatus word =
    let
        counts =
            checkWordStatsHelper word Dict.empty

        hasTwos =
            Dict.filter (hasACount 2) counts

        hasThrees =
            Dict.filter (hasACount 3) counts
    in
    { hasTwo = Dict.size hasTwos > 0
    , hasThree = Dict.size hasThrees > 0
    }


hasACount : Int -> comparable -> Int -> Bool
hasACount n k v =
    n == v


checkWordStatsHelper : Word -> CharCount -> CharCount
checkWordStatsHelper word count =
    case word of
        x :: xs ->
            let
                newCount =
                    if Dict.member x count then
                        let
                            currCount =
                                case Dict.get x count of
                                    Just a ->
                                        a

                                    Nothing ->
                                        0
                        in
                        Dict.insert x (currCount + 1) count

                    else
                        Dict.insert x 1 count
            in
            checkWordStatsHelper xs newCount

        [] ->
            count



-- charList = String.toList s
-- sortedList = List.sort charList
-- sortedStringList = List.map String.fromChar sortedList
-- sortedString = String.concat sortedStringList
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
        , p [] [ text ("Checksum is " ++ String.fromInt (model.twos * model.threes)) ]
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
