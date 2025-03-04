import { LRParser } from '@lezer/lr';
import { LRLanguage, indentNodeProp, foldNodeProp, foldInside, LanguageSupport } from '@codemirror/language';
import { styleTags, tags } from '@lezer/highlight';

// This file was generated by lezer-generator. You probably shouldn't edit it.
const spec_Identifier = {__proto__:null,log:10, is:34, equals:36, and:42, or:44, function:66, do:68, end:70, with:72, set:76, to:78, change:82, repeat:86, times:88, repeat_until_game_over:92, repeat_forever:96, if:100, else:102, return:106};
const parser = LRParser.deserialize({
  version: 14,
  states: ",fQYQPOOO}QPO'#ChOOQO'#Dd'#DdOOQO'#Dl'#DlOOQO'#De'#DeQYQPOOQ!SQPO'#DkO!XQPO'#C_O!mQPO'#C|O!rQPO'#DRO!wQPO'#DUO!XQPO'#DWO!|QPO'#DZO!|QPO'#D]O!XQPO'#D_O!XQPO'#DbOOQO'#Dk'#DkO#RQPO,59SOOQO-E7c-E7cOOQO,5:V,5:VO!XQPO'#CgO#qQQO'#CdOOQO'#Dp'#DpOOQO'#Cd'#CdO$tQQO'#CbOOQO'#Dm'#DmOOQO'#Cb'#CbOOQO,58y,58yO&XQPO,59hO&aQPO,59mO&fQPO,59pO&kQPO,59rO&pQPO'#D{OOQO,59u,59uOOQO,59w,59wO&uQPO,59yOOQO,59|,59|O&zQPO'#DnOOQO1G.n1G.nO'SQPO1G.nO'XQPO,59ROOQO'#Co'#CoO'^QPO,58}OOQO'#Cs'#CsOOQO'#Ct'#CtOOQO'#Cu'#CuOOQO'#Cv'#CvOOQO'#Cw'#CwOOQO'#Cx'#CxOOQO'#Cz'#CzOOQO'#C{'#C{O!XQPO,59[OOQO1G/S1G/SO'eQPO1G/SO!XQPO1G/XO!XQPO1G/[O!|QPO1G/^O'jQPO,5:gO'qQPO'#D{OOQO1G/e1G/eO!XQPO'#DfO'vQPO,5:YOOQO7+$Y7+$YOOQO1G.m1G.mO#YQPO'#CdOOQO1G.i1G.iOOQO1G.v1G.vO(OQPO'#D}O!|QPO7+$nOOQO7+$s7+$sOOQO7+$v7+$vOOQO7+$x7+$xO(WQPO1G0ROOQO1G0R1G0RO(_QPO,5:gOOQO,5:Q,5:QOOQO-E7d-E7dO(iQPO'#DgO(nQPO,5:iOOQO<<HY<<HYOOQO7+%m7+%mO(vQPO1G0RO)QQPO1G0UOOQO,5:R,5:ROOQO-E7e-E7eO)QQPO7+%pOOQO7+%p7+%pOOQO<<I[<<I[",
  stateData: ")c~O!^OSPOS~OSPOTVOqWOvXOyYO{ZO!O[O!Q]O!S^O!V_O!p`O~OYaO~O!pcO~OSeOYdO]gO^gO_fO`fO~OSlO~OSmO~OSnO~OrpO~OXvO~P!XOYaO![WX!pWX|WXrWXXWX!cWX~OaWXbWXeWXfWXmWX!eWX!fWX!gWX!hWX!iWX!jWX!kWX!lWX!mWX!nWX~P#YOazObzOe!TOf!TOm!TO!eyO!fyO!g{O!h|O!i}O!j!OO!k!PO!l!QO!m!RO!n!SO![UX!pUX|UXrUXXUX!cUX~OrpOt!VO~Ow!WO~Ow!XO~O|!YO~O!p!ZO~Or![O~O!c!^OX!bX~OX!`O~OX!aO~OS!bO~P![OS!eO~Os!kO~PYO!p!lO~O!c!^OX!ba~O!c!oOr!qX~Os!rO~PYOs!kO!T!tO~PYOS!uO~O!c!oOr!qa~Os!rO!T!wO~PYOrpO!S^O~OP`_m]S^m~",
  goto: "'[!sPPP!tPP!|#l#xPP$X$fPPPPPP${#lPP%O%O%O%O%O%OP%O%O!tPPPP!tPP!tP!tPP!tP!tP%RPP!tP!t%a%o%uPPP%{&T&]&iP$XPPPPPPPPPP&lP'U'X]ROT!Z!j!l!sQkVQoZQs^Qt_QuaQxdQ!d!TQ!g!WQ!h!XR!m!^eiVZ^_ad!T!W!X!^dhVZ^_ad!T!W!X!^R!czggVZ^_adz!T!W!X!^[QOT!Z!j!l!sggVZ^_adz!T!W!X!^RzhR!Th[ROT!Z!j!l!sQ!x!tR!y!wQTOUbT!j!sQ!j!ZR!s!lQ!_uR!n!_Q!p!eR!v!p]SOT!Z!j!l!s]UOT!Z!j!l!sejVZ^_ad!T!W!X!^RwaQq[Qr]Q!UlQ!]sQ!i!YQ!q!fQ!x!tR!y!wR!f!VR!]s",
  nodeNames: "⚠ LineComment Program LogStatement Identifier log Expression EqualityExpression PrimaryExpression ) ( GroupingExpression CallExpression Boolean String Integer Floating is equals CompareOp RelationalExpression and or CompareOp CompareOp CompareOp CompareOp ArithOp ArithOp ArithOp ArithOp ArithOp FunctionDefinition function do end with SetVariableStatement set to ChangeVariableStatement change RepeatStatement repeat times RepeatUntilGameOverStatement repeat_until_game_over RepeatForeverStatement repeat_forever IfStatement if else ReturnStatement return CallStatement",
  maxTerm: 80,
  nodeProps: [
    ["openedBy", 9,"("],
    ["closedBy", 10,")"]
  ],
  skippedNodes: [0,1],
  repeatNodeCount: 3,
  tokenData: "+U~RfYZ!gpq!lqr!qrs!|uv$jxy$oyz$tz{$y{|%O|}%T}!O%Y!P!Q%{!Q![%b!^!_&l!_!`&y!`!a'U!c!}'c#T#Y'c#Y#Z't#Z#h'c#h#i*U#i#o'c~!lO!p~~!qO!^~~!tP!_!`!w~!|O!f~~#PVOr!|rs#fs#O!|#O#P#k#P;'S!|;'S;=`$d<%lO!|~#kO^~~#nRO;'S!|;'S;=`#w;=`O!|~#zWOr!|rs#fs#O!|#O#P#k#P;'S!|;'S;=`$d;=`<%l!|<%lO!|~$gP;=`<%l!|~$oO!n~~$tOY~~$yOX~~%OO!k~~%TO!l~~%YO!c~R%_P!mQ!Q![%bP%gQ_P!O!P%m!Q![%bP%pP!Q![%sP%xP`P!Q![%s~&QPm~!P!Q&T~&YSP~OY&TZ;'S&T;'S;=`&f<%lO&T~&iP;=`<%l&T~&qP!h~!_!`&t~&yO!j~~&|P!_!`'P~'UO!e~~'ZP!g~!_!`'^~'cO!i~~'hSS~!Q!['c!c!}'c#R#S'c#T#o'c~'yTS~!Q!['c!c!}'c#R#S'c#T#U(Y#U#o'c~(_US~!Q!['c!c!}'c#R#S'c#T#`'c#`#a(q#a#o'c~(vUS~!Q!['c!c!}'c#R#S'c#T#g'c#g#h)Y#h#o'c~)_US~!Q!['c!c!}'c#R#S'c#T#X'c#X#Y)q#Y#o'c~)xS]~S~!Q!['c!c!}'c#R#S'c#T#o'c~*ZUS~!Q!['c!c!}'c#R#S'c#T#f'c#f#g*m#g#o'c~*rUS~!Q!['c!c!}'c#R#S'c#T#i'c#i#j)Y#j#o'c",
  tokenizers: [0, 1],
  topRules: {"Program":[0,2]},
  specialized: [{term: 4, get: (value) => spec_Identifier[value] || -1}],
  tokenPrec: 378
});

