﻿window.globalProvideData('slide', '{"title":"Text Entry Activity","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":3,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide3","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6Cs7O0vZBKK","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"5WuKEylBlrT.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.6jQ2SnjXBCM"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5kpqQv3EREL.InvalidPromptSlide"}}]}]},"ActGrpOnNextButtonClick":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5V1iNUQ1goF.6mn4qwvOkOR"}}]},"ActGrpOnPrevButtonClick":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5V1iNUQ1goF.6XdylPyvHvA"}}]},"ReviewInt_6ODSuA48emA":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5WuKEylBlrT"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_6ODSuA48emA":{"kind":"actiongroup","actions":[]},"AnsweredInt_6ODSuA48emA":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6ODSuA48emA"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10111111111"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10111111111"}]}]},"DisableChoices_6ODSuA48emA":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5WuKEylBlrT"},"enabled":{"type":"boolean","value":false}}]},"6ODSuA48emA_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6jQ2SnjXBCM.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6ODSuA48emA"}]}]},"NavigationRestrictionNextSlide_6Cs7O0vZBKK":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnNextButtonClick"}]},"NavigationRestrictionPreviousSlide_6Cs7O0vZBKK":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnPrevButtonClick"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxnanbsnfns10111111111"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxnanbsnfns10111111111"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6ODSuA48emA","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6mn4qwvOkOR"}}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6ODSuA48emA","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6mn4qwvOkOR"}}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6Cs7O0vZBKK"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6Cs7O0vZBKK"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5kpqQv3EREL","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5kpqQv3EREL","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"exe_actiongroup","id":"6ODSuA48emA_CheckAnswered"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":44,"id":"60yGw2gEmeX"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":15255,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5WuKEylBlrT"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"60udm8ewcZs"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"60yGw2gEmeX"}},{"kind":"media_play","objRef":{"type":"string","value":"60yGw2gEmeX"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"60yGw2gEmeX"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5XaCHkReEJR"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5XEj9nLUfUa"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6AVLq5Oa8hg"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6SJBSyjZtED"}}]}]},"objects":[{"kind":"textinput","bindto":"_player.TextEntry2","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":true,"maxchars":256,"placeholder":"Type response here.","fontsize":19,"textcolor":"0x000000","bold":false,"italic":false,"font":"Times New Roman Charset70F17049","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":35,"yPos":190,"tabIndex":3,"tabEnabled":true,"referenceName":"5WuKEylBlrT","xOffset":0,"yOffset":0,"rotateXPos":127,"rotateYPos":127,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"5WuKEylBlrT","linkId":"","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":235,"height":255,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":149,"bottom":23,"pngfb":false,"pr":{"l":"Lib","i":246}}},"html5data":{"xPos":0,"yPos":0,"width":255,"height":255,"strokewidth":1}},"width":255,"height":255,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":256,"bottom":256,"altText":"Type response here.","pngfb":false,"pr":{"l":"Lib","i":245}}},"id":"5WuKEylBlrT","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry2","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpOnSubmitButtonClick"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"60udm8ewcZs_-1117105457","id":"01","linkId":"txt__default_60udm8ewcZs","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":700,"height":65,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Question","style":{"fontFamily":"\\"Times New RomanBoldBold3F3ED7D4\\",\\"Times New Roman\\"","fontSize":14,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#000000","linkColor":"#000000","ascent":16.634,"descent":4.038,"leading":0.793,"underlinePosition":-2.033,"underlineThickness":1.777,"xHeight":8.522}},{"text":": What other incentives or ways can schools incorporate technology into classrooms if they have no financial help or if students do not have that kind of access to it besides using personal cell phones? ","style":{"fontFamily":"\\"Times New Roman Charset70F17049\\",\\"Times New Roman\\"","fontSize":14,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#000000","linkColor":"#000000","ascent":16.634,"descent":4.038,"leading":0.793,"underlinePosition":-2.033,"underlineThickness":0.911,"xHeight":8.349}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"center","listLevel":1,"lineSpacingRule":"multiple","lineSpacing":20,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"displayCase":"asIs","foregroundColor":"#000000"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":211,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":714,"bottom":71,"pngfb":false,"pr":{"l":"Lib","i":248}}}],"shapemaskId":"","xPos":0,"yPos":49,"tabIndex":1,"tabEnabled":true,"referenceName":"60udm8ewcZs","xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":37.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":75,"altText":"Question: What other incentives or ways can schools incorporate technology into classrooms if they have no financial help or if students do not have that kind of access to it besides using personal cell phones? ","pngfb":false,"pr":{"l":"Lib","i":247}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":75,"strokewidth":0}},"width":720,"height":75,"resume":true,"useHandCursor":true,"id":"60udm8ewcZs"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5XaCHkReEJR_-405174233","id":"01","linkId":"txt__default_5XaCHkReEJR","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":706,"height":46,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Text Entry Response Activity ","style":{"fontFamily":"\\"Times New Roman Charset70F17049\\",\\"Times New Roman\\"","fontSize":30,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":35.645,"descent":8.652,"leading":1.699,"underlinePosition":-4.355,"underlineThickness":1.953,"xHeight":17.891}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"center","listLevel":1,"lineSpacingRule":"multiple","lineSpacing":20,"spacingBefore":0,"spacingAfter":0,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":29,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":606,"bottom":51,"pngfb":false,"pr":{"l":"Lib","i":249}}}],"shapemaskId":"","xPos":0,"yPos":-3,"tabIndex":0,"tabEnabled":true,"referenceName":"5XaCHkReEJR","xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":26,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":52,"altText":"Text Entry Response Activity ","pngfb":false,"pr":{"l":"Lib","i":223}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":52,"strokewidth":0}},"width":720,"height":52,"resume":true,"useHandCursor":true,"id":"5XaCHkReEJR"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":43,"id":"01","url":"story_content/6MTVsEWrf6b.png","type":"normal","altText":"A cartoon of a person holding her hands up\\r\\n\\r\\nDescription automatically generated","width":387,"height":470,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":497,"yPos":161,"tabIndex":2,"tabEnabled":true,"referenceName":"5XEj9nLUfUa","xOffset":0,"yOffset":0,"rotateXPos":96.5,"rotateYPos":117.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-5,"top":-5,"right":196,"bottom":238,"altText":"A cartoon of a person holding her hands up\\r\\n\\r\\nDescription automatically generated","altTextOverridesText":true,"pngfb":false,"pr":{"l":"Lib","i":250}},"html5data":{"xPos":-2,"yPos":-2,"width":195,"height":237,"strokewidth":3}},"width":193,"height":235,"resume":true,"useHandCursor":true,"id":"5XEj9nLUfUa"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6AVLq5Oa8hg_1227815810","id":"01","linkId":"txt__default_6AVLq5Oa8hg","type":"acctext","xPos":7,"yPos":3,"xAccOffset":22,"yAccOffset":3,"width":132,"height":210,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Directions: \\n","style":{"fontFamily":"\\"Times New RomanBoldBold3F3ED7D4\\",\\"Times New Roman\\"","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#000000","linkColor":"#000000","ascent":14.258,"descent":3.461,"leading":0.68,"underlinePosition":-1.742,"underlineThickness":1.523,"xHeight":7.305}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"center","listLevel":1,"lineSpacingRule":"multiple","lineSpacing":20,"spacingBefore":0,"spacingAfter":0,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":13,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"In the text box to the left, write a solution to either problem presented in the question. Click ","style":{"fontFamily":"\\"Times New Roman Charset70F17049\\",\\"Times New Roman\\"","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#000000","linkColor":"#000000","ascent":14.258,"descent":3.461,"leading":0.68,"underlinePosition":-1.742,"underlineThickness":0.781,"xHeight":7.156}},{"text":"submit ","style":{"fontFamily":"\\"Times New RomanBoldBold3F3ED7D4\\",\\"Times New Roman\\"","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#000000","linkColor":"#000000","ascent":14.258,"descent":3.461,"leading":0.68,"underlinePosition":-1.742,"underlineThickness":1.523,"xHeight":7.305}},{"text":"when you are finished. ","style":{"fontFamily":"\\"Times New Roman Charset70F17049\\",\\"Times New Roman\\"","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#000000","linkColor":"#000000","ascent":14.258,"descent":3.461,"leading":0.68,"underlinePosition":-1.742,"underlineThickness":0.781,"xHeight":7.156}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"center","listLevel":1,"lineSpacingRule":"multiple","lineSpacing":20,"spacingBefore":0,"spacingAfter":0,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":127,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":155,"bottom":183,"pngfb":false,"pr":{"l":"Lib","i":252}}}],"shapemaskId":"","xPos":360,"yPos":229,"tabIndex":4,"tabEnabled":true,"referenceName":"6AVLq5Oa8hg","xOffset":0,"yOffset":0,"rotateXPos":88,"rotateYPos":108,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-10,"top":-8,"right":238,"bottom":228,"altText":"Directions: \\nIn the text box to the left, write a solution to either problem presented in the question. Click submit when you are finished. ","pngfb":false,"pr":{"l":"Lib","i":251}},"html5data":{"xPos":-10,"yPos":-8,"width":248,"height":236,"strokewidth":3}},"width":176,"height":216,"resume":true,"useHandCursor":true,"id":"6AVLq5Oa8hg"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":457,"tabIndex":5,"tabEnabled":true,"referenceName":"6SJBSyjZtED","xOffset":0,"yOffset":0,"rotateXPos":359.5,"rotateYPos":42.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":722,"bottom":87,"altText":"Rectangle 24 1","pngfb":false,"pr":{"l":"Lib","i":61}},"html5data":{"xPos":-1,"yPos":-1,"width":723,"height":88,"strokewidth":1}},"width":720,"height":86,"resume":true,"useHandCursor":true,"id":"6SJBSyjZtED"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');