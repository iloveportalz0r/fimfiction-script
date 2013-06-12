// ==UserScript==
// @name        Fimfiction Emote Extender
// @namespace   ffemoteextender
// @description Adds additional emotes to fimfiction.net.
// @include     http*://www.fimfiction.net/*
// @include     http*://fimfiction.net/*
// @grant       none
// @require		http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require		https://github.com/iloveportalz0r/fimfiction-script/raw/master/emoteHandler.js
// @version     1.1
// ==/UserScript==

$(document).ready(run);

function run() {
	
	initializeAPI();
	
	if (Site.page ==  PAGE.GROUPTHREAD || Site.page == PAGE.GROUP) {
		
		var emotes = [
			["http://i.imgur.com/NBEDt.png", "A"],
			["http://i.imgur.com/TkVcM.png", "A"],
			["http://i.imgur.com/hCkff.png", "A"],
			["http://i.imgur.com/FlxUX.png", "A"],
			["http://i.imgur.com/AhJQA.png", "A"],
			["http://i.imgur.com/ZebG2.png", "A"],
			["http://i.imgur.com/teICa.png", "A"],
			["http://i.imgur.com/QwaS1.png", "A"],
			["http://i.imgur.com/fIvet.png", "A"],
			["http://i.imgur.com/tkMRq.png", "A"],
			["http://i.imgur.com/sHp29.png", "A"],
			["http://i.imgur.com/DKLH4.png", "A"],
			["http://i.imgur.com/5Tp73.png", "A"],
			["http://i.imgur.com/N6frZ.png", "A"],
			["http://i.imgur.com/qDNQJ.png", "A"],
			["http://i.imgur.com/uVj8R.png", "A"],
			["http://i.imgur.com/CGBhB.png", "A"],
			["http://i.imgur.com/20x2X.png", "A"],
			["http://i.imgur.com/cgoor.png", "A"],
			["http://i.imgur.com/EYLpq.png", "A"],
			["http://i.imgur.com/oa0BJ.png", "A"],
			["http://i.imgur.com/Mpt2V.png", "A"],
			["http://i.imgur.com/tCets.png", "A"],
			["http://i.imgur.com/ZNGZn.png", "A"],
			["http://i.imgur.com/sYAzM.png", "A"],
			["http://i.imgur.com/ojb2X.png", "A"],
			["http://i.imgur.com/6skeR.png", "A"],
			["http://i.imgur.com/Ma3vZ.png", "A"],
			["http://i.imgur.com/VViKq.png", "A"],
			["http://i.imgur.com/BxLgU.png", "A"],
			["http://i.imgur.com/ULdav.png", "A"],
			["http://i.imgur.com/Wtyb9.png", "A"],
			["http://i.imgur.com/ZQwXp.png", "A"],
			["http://i.imgur.com/xJ9hG.png", "A"],
			["http://i.imgur.com/TVh3T.png", "A"],
			["http://i.imgur.com/Av7mi.png", "A"],
			["http://i.imgur.com/zbSFhpV.png", "A"],
			["http://i.imgur.com/oaEI1BM.png", "A"],
			["http://i.imgur.com/dObdk0h.png", "A"],
			["http://i.imgur.com/bEP8EQ2.png", "A"],
			
			["http://i.imgur.com/PKx4m.png", "B"],
			["http://i.imgur.com/30Blc.png", "B"],
			["http://i.imgur.com/i3eNB.png", "B"],
			["http://i.imgur.com/J1YdP.png", "B"],
			["http://i.imgur.com/mMp7L.png", "B"],
			["http://i.imgur.com/HZlOi.png", "B"],
			["http://i.imgur.com/wLZl0.png", "B"],
			["http://i.imgur.com/dB5nN.png", "B"],
			["http://i.imgur.com/iX6uT.png", "B"],
			["http://i.imgur.com/TAnnF.png", "B"],
			["http://i.imgur.com/YI5jr.png", "B"],
			["http://i.imgur.com/Kv8nA.png", "B"],
			["http://i.imgur.com/yGwJZ.png", "B"],
			["http://i.imgur.com/lebxZ.png", "B"],
			["http://i.imgur.com/QcNTf.png", "B"],
			["http://i.imgur.com/BoPE4.png", "B"],
			["http://i.imgur.com/AUoqx.png", "B"],
			["http://i.imgur.com/gphLa.png", "B"],
			["http://i.imgur.com/7PYFy.png", "B"],
			["http://i.imgur.com/qACFB.png", "B"],
			["http://i.imgur.com/DHDbq.png", "B"],
			["http://i.imgur.com/DHfUL.png", "B"],
			["http://i.imgur.com/DGsL3.png", "B"],
			["http://i.imgur.com/9YyaH.png", "B"],
			["http://i.imgur.com/REXzM.png", "B"],
			["http://i.imgur.com/eAjva.png", "B"],
			["http://i.imgur.com/DobP4.png", "B"],
			["http://i.imgur.com/OzWNB.png", "B"],
			["http://i.imgur.com/8zRAx.png", "B"],
			["http://i.imgur.com/NZ9LG.png", "B"],
			["http://i.imgur.com/DiqwR.png", "B"],
			["http://i.imgur.com/jjgRs.png", "B"],
			["http://i.imgur.com/yEdBp.png", "B"],
			["http://i.imgur.com/BbPhC.png", "B"],
			["http://i.imgur.com/eWyjh.png", "B"],
			["http://i.imgur.com/lyj7g.png", "B"],
			["http://i.imgur.com/SUAwQ.png", "B"],
			["http://i.imgur.com/JT3f7.png", "B"],
			["http://i.imgur.com/UQUPg.png", "B"],
			["http://i.imgur.com/aMNtT.png", "B"],
			
			["http://i.imgur.com/oZUgV.png", "C"],
			["http://i.imgur.com/XtUF0.png", "C"],
			["http://i.imgur.com/o42xN.png", "C"],
			["http://i.imgur.com/uCBdE.png", "C"],
			["http://i.imgur.com/h6FPh.png", "C"],
			["http://i.imgur.com/Zvhzz.png", "C"],
			["http://i.imgur.com/qO3Da.png", "C"],
			["http://i.imgur.com/UGWzB.png", "C"],
			["http://i.imgur.com/477xD.png", "C"],
			["http://i.imgur.com/H718D.png", "C"],
			["http://i.imgur.com/9HNfn.png", "C"],
			["http://i.imgur.com/rv8JX.png", "C"],
			["http://i.imgur.com/aBIJ1.png", "C"],
			["http://i.imgur.com/DmoWN.png", "C"],
			["http://i.imgur.com/RXtaw.png", "C"],
			["http://i.imgur.com/u3SP8.png", "C"],
			["http://i.imgur.com/ZkYG2.png", "C"],
			["http://i.imgur.com/zI6pj.png", "C"],
			["http://i.imgur.com/NRtTF.png", "C"],
			["http://i.imgur.com/u9iJV.png", "C"],
			["http://i.imgur.com/BDNMW.png", "C"],
			["http://i.imgur.com/uEidI.png", "C"],
			["http://i.imgur.com/ahOjP.png", "C"],
			["http://i.imgur.com/fH5FO.png", "C"],
			["http://i.imgur.com/gl6yp.png", "C"],
			["http://i.imgur.com/j4frQ.png", "C"],
			["http://i.imgur.com/pjagI.png", "C"],
			["http://i.imgur.com/GmNPM.png", "C"],
			["http://i.imgur.com/GIV4g.png", "C"],
			["http://i.imgur.com/rTIx4.png", "C"],
			["http://i.imgur.com/5faXAtj.png", "C"],
			["http://i.imgur.com/5wxoPUa.png", "C"],
			["http://i.imgur.com/3Sr1ACU.png", "C"],
			["http://i.imgur.com/pV4j88A.png", "C"],
			["http://i.imgur.com/CqXDDh6.png", "C"],
			
			["http://i.imgur.com/LbXFj.png", "E"],
			["http://i.imgur.com/QoZIz.png", "E"],
			["http://i.imgur.com/lx5pI.png", "E"],
			["http://i.imgur.com/UwaXc.png", "E"],
			["http://i.imgur.com/kXPdl.png", "E"],
			["http://i.imgur.com/nXFjR.png", "E"],
			["http://i.imgur.com/IMGC8.png", "E"],
			["http://i.imgur.com/0lMv9.png", "E"],
			["http://i.imgur.com/VK1CV.png", "E"],
			["http://i.imgur.com/2tu9n.png", "E"],
			["http://i.imgur.com/dWaeV.png", "E"],
			["http://i.imgur.com/W9ZCa.png", "E"],
			["http://i.imgur.com/xeWgy.png", "E"],
			["http://i.imgur.com/EKbat.png", "E"],
			["http://i.imgur.com/563Gv.png", "E"],
			["http://i.imgur.com/nh9dv.png", "E"],
			["http://i.imgur.com/xo9Mr.png", "E"],
			["http://i.imgur.com/Y7iEz.png", "E"],
			["http://i.imgur.com/mmjN8.png", "E"],
			["http://i.imgur.com/a9ddz.png", "E"],
			["http://i.imgur.com/cvM4P.png", "E"],
			["http://i.imgur.com/MdJgU.png", "E"],
			["http://i.imgur.com/Ku52Y.png", "E"],
			["http://i.imgur.com/MGw7s.png", "E"],
			["http://i.imgur.com/IbDeO.png", "E"],
			["http://i.imgur.com/vBxYG.png", "E"],
			["http://i.imgur.com/DN4kI.png", "E"],
			["http://i.imgur.com/jorT3.png", "E"],
			["http://i.imgur.com/2DFdg.png", "E"],
			["http://i.imgur.com/P83z2.png", "E"],
		
			["http://i.imgur.com/dVnqE.png", "AJ"],
			["http://i.imgur.com/TAf9J.png", "AJ"],
			["http://i.imgur.com/gNxjD.png", "AJ"],
			["http://i.imgur.com/JmYib.png", "AJ"],
			["http://i.imgur.com/aPZth.png", "AJ"],
			["http://i.imgur.com/4sZY1.png", "AJ"],
			["http://i.imgur.com/1NN8f.png", "AJ"],
			["http://i.imgur.com/xmRQV.png", "AJ"],
			["http://i.imgur.com/lGb8P.png", "AJ"],
			["http://i.imgur.com/0zTKq.png", "AJ"],
			["http://i.imgur.com/BeQHk.png", "AJ"],
			["http://i.imgur.com/fl6ox.png", "AJ"],
			["http://i.imgur.com/mbZjl.png", "AJ"],
			["http://i.imgur.com/r19vB.png", "AJ"],
			["http://i.imgur.com/hMgvT.png", "AJ"],
			["http://i.imgur.com/ZCoEh.png", "AJ"],
			["http://i.imgur.com/1ppRy.png", "AJ"],
			["http://i.imgur.com/kjSfI.png", "AJ"],
			["http://i.imgur.com/pwUmu.png", "AJ"],
			["http://i.imgur.com/geqle.png", "AJ"],
			["http://i.imgur.com/LOrxf.png", "AJ"],
			["http://i.imgur.com/Evd0x.png", "AJ"],
			["http://i.imgur.com/tjCXQ.png", "AJ"],
			["http://i.imgur.com/NlvYtnA.png", "AJ"],
			["http://i.imgur.com/Qe7TiLt.png", "AJ"],
			["http://i.imgur.com/yAmRYea.png", "AJ"],
			["http://i.imgur.com/pww1wjm.png", "AJ"],
			["http://i.imgur.com/KZHFE8U.png", "AJ"],
			["http://i.imgur.com/MZsrxQK.png", "AJ"],
			
			["http://i.imgur.com/sb2Qbof.png", "FS"],
			["http://i.imgur.com/24nRCr5.png", "FS"],
			["http://i.imgur.com/AFuKMoD.png", "FS"],
			["http://i.imgur.com/mkCLMHb.png", "FS"],
			["http://i.imgur.com/IOcuWkK.png", "FS"],
			["http://i.imgur.com/YUeUKME.png", "FS"],
			["http://i.imgur.com/z4PAdhi.png", "FS"],
			["http://i.imgur.com/wwVpoHt.png", "FS"],
			["http://i.imgur.com/cSViT7t.png", "FS"],
			["http://i.imgur.com/3UFhl3F.png", "FS"],
			["http://i.imgur.com/968NYEH.png", "FS"],
			["http://i.imgur.com/i98QYFY.png", "FS"],
			["http://i.imgur.com/HUbolAq.png", "FS"],
			["http://i.imgur.com/Ade2YQ4.png", "FS"],
			["http://i.imgur.com/nirPCDd.png", "FS"],
			["http://i.imgur.com/MHYaQsA.png", "FS"],
			["http://i.imgur.com/r4SxEH3.png", "FS"],
			["http://i.imgur.com/xZjtFqi.png", "FS"],
			["http://i.imgur.com/5c1j3xv.png", "FS"],
			["http://i.imgur.com/uSOX8aw.png", "FS"],
			["http://i.imgur.com/EcWBGKl.png", "FS"],
		
			["http://i.imgur.com/fiITL.png", "RD"],
			["http://i.imgur.com/1mJFi.png", "RD"],
			["http://i.imgur.com/fQFdk.png", "RD"],
			["http://i.imgur.com/5JXsL.png", "RD"],
			["http://i.imgur.com/drWSW.png", "RD"],
			["http://i.imgur.com/r1Eed.png", "RD"],
			["http://i.imgur.com/mI2kf.png", "RD"],
			["http://i.imgur.com/JJakx.png", "RD"],
			["http://i.imgur.com/2mIou.png", "RD"],
			["http://i.imgur.com/l49YA.png", "RD"],
			["http://i.imgur.com/Bo3i2.png", "RD"],
			["http://i.imgur.com/F4J97.png", "RD"],
			["http://i.imgur.com/99WZ6.png", "RD"],
			["http://i.imgur.com/KgKuu.png", "RD"],
			["http://i.imgur.com/ys5RX.png", "RD"],
			["http://i.imgur.com/m10uz.png", "RD"],
			["http://i.imgur.com/AJ9zx.png", "RD"],
			["http://i.imgur.com/81dJd.png", "RD"],
			["http://i.imgur.com/vc4Ok.png", "RD"],
			["http://i.imgur.com/e09RZ.png", "RD"],
			["http://i.imgur.com/Uvt7B.png", "RD"],
			["http://i.imgur.com/DupLe.png", "RD"],
			["http://i.imgur.com/Am3AY.png", "RD"],
			["http://i.imgur.com/7TZmw.png", "RD"],
			
			["http://i.imgur.com/KluyWmn.png", "R"],
			["http://i.imgur.com/cUszKbb.png", "R"],
			["http://i.imgur.com/9yFw70j.png", "R"],
			["http://i.imgur.com/hyH6usq.png", "R"],
			["http://i.imgur.com/CpZgXTk.png", "R"],
			["http://i.imgur.com/hT1CSak.png", "R"],
			["http://i.imgur.com/HDAG3B9.png", "R"],
			["http://i.imgur.com/tHHlMgs.png", "R"],
			["http://i.imgur.com/GLRdqlz.png", "R"],
			["http://i.imgur.com/dwryYQj.png", "R"],
			["http://i.imgur.com/pqytDZN.png", "R"],
			["http://i.imgur.com/JqAPTWq.png", "R"],
			["http://i.imgur.com/mmVWxDL.png", "R"],
			["http://i.imgur.com/YHqF6Oe.png", "R"],
			
			["http://i.imgur.com/5OGeQ.png", "TS"],
			["http://i.imgur.com/hs7Hh.png", "TS"],
			["http://i.imgur.com/Srz3i.png", "TS"],
			["http://i.imgur.com/HlSYp.png", "TS"],
			["http://i.imgur.com/2652g.png", "TS"],
			["http://i.imgur.com/NmMWv.png", "TS"],
			["http://i.imgur.com/Ccokh.png", "TS"],
			["http://i.imgur.com/hgIE1.png", "TS"],
			["http://i.imgur.com/hRqZN.png", "TS"],
			["http://i.imgur.com/2hXpy.png", "TS"],
			["http://i.imgur.com/ZsI8b.png", "TS"],
			["http://i.imgur.com/fGB3u.png", "TS"],
			["http://i.imgur.com/1wjw2.png", "TS"],
			["http://i.imgur.com/wnSmS.png", "TS"],
			["http://i.imgur.com/r0Rhe.png", "TS"],
			["http://i.imgur.com/cCChp.png", "TS"],
			["http://i.imgur.com/UkpBz.png", "TS"],
			["http://i.imgur.com/MRdvo.png", "TS"],
			["http://i.imgur.com/OJHNg.png", "TS"],
			["http://i.imgur.com/IZJSZ.png", "TS"],
			["http://i.imgur.com/z2R9A.png", "TS"],
			["http://i.imgur.com/AKn7J.png", "TS"],
			
			["http://i.imgur.com/zbei6cO.png", "PP"],
			["http://i.imgur.com/zplekGi.png", "PP"],
			["http://i.imgur.com/jvzynek.png", "PP"]
		];
		
		for (var i = 0; i < emotes.length; i++) {
			addEmote(emotes[i][0], emotes[i][1]);
		}
		
	}
	
}