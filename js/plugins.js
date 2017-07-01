// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"MadeWithMv","status":false,"description":"メイン画面へ進む前に、\"Made with MV\"のスプラッシュ画面もしくはカスタマイズされたスプラッシュ画面を表示します。","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"DTextPicture","status":true,"description":"動的文字列ピクチャ生成プラグイン","parameters":{}},
{"name":"PictureCallCommon","status":true,"description":"ピクチャのボタン化プラグイン","parameters":{"透明色を考慮":"ON","ピクチャ番号の変数番号":"0","ポインタX座標の変数番号":"0","ポインタY座標の変数番号":"0","タッチ操作抑制":"OFF","戦闘中常にコモン実行":"OFF"}},
{"name":"AdjustPictureGraphical","status":true,"description":"ピクチャのグラフィカルな位置調整プラグイン。\nパラメータを変更したら「プロジェクトの保存」（Ctrl+S）","parameters":{"グリッドサイズ":"48","テストマップID":"-1"}},
{"name":"Torigoya_SameEquipType","status":true,"description":"装備タイプ名が同じならば、同じ種別のアイテムを装備できるようにします","parameters":{}},
{"name":"SAN_MapGenerator","status":true,"description":"自動マップ生成 ver1.15\r\n自動的にマップを生成しイベントを配置します。","parameters":{"WallHight":"1","MinRoomSize":"5","MaxRoomSize":"15","ShowOuterWall":"ON"}},
{"name":"scrollText","status":true,"description":"","parameters":{}},
{"name":"Vitsuno_SpritePerch","status":true,"description":"スプライト集合オブジェクト『パーチ』を定義するベースプラグインです。","parameters":{"Cursor Position":"top-right","Cursor Offset X":"0","Cursor Offset Y":"0","Cursor Interval":"10"}},
{"name":"Vitsuno_AbilityNetwork","status":true,"description":"防具システムを利用してアビリティ習得システムを構築します。","parameters":{"Menu Switch ID":"0","Level UP Point":"2","Point Name":"ＳＰ","Point Name A":"SP","Obtain Text":"%1 の%2を獲得！","Command Name":"スキルツリー","Point UP SE":"Equip1,90,100,0","Learning SE":"Item3,90,100,0","Perch Padding":"48","Perch Stage Height":"64"}},
{"name":"EnemyBook","status":false,"description":"モンスター図鑑です。敵キャラの詳細なステータスを表示します。","parameters":{"Unknown Data":"？？？？？？"}},
{"name":"DP_FixEscapeRatio","status":true,"description":"逃走の成功確率を設定できます。v1.00","parameters":{"Use Param":"false","Ratio":"100"}},
{"name":"PictureAnimation","status":true,"description":"ピクチャのアニメーションプラグイン","parameters":{}},
{"name":"TitleCommandPosition","status":true,"description":"タイトルコマンドウィンドウの位置を変更します。","parameters":{"Offset X":"-220","Offset Y":"70","Width":"240","Background":"0"}},
{"name":"SRD_TPUpgrade","status":true,"description":"(v3.02) This Plugin allows you to have more control over your TP system and have a dynamic Max TP stat.","parameters":{"Minimum Max TP":"1","Maximum Max TP":"99999","Preserve TP?":"false","Max TP in Status?":"false","Restrict Damage Gain?":"true","= Default Values =":"","Default Actor MTP":"100","Default Actor ITP":"Math.randomInt(25)","Default Enemy MTP":"100","Default Enemy ITP":"Math.randomInt(100)","= Battle TP Gains =":"","TP Bonus Crit Use":"0","TP Bonus Super Use":"0","TP Bonus Crit Take":"0","TP Bonus Super Take":"0"}},
{"name":"ItemBook","status":true,"description":"アイテム図鑑です。アイテムの詳細なステータスを表示します。","parameters":{"Unknown Data":"？？？？？？","Price Text":"価格","Equip Text":"装備","Type Text":"タイプ"}},
{"name":"BattleParallelEvent","status":true,"description":"戦闘中でも「並列処理」のコモンイベントを実行する為のプラグインです。","parameters":{}},
{"name":"SSG_ItemSort","status":true,"description":"[SSG] Item Sort: Sort your item by weighted value\r\n<SSG_ItemSort>\r\nversion 1.0.1","parameters":{"Default Sort Value 1":"100","Default Sort Value 2":"100","Sort Mode":"descending"}},
{"name":"YEP_BattleAICore","status":true,"description":"ver 1.05 バトルAIを、より管理されたものにすることができます。","parameters":{"Dynamic Actions":"true","Element Testing":"false","Default AI Level":"100"}},
{"name":"MessageWindowHidden","status":true,"description":"メッセージウィンドウ一時消去プラグイン","parameters":{"ボタン名称":"control"}},
{"name":"SyncVariable","status":true,"description":"ユーザ間の変数同期プラグイン","parameters":{"ユーザID":"noircastle","同期開始変数番号":"141","同期終了変数番号":"190","同期開始スイッチ番号":"201","同期終了スイッチ番号":"204","認証ファイル形式":"OFF"}},
{"name":"BattlebackChangeInBattle","status":true,"description":"バトルイベントでの戦闘背景変更が可能になります。","parameters":{}},
{"name":"BMSP","status":true,"description":"BMSPベースプラグインです。","parameters":{}},
{"name":"BMSP_EventBeforeAction","status":false,"description":"戦闘アクション実行前にコモンイベントを起動します。","parameters":{}},
{"name":"SideEffectSkill","status":false,"description":"スキルの副作用プラグイン","parameters":{}},
{"name":"BMSP_ContentsUpdator","status":false,"description":"ウインドウの指定領域の表示内容を切り替える機能を提供します。","parameters":{}},
{"name":"BMSP_StateDisplayExtension","status":false,"description":"ステート表示を拡張します。","parameters":{"AnimationType":"slideUp","WaitDuration":"120","AnimationDuration":"60","DrawSingle":"0"}},
{"name":"Torigoya_QuickSkill","status":true,"description":"選択するとターンを消費せずに即発動するスキルを追加します。","parameters":{}},
{"name":"dsBattlerSelect","status":false,"description":"戦闘中のバトラー選択を変更するプラグイン ver1.00β","parameters":{"cursorEnable":"1"}},
{"name":"RTK1_Core","status":true,"description":"RPG ツクール MV 用に作成された RTK1 ライブラリの基本機能です","parameters":{"language":"0","debug":"0","json":"0","tagname for sort":"ja_sortname"}},
{"name":"RTK1_Composite","status":true,"description":"アイテム・武器・防具の合成","parameters":{"meta tag":"composite","plugin command":"RTK1_Composite","in menu":"0","list sort":"0","auto learn":"0","success adjust menu":"1","charge adjust menu":"1","success adjust workroom":"1","charge adjust workroom":"0","success adjust shop":"1","charge adjust shop":"1"}},
{"name":"AB_EnemyBook","status":true,"description":"戦闘中も確認できるモンスター図鑑です。属性、ステートの耐性の確認もできます。","parameters":{"ShowCommandInBattle":"1","ResisterTiming":"1","ShowCurrentStatus":"0","---用語、アイコン---":"","EnemyBookCommandName":"敵の情報","Achievement":"達成率","UnknownEnemy":"？？？？？？","UnknownData":"？？？","WeakElementName":"弱点属性","ResistElementName":"耐性属性","WeakStateName":"弱点ステート","ResistStateName":"耐性ステート","NoEffectStateName":"無効ステート","UnknownDropItemIcon":"16","AddEnemySkillMessage":"%1を図鑑に登録した！","FailToAddEnemySkillMessage":"%1は図鑑には載せられない！","FailToCheckEnemySkillMessage":"%1の情報はわからなかった！","---表示項目---":"","DispNo":"1","DispHP":"1","DispMP":"1","DispATK":"1","DispDEF":"1","DispMAT":"1","DispMDF":"1","DispAGI":"1","DispLUK":"0","DispDropItems":"1","DispWeakElement":"1","DispResistElement":"1","DispWeakState":"1","DispResistState":"1","DispNoEffectState":"0","DispDescribe":"1","---属性アイコン---":"","UseElementIconInPluginParameter":"1","ElementIcons":"76 64 65 66 67 68 69 70 71 90"}},
{"name":"AcceptAllKeys","status":true,"description":"使えるキーを拡張します","parameters":{"key_a":"a","key_b":"b","key_c":"c","key_d":"d","key_e":"e","key_f":"f","key_g":"g","key_h":"h","key_i":"i","key_j":"j","key_k":"k","key_l":"l","key_m":"m","key_n":"n","key_o":"o","key_p":"p","key_q":"pageup","key_r":"r","key_s":"s","key_t":"t","key_u":"u","key_v":"v","key_w":"pagedown","key_x":"escape","key_y":"y","key_z":"ok","key_backspace":"backspace","key_tab":"tab","key_enter":"ok","key_shift":"shift","key_control":"control","key_alt":"control","key_escape":"escape","key_space":"ok","key_pageup":"pageup","key_pagedown":"pagedown","key_left":"left","key_right":"right","key_up":"up","key_down":"down","key_insert":"escape","numpad_0":"escape","numpad_2":"down","numpad_4":"left","numpad_6":"right","numpad_8":"up","F9":"debug"}},
{"name":"UTA_MessageSkip","status":true,"description":"特定キーを押す事でメッセージをスキップできるようにします。","parameters":{"Skip Key":"s","Show Trace":"false"}},
{"name":"Vitsuno_Difficulty","status":true,"description":"難易度により能力値や報酬倍率を変更できるようになります。","parameters":{"Init Difficulty ID":"2","Use Option":"1","Option Name":"難易度","--(Difficulty ID:1)--":"","1 : Name":"イージー","1 : Param Rate":"0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5","1 : Drop Rate":"1.0,1.0,1.0,1.0,1.0","--(ID:2)-------------":"","2 : Name":"ノーマル","2 : Param Rate":"1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0","2 : Drop Rate":"1.0,1.0,1.0,1.0,1.0","--(ID:3)-------------":"","3 : Name":"ハード","3 : Param Rate":"1.5,1.5,1.5,1.2,1.5,1.2,1.1,1.2","3 : Drop Rate":"2.0,2.0,1.5,1.5,1.5","--(ID:4)-------------":"","4 : Name":"デストロイ","4 : Param Rate":"2.0,2.0,2.0,1.5,2.0,1.5,1.2,1.5","4 : Drop Rate":"3.0,3.0,2.0,2.0,2.0","--(ID:5)-------------":"","5 : Name":"","5 : Param Rate":"2.0,2.0,2.0,2.0,2.0,2.0,2.0,2,0","5 : Drop Rate":"2.0,2.0,2.0,2.0,2.0","--(ID:6)-------------":"","6 : Name":"","6 : Param Rate":"1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0","6 : Drop Rate":"1.0,1.0,1.0,1.0,1.0","--(ID:7)-------------":"","7 : Name":"","7 : Param Rate":"1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0","7 : Drop Rate":"1.0,1.0,1.0,1.0,1.0","--(ID:8)-------------":"","8 : Name":"","8 : Param Rate":"1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0","8 : Drop Rate":"1.0,1.0,1.0,1.0,1.0"}},
{"name":"DifficultyExtend","status":true,"description":"難易度選択拡張プラグイン","parameters":{"難易度ID変数":"0","難易度IDスイッチ_1":"0","難易度ID弱点倍率_1":"1.0","難易度ID耐性倍率_1":"1.0","難易度IDスイッチ_2":"0","難易度ID弱点倍率_2":"1.0","難易度ID耐性倍率_2":"1.0","難易度IDスイッチ_3":"0","難易度ID弱点倍率_3":"1.0","難易度ID耐性倍率_3":"1.0","難易度IDスイッチ_4":"0","難易度ID弱点倍率_4":"1.0","難易度ID耐性倍率_4":"1.0","難易度IDスイッチ_5":"0","難易度ID弱点倍率_5":"1.0","難易度ID耐性倍率_5":"1.0","難易度IDスイッチ_6":"0","難易度ID弱点倍率_6":"1.0","難易度ID耐性倍率_6":"1.0","難易度IDスイッチ_7":"0","難易度ID弱点倍率_7":"1.0","難易度ID耐性倍率_7":"1.0","難易度IDスイッチ_8":"0","難易度ID弱点倍率_8":"1.0","難易度ID耐性倍率_8":"1.0"}},
{"name":"PickupSkill","status":true,"description":"任意のスキルを直接コマンドから選択出来る様にするプラグイン","parameters":{"PickupSkillName":"くすぐりスキッパー","PickupSkillId":"305","PickupTarget":"0"}},
{"name":"AutoBattle","status":true,"description":"自動戦闘プラグイン","parameters":{"パーティコマンド名称":"オート","パーティコマンド位置":"-1","アクターコマンド名称":"","アクターコマンド位置":"-1"}},
{"name":"TYA_EnemyHPGauge","status":true,"description":"敵ターゲットウィンドウにＨＰゲージを表示させます。\r\n特定の敵のゲージを非表示にすることもできます。","parameters":{}},
{"name":"MPP_TouchTargetSelect","status":true,"description":"【ver.1.3】戦闘時のターゲット選択で、キャラクターをタッチして選択できるようにします。","parameters":{"=== Actor ===":"","Actor Window View?":"true","Actor Arrow Name":"","Actor Arrow Pos":"0","Actor Arrow Width":"0","Actor Arrow Rate":"4","Actor Arrow Rotation":"0","Actor Arrow Speed":"0","=== Enemy ===":"","Enemy Window View?":"true","Enemy Arrow Name":"","Enemy Arrow Pos":"0","Enemy Arrow Width":"0","Enemy Arrow Rate":"4","Enemy Arrow Rotation":"0","Enemy Arrow Speed":"0"}},
{"name":"XPStyleBattleMV","status":false,"description":"XPStyleBattle for MV Build170625","parameters":{"(string)battlerGraphic.rootPath":"undefined","(boolean)battlerGraphic.enableAnimation":"false","(boolean)battlerGraphic.enablePopup":"undefined","(integer)battlerGraphic.damageDuration":"undefined","(integer)animation.playRate":"undefined","(string)targetCursor.fileName":"undefined","(integer)targetCursor.width":"undefined","(integer)targetCursor.animationSpeed":"undefined","(integer)targetCursor.moveSpeed":"undefined","(integer)targetCursor.minY":"undefined","(integer)targetInformation.gaugeWidth":"undefined","(string)targetInformation.scopeNotation.forParty":"undefined","(string)targetInformation.scopeNotation.forTroop":"undefined","(string)targetInformation.scopeNotation.forTroopRandom":"undefined","(boolean)targetInformation.actor.states":"undefined","(boolean)targetInformation.actor.hp":"undefined","(boolean)targetInformation.actor.mp":"undefined","(boolean)targetInformation.actor.tp":"undefined","(boolean)targetInformation.enemy.states":"undefined","(boolean)targetInformation.enemy.hp":"true","(boolean)targetInformation.enemy.mp":"undefined","(boolean)targetInformation.enemy.tp":"undefined","(boolean)battleMessage.enemyEmergeMessage":"undefined","(boolean)battleMessage.simpleBattleLog.useSimpleBattleLog":"false","(boolean)battleMessage.simpleBattleLog.displayAttack":"undefined","(boolean)battleMessage.simpleBattleLog.displayGuard":"undefined","(boolean)battleMessage.simpleBattleLog.drawIcon":"undefined","(integer)battleMessage.simpleBattleLog.align":"undefined","(string)battleMessage.simpleBattleLog.descriptionDelimiter":"undefined","(integer)battleMessage.simpleBattleLog.descriptionFontSize":"undefined","(boolean)windowLayout.itemSkill.fitting":"undefined","(boolean)windowLayout.itemSkill.maxHeight":"undefined","(integer)windowLayout.actorCommand.absolutePosition.x":"undefined","(integer)windowLayout.actorCommand.absolutePosition.y":"undefined","(integer)windowLayout.actorCommand.adjustPosition.x":"undefined","(integer)windowLayout.actorCommand.adjustPosition.y":"undefined","(integer)windowLayout.actorCommand.width":"undefined","(boolean)windowLayout.actorCommand.heightFitting":"undefined","(integer)windowLayout.actorCommand.visibleRows":"undefined","(boolean)windowLayout.actorCommand.isHorizontal":"undefined","(integer)windowLayout.actorCommand.maxCols":"undefined","(string)windowLayout.actorCommand.itemAlign":"undefined","(integer)windowLayout.partyCommand.position.x":"undefined","(integer)windowLayout.partyCommand.position.y":"undefined","(integer)windowLayout.partyCommand.width":"undefined","(boolean)windowLayout.partyCommand.heightFitting":"undefined","(integer)windowLayout.partyCommand.visibleRows":"undefined","(boolean)windowLayout.partyCommand.isHorizontal":"undefined","(integer)windowLayout.partyCommand.maxCols":"undefined","(string)windowLayout.partyCommand.itemAlign":"undefined","(integer)battleSpeed.basicSpeed":"undefined","(boolean)battleSpeed.animationFastForward":"undefined","(boolean)battleSpeed.animationDelayFastForward":"undefined","(integer)battleSpeed.actorStepDuration":"undefined","(integer)battleSpeed.animationSkipDuration":"undefined","(integer)battleSpeed.skipBlinkEffect":"undefined","(boolean)minorFixes.enableSelectionEffect":"undefined"}},
{"name":"CrossSave","status":true,"description":"クロスセーブプラグイン","parameters":{"ユーザID":"noircastle","ロード名称":"ネットワークロード","セーブ名称":"ネットワークセーブ","パスワード桁数":"6","説明文":"ネットワークパスワードを入力してください。","タイトルに追加":"ON","ファイルに追加":"ON","背景ピクチャ":"","認証ファイル形式":"OFF"}}
];