const addIndent = (context) => context.lineIndent(context.node.from) + context.unit; // Indent for function body
const removeIndent = (context) => context.lineIndent(context.node.from);
const jikiscriptLanguage = LRLanguage.define({
    name: "jikiscript",
    parser: parser.configure({
        strict: false, // Toggle for sanity!
        props: [
            styleTags({
                String: tags.string,
                Boolean: tags.bool,
                LineComment: tags.lineComment,
                Integer: tags.number,
                Floating: tags.float,
                "repeat times repeat_until_game_over repeat_forever": tags.controlKeyword,
                "if else do end log": tags.controlKeyword,
                "function set change": tags.definitionKeyword,
                "with to": tags.keyword,
                "and or is equals": tags.logicOperator,
                "return": tags.keyword,
                ArithOp: tags.arithmeticOperator,
                CompareOp: tags.compareOperator,
                "> < >= <= ==": tags.operator,
                Identifier: tags.variableName,
                ArgumentList: tags.variableName,
                "( )": tags.paren,
                "[ ]": tags.squareBracket
            }),
            indentNodeProp.add({
                FunctionDefinition: addIndent,
                IfStatement: addIndent,
                ElseStatement: addIndent,
                RepeatStatement: addIndent,
                RepeatUntilGameOverStatement: addIndent,
                statement: addIndent, // Indent for nested statements
                EndStatement: removeIndent, // Reset for end statements
            }),
            foldNodeProp.add({
                FunctionDefinition: foldInside, // Allow folding of function blocks
                IfStatement: foldInside, // Allow folding of function blocks
            }),
        ],
    })
    // languageData: {
    //   closeBrackets: { brackets: ["(", "[", "do", '"'] },
    // }
    //   commentTokens: { line: "//" },
    // },
});
function jikiscript() {
    return new LanguageSupport(jikiscriptLanguage);
}
const jikiscriptStrict = LRLanguage.define({
    name: "jikiscriptStrict",
    parser: parser.configure({
        strict: true,
    }),
});

export { jikiscript, jikiscriptLanguage, jikiscriptStrict };
