function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6lYft3Ql0r3":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz5TzbdgUekQ8_0J8V74HpRevX4Ly_mVGqZe54ICfe5FXvXMyWv09smGrDIWnO_9pda/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v17q1attempts:player.GetVar("v17q1attempts"),v17q1answeredcorrect:player.GetVar("v17q1answeredcorrect"),v17q2attempts:player.GetVar("v17q2attempts"),v17q2answeredcorrect:player.GetVar("v17q2answeredcorrect"),v17q3attempts:player.GetVar("v17q3attempts"),v17q3answeredcorrect:player.GetVar("v17q3answeredcorrect")})
	}
	)
}

