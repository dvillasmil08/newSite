import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import BackgroundImage from '../../assets/img/cover.jpg'
import IndexNavbar from "components/Navbars/IndexNavbar";

function Rules() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper" >
        <div className="main" >
        <div className="section" 
        style={{backgroundImage:`url(${BackgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#050b0b',
                color:'white'
                }}>

            <Container >
              <Col className="ml-auto mr-auto " md="12">
                <h2 className="" style={{marginTop:'8rem'}}>SERVER RULES</h2>

                <div>
                <p><a href='/index' style={{textDecoration:'none', color:'grey'}}>HOME / </a>
                <span style={{color:'#e4b85d'}}>SERVER RULES</span></p>
                </div>

              </Col>
              <Col className="ml-auto mr-auto" md="12">
                <h3 className="">BASIC TERMS OF SERVICE</h3>
                
                <p>Personal insults and/or verbal attacks outside of specific roleplay situations and all forms
               		 of harassment are prohibited and will result in a ban.</p>
                <p>Racism, Homophobia, Transphobia, hate speech, and all forms of targeted derogatory or abusive language will 
				not be tolerated and will result in a permanent ban.</p>
                <p>Roleplay, text/voice chat, and general behaviour that violates the <a style={{color:'#e4b85d'}}
                    		href="https://www.twitch.tv/p/en-gb/legal/terms-of-service/">Twitch Terms of Service (ToS) </a> 
                		or <a style={{color:'#e4b85d'}} href="https://www.twitch.tv/p/en-gb/legal/community-guidelines/" >Twitch
                    		Community Guidelines</a> or <a style={{color:'#e4b85d'}} href="https://discord.com/terms/">Discord Terms of Service </a>  
				is prohibited and will result in a ban. </p>
              </Col>
              <Col className="ml-auto mr-auto" md="12">
                <h3 className="">BASIC COMMUNITY POLICIES</h3>
                <p>We are an English speaking server, all communication must be primarily conducted via English. 
				Fluency in English is required to join the community.</p>
                
                <p>You must be 18 years or older to apply for white-listing to the community. 
				This is non-negotiable to ensure we are within ToS for all 3rd party applications we utilize. 
				All characters on the server must be portrayed with a minimum age of 18.</p>
                
                <p>You must have a working microphone with no background noise and decent quality overall sound. 
				Failure to maintain good quality audio will result in application denial or temporary ban until the audio is fixed.</p>
                
                <p>We require all community members to utilize the WildRP Discord for communication and permissions management. 
				Failure to maintain membership in the Discord server will result in community removal.</p>
                
                <p>Should disagreements or instances of rule-breaking arise in game all members should attempt to roleplay through them
				without breaking character. Once the scenario is completed, members may then send in reports to staff. If the previous 
				is impossible, a WildRP staff member may contacted immediately. Out of character (OOC) arguments will not be tolerated. 
				If you believe a player has broken a rule submit a report via the Website Report feature rather then 
				starting an argument.</p>

                <p>If a person's overall quality of roleplay ability is deemed too low/inconsistent for the server, that person may be placed under staff 
				review. Subject to staff review any person on the server may receive disciplinary actions up to and including permanent bans for 
				character conduct which is deemed detrimental to the server.</p>

                <p>All weapons are fully dangerous/lethal at all times unless a server announcement from staff is made for a specific event. This means 
				all shootings and stabbings are real and must be dealt with through roleplay as if they are real. Practice fighting with weapons is not 
				allowed. Theatrical fighting should be restricted to stage areas and conducted in pre-announced events.
				All set duels with other characters will result in permanent character death/injury for the losing side.</p>

                <p>The utilization of glitches, exploits, hacks, third party crosshairs/aim pips, or bugs for personal gain will result in a ban from the server. 
				Hacking in particular is zero tolerance and will result in a permanent ban. If you find a glitch or in-game exploit 
				please notify the staff via the website forms.</p>

                <p>Erotic Roleplay of any kind is not tolerated and will result in a permanent ban. Forced relationship roleplay/potential rape and anything 
				remotely close to it will also result in a permanent ban.</p>

                <p>Suicide Roleplay of any kind is not tolerated and will result in a permanent ban.</p>
              </Col>
              
              <Col className="ml-auto mr-auto" md="12" >
                <h3 className="" >STAFF COMMUNICATION POLICY</h3>
                
                <p>The Revive/New Character Policy covers new characters and all events & actions leading up to a character being incapacitated, losing 
				conciousness, or dying.</p>
                
                <p>Players should not purposefully utilize information gained during an incapacitated, unconscious, or dead 
				state to directly self benefit, get revenge, report on criminals, or otherwise negatively impact other's roleplay.</p> 
                
                <p>If a player is gravely injured (multiple gunshot wounds, bear/wolf attack, multiple knife wounds, poison, being thrown off a cliff, etc) 
				the injured player should not be communicating well until healed and should limit communication and memory of the incident and the 
				period of time leading up to treatment.</p>
                
                <p>Should a player revive via pressing F to revive at the nearest doctor, that player must avoid returning to the area of "incapacitation" 
				for a significant amount of time on any character.</p> 
				
                <p>Should a character die, that player must avoid bringing another character to the same area for a significant amount of time, and 
				must forgot all information the dead character knew.</p> 
                
                <p>Common sense should be utilized when following this policy and will be utilized in enforcing it. Failure to to adhere to this policy 
				may result in a ban.</p>
                
              </Col>
              
              
              <Col className="ml-auto mr-auto" md="12" sty>
                <h3 className="">VALUE LIFE POLICY</h3>
                
                <p>At all times on the server, you must value your life and the lives of others. Characters should act according to their personality and 
				mannerisms when faced with a threat to their life, but must always attempt to preserve their own life and limit the damage done to 
				other's lives.</p>
                <p>Frequent participation in vigilantism, quick drawing/rapidly pulling weapons, or other violent/dangerous behavior likely to lead to 
				severe injury or death can possibly be considered failure to value life. Community members may ask the staff team for a definitive answer 
				as to whether specific behaviours would be considered failure to value life.</p> 
                <p>Common sense should be utilized when following this policy and will be utilized in enforcing it. Failure to to adhere to this policy 
				may result in a ban.</p>
                
              </Col>
              <Col className="ml-auto mr-auto" md="12">
                <h3 className="">FORCED DEATH POLICY</h3>
                
                <p>Players should not force other players to permanently kill their characters. Players must always give three different types of options 
				in these scenarios unless they have specific pre-approval from staff or the people they are interacting with. The options are as follows;</p>

				<p>1. Permanent character death with OOC consent from all parties involved. </p>
				<p>2. Temporary shelving of character (not playing this character for a specific amount of time) with OOC consent from all parties involved. </p>
				<p>3. Roleplay/Gameplay effect. This typically involves temporary consequences such injury, captivity, robbery, or another solution which 
					lets the individual decide their own final fate at a later point in time.</p>
		
                
              </Col>
              <Col className="ml-auto mr-auto" md="12">
                <h3 className="">HOGTIED/ROPED POLICY</h3>
                
                <p>Players should utilize common sense when hogtied, if they aren’t positive escaping makes sense, then they should not attempt escape. 
				Escaping without a blade or rock should take longer than with. Players should generally not break out of hogties unless;</p>
				<p>Your captor is outside of shouting voice range (32f). </p> 
				<p>Your captor has left you in an indoor room alone. </p>
				<p>A major distraction occurs, such as gunfire or explosions. </p>
				<p>Captor indicates to do so via RP or OOC instruction. </p>
                
              </Col>
              <Col className="ml-auto mr-auto" md="12">
                <h3 className="">NO OUT OF CHARACTER</h3>
                
                <p>Roleplaying is the main purpose of this server. You must stay in character at all times while on the server. OOC chat has been disabled 
				on the server and should be directed towards discord. Ignoring roleplay interactions and not interacting with others on the server is 
				considered breaking character. Failure to stay in character is prohibited and may result in a ban.</p>
                
              </Col>
              <Col className="ml-auto mr-auto" md="12">
                <h3 className="">NO META-GAMING</h3>
                
                <p>Meta-Gaming is using external factors, information, or knowledge your character would not be able to obtain 
				through normal roleplay means. This includes, but is not limited to, information gained through live 
				streams, videos, and out of character text channels both on Discord and in-game. 
		    	Meta-gaming is prohibited and may result in a ban. Watching streams while on server is prohibited. 
				Watching streams related to your own character while offline is discouraged.</p>
                
              </Col>
              <Col className="ml-auto mr-auto" md="12">
                <h3 className="">NO POWERGAMING</h3>
                
                <p>Power-Gaming is attempting to always maximize the ability that you will "Win" all roleplay and gameplay 
				scenarios at the cost of other's fun and ability to conduct good roleplay or gameplay. Consistent power 
				gaming is prohibited and may result in a ban.</p>
                
                
              </Col>
              <Col className="ml-auto mr-auto" md="12">
                <h3 className="">NO RANDOM DEATHMATCH</h3>
                
                <p>Random Deathmatch is the act of intentionally harming another character without any attempted 
				form of roleplay interaction. RDM is prohibited and will result in a ban. </p>	
                
              </Col>
              <Col className="ml-auto mr-auto" md="12">
                <h3 className="">CRIMINAL GROUP SIZE LIMIT</h3>
                
                <p>WildRP will allow for a maximum of 6 armed group members in any group of players with criminal intent or 
		criminal history to participate in an event at one time. Criminals may briefly meet in groups larger than 6, 
		but should not wander the map or participate in firefights/melees in groups larger than 6 without staff approval. 
		Approval may be received via direct messaging the WildRP Support Bot on Discord (WildRP Support#2174.)</p>
                
              </Col>
              <Col className="ml-auto mr-auto " md="12">
                <h3 className="">BANK ROBBERY RULES</h3>
                
                <p>The following rules are designed to ensure bank robberies are a mechanic which encourages good roleplay 
		while providing an intense, yet mutually enjoyable event for all parties involved.</p>

		<p>1. In order to rob a bank there must be at least 4 Law on duty. Following our group size rule, the maximum 
		number of criminal players that may participate in a bank robbery is 6, all criminals not directly involved 
		in the bank robbery are expected to leave town due to the increased danger. This number will be adjusted as 
		per server needs. Part of planning for a bank robbery is ensuring there are no more than 6 criminals fighting 
		the Law at one time, even if the criminals retreat to a hideout or something similar.</p>

		<p>2. For the time being, only 2 members of the robbery party may be outside of the bank (on a roof, waiting with 
		horses, down the street, etc.) during a robbery. All 6 outlaws/robbers involved in a Bank Robbery must be 
		waiting within town limits. Lawmen will have the option to ask how many outlaws are involved in the robbery, 
		and if there are any on the outside. The outlaws must answer truthfully so Law can ensure those not involved 
		are clearing the area.</p>

		<p>3. Players should plan to be identified after a robbery, significant federal effort will be spent identifying 
		bank robbers, and NPCs will be rewarded for sharing information. Robbers may wear masks or disguises, but 
		will likely be identified due to the length and amount of people involved in a robbery.</p> 

		<p>4. Each Player may only rob a bank once every 4 days, this includes the person initiating the robbery and 
		the people involved within the active robbery. This is a simple measure to prevent the mechanic from 
		being overused. This number will be adjusted as per server needs.</p>

		<p>5. If you are in town when a bank robbery begins, please RP as such. A bank robbery is a very dangerous 
		situation and it will be expected all uninvolved players act accordingly and follow the directives of 
		those involved in the scenario.The only players that should provide medical assistance at any point during 
		a bank robbery are those involved from either the criminal or Law side at the incident, all uninvolved 
		medics are expected to leave the area as well. Any character that is hanging around near a bank robbery may 
		be potentially be charged with a crime due to Peace Officers declaring Martial Law.</p>

		<p>6. If Bank Robbers choose to take player hostages, it must be via an organic interaction. Arranging hostages 
		via OOC pre-planning is not allowed. Bank NPCs are spawned in to be utilized as hostages, and are expected 
		to be treated as players during Robbery scenarios. All hostage taking is requested to be conducted with good 
		etiquette, and any form of excessive violence or torture involving hostages which detracts from the 
		Robbery scenario is discouraged.</p> 

		<p>7. Law will treat all hostages and the safety of the citizenry as their priority during Bank Robberies. 
		They will most likely declare Martial Law and clear the street the Bank is located on. Law will not attempt 
		to breach, engage, or generally conduct offensive movement until they verify hostage safety/death via hostage 
		transfers. Law will ask how many robbers are involved in the situation, and how many hostages the robbers have, 
		and expect a truthful response. Law will be set up to engage, but will not engage until the criminals initiate combat.</p>

		<p>8. If the Outlaw/Robber group decides during a Robbery to engage in a shootout, they are required to fire a warning 
		shot. The reasoning behind this is so no player is immediately killed without a chance to engage in the roleplay 
		scenario. When/if outlaws have decided they would like to escalate a robbery into violence, they must fire off a 
		shot and wait 10 seconds before engaging in combat. Once the robbers have fired off their initial shot and waited 
		the 10 seconds, the situation is considered to have moved into combat and all parties are free to engage at will.</p>
                
              </Col>
              <Col className="ml-auto mr-auto " md="12">
                <h3 className="">IMPERSONATION POLICY</h3>
                
                <p>Impersonation of government officials and Law Enforcement Officers is allowed. Falsification of 
		ID documents or Law Enforcement badges is not. If a player asks for an impersonator for "official 
		identification", then impersonation should not occur or cease happening. Failure to adhere to this rule will 
		result in a ban.</p>
                
              </Col>
              <Col className="ml-auto mr-auto " md="12">
                <h3 className="">IN-GAME LEAEDERSHIP POLICY</h3>
                
                <p>Any player that is a designated leader within any in-game entity (e.g. a criminal gang, a law enforcement 
		department, a civilian business) will have higher expectations in communication, gameplay, and rules adherence 
		placed upon them. Staff reserves the right to impose these expectations and issue OOC guidance to 
		in-game leaders due to the nature of server impact in game leaders have.</p>
                
              </Col> 
              <Col className="ml-auto mr-auto " md="12">
                <h3 className="">LAW PROVOCATION POLICY</h3>
                
                <p>Purposefully provoking LEOs or drawing attention to yourself from Law Enforcement solely with the 
		intention of starting a violent interaction with Law Enforcement is prohibited. Combat based interaction 
		with LEOs should occur naturally via roleplay. Failure to adhere to this rule will result in a ban.</p>
                
              </Col> 
              <Col className="ml-auto mr-auto " md="12">
                <h3 className="">SISKA PRISON POLICY</h3>
                
                <p>Visitation to Sisika Prison is allowed but most be roleplayed as visiting a "maximum security facility." 
			Guests and prisoners should obey Law orders whilst in the prison. Jail breaks and escapes from Sisika 
			are prohibited without staff approval. Approval may be received via direct messaging the WildRP Support Bot 
			on Discord (WildRP Support#2174.)
			</p>
                
              </Col>
              <Col className="ml-auto mr-auto " md="12">
                <h3 className="">TRAIN DRIVER NPC</h3>
                
                <p>Do not kill the train driver NPC! Only players with the Train Conductor role may drive the train and throw 
			        the NPC driver off the wheel.</p>
                
              </Col> 
              </Container>
              </div>
          </div>
        </div>
        <DarkFooter />
        
    </>
  );
}

export default Rules;