let descriptionMenuText = {"You are new recruit in a kingdom’s military, you have been tasked by the military and your superiors to get to Suss Fal base, the nicest military base in the country that all new recruits wish to be deployed to, and deliver a secret package. You absolutely need to deliver this package; the lives of your comrades may depend on it.",
"However, your superiors failed to tell you how to get there other than the relative direction and a few natural landmarks to help guide your way.",
"The first natural landmark is the Decin Ding River, a mystical river where a dense fog lingers above it which envelops anything that it embraces.",
"The second natural landmark is the Spirit Forest, a forest that contains a wide variety of spirits that usually are docile during the day, but more aggressive at night."
};


var questions = [
{questionId:"question1",formName:"form1",radioName:"hangoutWFriendChoice1", values:["Peter (+50 happiness)","Thomas (+20 happiness)","Seth(+10 happiness)"]},
{questionId:"question2",formName:"form2",radioName:"goToDoctorSickChoice2", values:["Get the shot(-10 happiness)","Freak out(-10 happiness)"]},
{questionId:"question3",formName:"form3",radioName:"AskGirlOutChoice3", values:["Ask her out (+20 happiness)","Don't ask her out(-10 happiness)"]},
{questionId:"question4",formName:"form4",radioName:"DiscussHalloweenChoice4", values:["Yes (+50 happiness)","No (-5 happiness)"]},
{questionId:"question5",formName:"form5",radioName:"goToDoctorSickChoice5", values:["Get the shot(-10 happiness)","Freak out(-10 happiness)"],
{questionId:"question6",formName:"form6",radioName:"AskDadToPlayChoice6", values:["Ask him (+20 happiness)","Don't ask him (-5 happiness)"]},
{questionId:"question7",formName:"form7",radioName:"SnowDayFriendPlayChoice7", values:["Yes (+10 happiness)","No (-20 happiness)"]},
{questionId:"question8",formName:"form8",radioName:"ChristmasPresentChoice8", values:["GameCube(+50 happiness)","GameBoy (+20 happiness)","Socks (-10 happiness)"]}
];



function createFirstQuestion(){
  var theInput = document.createElement("input");
  theInput.setAttribute('type',"radio");
  theInput.setAttribute('name',"firstQuest");
  theInput.setAttribute('value',"John");
}

function
