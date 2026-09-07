export interface Paragraph {
  id: string;
  type: "paragraph" | "quote" | "heading" | "separator" | "dialogue";
  text: string;
  speaker?: string;
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  pageStart: number;
  pageEnd: number;
  summary: string;
  paragraphs: Paragraph[];
}

export interface Book {
  title: string;
  subtitle: string;
  series: string;
  author: string;
  copyright: string;
  description: string;
  coverImage: string;
  publishedYear: number;
  totalPageCount: number;
  chapters: Chapter[];
}

export const bookData: Book = {
  "title": "When Time Stood Still",
  "subtitle": "Book One",
  "series": "Project Sarvam",
  "author": "Medhansh Khedekar",
  "copyright": "© 2026 Medhansh Khedekar. All rights reserved.",
  "description": "A mythological sci-fi exploration of civilization and intelligence, where ancient systems meet future consciousness.",
  "coverImage": "/book-cover.jpg",
  "publishedYear": 2026,
  "totalPageCount": 206,
  "chapters": [
    {
      "id": "chapter-1",
      "number": "Chapter 1",
      "title": "The Sen Gupta's",
      "pageStart": 3,
      "pageEnd": 21,
      "summary": "Following the cremation of Dr. Arvind Sen Gupta on the ghats of Banaras, brothers Vikram and Arav face their grief and their father's enigmatic legacy.",
      "paragraphs": [
        {
          "id": "chapter-1-p1",
          "type": "paragraph",
          "text": "Dusk had fallen like old cloth over Banaras. The sky smouldered the same faint orange as the embers that licked the river’s edge. Smoke drifted slow, curling into the chant of priests. “Ram naam satya hai…” Over and over. The sound walked down the ghats like tired footsteps."
        },
        {
          "id": "chapter-1-p2",
          "type": "paragraph",
          "text": "From the shadows near the steps, a frail man watched. His beard caught the light of the pyre; his eyes didn’t blink. They called him mad—Markandeya, the old ascetic who mumbled to himself and lived by the river."
        },
        {
          "id": "chapter-1-p3",
          "type": "paragraph",
          "text": "But tonight, his gaze was steady, ancient. He had seen countless pyres, yet this one burned differently. The air around it was thicker, listening."
        },
        {
          "id": "chapter-1-p4",
          "type": "paragraph",
          "text": "He leaned on his staff, murmured a line only the wind could hear:\n“Fire burns only matter, not meaning.”"
        },
        {
          "id": "chapter-1-p5",
          "type": "paragraph",
          "text": "The corpse on the wood was already giving in to flame. Around it, men moved with the slow precision of grief. One of them—tall, rigid, eyes hollow but dry—offered ghee into the fire. His brother stood beside him, shivering despite the heat. The older one was named Vikram. The younger—Arav. Sons of Dr. Arvind Sen Gupta."
        },
        {
          "id": "chapter-1-p6",
          "type": "paragraph",
          "text": "Markandeya’s lips curved faintly. “So it begins,” he whispered. The Ganga, as if agreeing, slapped the stone steps with a single wave."
        },
        {
          "id": "chapter-1-p7",
          "type": "paragraph",
          "text": "He saw the spectacles fall—small, black-rimmed, half-melted—tumbling off the burning heap like an afterthought. The younger one, Arav, flinched. Markandeya could almost hear the boy’s heartbeat from where he stood."
        },
        {
          "id": "chapter-1-p8",
          "type": "paragraph",
          "text": "Ash and memory—both were beginning to rise."
        },
        {
          "id": "chapter-1-p9",
          "type": "paragraph",
          "text": "The old man turned away before the final chant ended. He tapped his staff against the stone once, twice. Somewhere behind him, a watch stopped ticking."
        },
        {
          "id": "chapter-1-p10",
          "type": "paragraph",
          "text": "The smoke rose, and Markandeya’s eyes followed it.\nFor a breath, the fire blurred, and the world around it bent—like heat above a desert road. The chants dissolved into a ringing silence."
        },
        {
          "id": "chapter-1-p11",
          "type": "paragraph",
          "text": "He wasn’t standing on the ghat anymore. He was inside the smoke. Inside the years."
        },
        {
          "id": "chapter-1-p12",
          "type": "paragraph",
          "text": "He saw Dr. Arvind Sen Gupta alive again—grey hair swept back, rimless glasses glinting in lab light. The man’s hands moved over a blackboard filled with Sanskrit lines, half-equations, half-prayers. His voice was calm, almost kind.\n“Time is not a river, Arav,” he said. “It’s the space between two silences.”"
        },
        {
          "id": "chapter-1-p13",
          "type": "paragraph",
          "text": "The child beside him—eight, maybe nine—looked up, eyes wide, trying to see what his father saw. In the background, another boy, older, was assembling something—metal rings, wires, a lens. Vikram’s fingers were precise, certain even then."
        },
        {
          "id": "chapter-1-p14",
          "type": "paragraph",
          "text": "Markandeya’s vision rippled. The blackboard shattered into symbols. The lab folded back into flame. The three of them stood together for a moment longer—father between sons, both holding different kinds of light. Then the father’s outline turned to ash, leaving only the boys staring at each other through the smoke."
        },
        {
          "id": "chapter-1-p15",
          "type": "paragraph",
          "text": "The old ascetic blinked. The fire returned to ordinary orange, the smell of ghee and sandalwood thick again. People were murmuring, priests moving with their brass bowls. But for Markandeya, the scene hadn’t ended—it had only looped."
        },
        {
          "id": "chapter-1-p16",
          "type": "paragraph",
          "text": "He muttered to himself, “The sons carry what the father could not finish… one will remember, the other will repeat.”\nThe river lapped at his toes, cold as truth."
        },
        {
          "id": "chapter-1-p17",
          "type": "paragraph",
          "text": "He looked once more at the younger one—Arav—who was staring into the fire as if searching for words inside the ash.\n“Yes,” Markandeya breathed. “He’s beginning to hear it.”"
        },
        {
          "id": "chapter-1-p18",
          "type": "paragraph",
          "text": "Arav couldn’t feel his hands. They hung by his side, numb, as if the fire had stolen the warmth from his skin. The chants kept circling the pyre like trapped birds, and every sound — the bells, the crackle, the faint sobs of relatives — seemed far away, like echoes underwater."
        },
        {
          "id": "chapter-1-p19",
          "type": "paragraph",
          "text": "He was twenty-one, standing among men who spoke like gods — professors, ministers, officers in spotless kurtas — all of them speaking softly about “a great loss for the nation,” about “Dr. Sen Gupta’s unmatched contribution.” Their words clanged inside his skull, metallic and meaningless."
        },
        {
          "id": "chapter-1-p20",
          "type": "paragraph",
          "text": "No one said Baba."
        },
        {
          "id": "chapter-1-p21",
          "type": "paragraph",
          "text": "Arav stared at the pyre. The air shimmered. He saw his father’s spectacles crumble into the fire — glass cracking, bending, giving way — and for a heartbeat he almost broke. His throat clenched. He wanted to cry, to fall to his knees and let everything pour out. But the crowd behind him was too polished, too composed. His brother stood beside him — straight spine, chin set — and Arav knew he couldn’t be the one who collapsed. Not here. Not in front of them."
        },
        {
          "id": "chapter-1-p22",
          "type": "paragraph",
          "text": "He bit the inside of his cheek until he tasted blood."
        },
        {
          "id": "chapter-1-p23",
          "type": "paragraph",
          "text": "The priests kept chanting, “Om shanti shanti shanti…” and he felt like shouting no, there’s no peace here. But he didn’t move. He just stared at the smoke curling upward — a slow, patient climb into a sky that didn’t care."
        },
        {
          "id": "chapter-1-p24",
          "type": "paragraph",
          "text": "Inside, he whispered, Baba, I’m sorry."
        },
        {
          "id": "chapter-1-p25",
          "type": "paragraph",
          "text": "The memory came without warning: his father sitting at the study table, oil lamp flickering, calling him closer.\n“See, Arav, light bends in water because it slows down,” he’d said, dipping a pencil into a glass. “Even light hesitates sometimes.” That had made them both laugh once — a small, easy sound — but now it returned like a blade."
        },
        {
          "id": "chapter-1-p26",
          "type": "paragraph",
          "text": "He blinked hard, forcing the tears back. His eyes burned anyway. Everyone around him was mourning the scientist. Only he was missing the man."
        },
        {
          "id": "chapter-1-p27",
          "type": "paragraph",
          "text": "And in that crowd of white clothes and murmured condolences, Arav had never felt more alone."
        },
        {
          "id": "chapter-1-p28",
          "type": "paragraph",
          "text": "Vikram held the torch with both hands, its flame unsteady in the river wind. The priest’s chant faded into a hum, and for a moment, the world narrowed to wood, smoke, and duty."
        },
        {
          "id": "chapter-1-p29",
          "type": "paragraph",
          "text": "He lowered the flame to the pyre, touching it to the soaked cloth. The fire caught with a hiss — bright, hungry — swallowing what was left of the man who had taught him everything about control."
        },
        {
          "id": "chapter-1-p30",
          "type": "paragraph",
          "text": "The people behind him murmured blessings. Professors, politicians, journalists — all eyes on him. Vikram Sen Gupta, son of the great Dr. Arvind Sen Gupta. Calm. Collected. A pillar in the storm."
        },
        {
          "id": "chapter-1-p31",
          "type": "paragraph",
          "text": "He bowed, pressed his palms together, and stepped back exactly as the priest had told him. No hesitation, no falter. The kind of grace his father would’ve expected."
        },
        {
          "id": "chapter-1-p32",
          "type": "paragraph",
          "text": "But his throat was sand."
        },
        {
          "id": "chapter-1-p33",
          "type": "paragraph",
          "text": "He wanted to breathe and couldn’t. Every chant, every click of a camera, scraped against the edge of something raw inside him. He saw flashes — Baba in his lab coat, calling him “Viku” when no one else was around, proud eyes shining after his first publication. The same eyes that now stared blankly through the smoke, because he couldn’t stop imagining them there."
        },
        {
          "id": "chapter-1-p34",
          "type": "paragraph",
          "text": "He’d married Meera just last year. She stood behind the line of guests now, a white dupatta covering her head, eyes swollen. He didn’t look at her. Couldn’t. Because if he did, the wall he’d built around himself would fall apart right here, in front of all these people. And he wasn’t allowed to fall apart. Not him."
        },
        {
          "id": "chapter-1-p35",
          "type": "paragraph",
          "text": "The priest’s hand landed gently on his shoulder. “It is done, beta. The soul is free.”"
        },
        {
          "id": "chapter-1-p36",
          "type": "paragraph",
          "text": "Vikram nodded once, though he didn’t believe it. He turned slightly and saw Arav — small, trembling, lost — and a flicker of anger passed through him. Not at his brother, but at himself, for wanting to do the same: to cry like a child."
        },
        {
          "id": "chapter-1-p37",
          "type": "paragraph",
          "text": "He clenched his jaw instead. Baba had always said, “Emotion is the first distortion of truth.” So he stood still, back straight, hands behind his back, letting the fire rise."
        },
        {
          "id": "chapter-1-p38",
          "type": "paragraph",
          "text": "Inside, though, he whispered the words no one heard — I can’t do this without you, Baba."
        },
        {
          "id": "chapter-1-p39",
          "type": "paragraph",
          "text": "And when the first ember burst and drifted toward the river, he felt something break — not loud, not visible, but final."
        },
        {
          "id": "chapter-1-p40",
          "type": "paragraph",
          "text": "The fire had settled into a low roar — orange bones breaking, collapsing in slow rhythm. The priests still chanted, but the tone had changed. Softer. Final."
        },
        {
          "id": "chapter-1-p41",
          "type": "paragraph",
          "text": "Reality came rushing back like a bad tide. Phones started buzzing again. Someone whispered about the next morning’s press release. The sound of slippers scraping stone mixed with the river’s hiss. Smoke clung to everyone’s clothes, to their hair, to their sentences."
        },
        {
          "id": "chapter-1-p42",
          "type": "paragraph",
          "text": "Vikram’s colleagues from the Ministry stepped forward — polite condolences, careful handshakes. “Your father’s work will live on, Vikram,” one of them said. “The government will see to that.”\nHe nodded mechanically, thanking them, though the words meant nothing. Live on — as if equations could replace a heartbeat."
        },
        {
          "id": "chapter-1-p43",
          "type": "paragraph",
          "text": "A few feet away, Arav stood apart from the cluster, eyes fixed on the water. He barely moved, just kept rubbing his thumb against his palm, as if trying to erase something that wasn’t there. When people offered him condolences, he only nodded. Some of them didn’t even know who he was — just “the younger one.”"
        },
        {
          "id": "chapter-1-p44",
          "type": "paragraph",
          "text": "Between them, the air was thick with things unsaid."
        },
        {
          "id": "chapter-1-p45",
          "type": "paragraph",
          "text": "Meera moved closer to Vikram, her hand brushing his sleeve. He didn’t react. His eyes were locked on the pyre, on the shape that was almost gone. He had always been good at looking like he understood what came next. Now he just looked hollow."
        },
        {
          "id": "chapter-1-p46",
          "type": "paragraph",
          "text": "A priest’s bell rang; the sound cracked through the dusk. The crowd began to thin. One by one, the voices faded into the hum of Banaras — vendors calling from the street above, conch shells echoing from nearby ghats, a temple drum marking the hour."
        },
        {
          "id": "chapter-1-p47",
          "type": "paragraph",
          "text": "The brothers didn’t speak."
        },
        {
          "id": "chapter-1-p48",
          "type": "paragraph",
          "text": "When the last of the guests had left, only the river, the ashes, and their silence remained."
        },
        {
          "id": "chapter-1-p49",
          "type": "paragraph",
          "text": "Arav looked at the spot where his father’s spectacles had fallen. Nothing was left now — just grey dust and the faint outline of something once real."
        },
        {
          "id": "chapter-1-p50",
          "type": "paragraph",
          "text": "Vikram turned to him finally. His voice was steady, but stripped bare. “He’d want us to finish what he started.”"
        },
        {
          "id": "chapter-1-p51",
          "type": "paragraph",
          "text": "Arav didn’t look up. “You mean understand it.”"
        },
        {
          "id": "chapter-1-p52",
          "type": "paragraph",
          "text": "The pause that followed was heavier than the smoke. And in that pause — quiet, suffocating, endless — something unseen cracked between them."
        },
        {
          "id": "chapter-1-p53",
          "type": "paragraph",
          "text": "Vikram stood a few steps away from the pyre, hands in pockets, staring at nothing. Arav sat on the stone ledge near the river, his kurta streaked with ash. Neither spoke for a long time."
        },
        {
          "id": "chapter-1-p54",
          "type": "paragraph",
          "text": "Finally, Vikram broke the silence. “I’ll have to leave tomorrow morning,” he said quietly. “Early flight to Mumbai. The team’s waiting… and Baba’s files can’t sit idle.”"
        },
        {
          "id": "chapter-1-p55",
          "type": "paragraph",
          "text": "Arav didn’t move. The sound of water hitting the ghats filled the gap between them."
        },
        {
          "id": "chapter-1-p56",
          "type": "paragraph",
          "text": "Vikram continued, softer this time, “You’ve finished your engineering now. If you want, I can get you in. The division’s expanding—new research wing under DRDO’s Special Materials Program. You’d fit right in.”"
        },
        {
          "id": "chapter-1-p57",
          "type": "paragraph",
          "text": "He tried to make it sound casual, but his eyes gave away the plea underneath: Don’t drift too far. Don’t leave me to handle this alone."
        },
        {
          "id": "chapter-1-p58",
          "type": "paragraph",
          "text": "Arav finally looked up, his face pale under the flickering oil lamps. “I don’t know if I’m ready, Bhaiya.”"
        },
        {
          "id": "chapter-1-p59",
          "type": "dialogue",
          "text": "“You don’t have to be ready. You just have to start,” Vikram replied, the old authority creeping back into his tone. “Baba wanted both of us there. You know that. We’re closest to understanding his work—matter-energy conversion, the weapon prototypes, all of it. It shouldn’t die with him.”"
        },
        {
          "id": "chapter-1-p60",
          "type": "paragraph",
          "text": "Arav’s voice was barely a whisper. “I think I’ll stay here a bit. Just… for some time.”"
        },
        {
          "id": "chapter-1-p61",
          "type": "dialogue",
          "text": "“Here? In Banaras?”"
        },
        {
          "id": "chapter-1-p62",
          "type": "paragraph",
          "text": "He nodded. “He used to come here often. I need to see what he saw. Maybe I’ll find something.”"
        },
        {
          "id": "chapter-1-p63",
          "type": "paragraph",
          "text": "Vikram sighed, rubbing the bridge of his nose. “You’ll find only smoke and old books here, Arav. The real work—the future—is in Mumbai.”"
        },
        {
          "id": "chapter-1-p64",
          "type": "quote",
          "text": "“I’m not looking for work,” Arav said, eyes on the river. “I’m looking for meaning.”"
        },
        {
          "id": "chapter-1-p65",
          "type": "paragraph",
          "text": "That word made Vikram flinch. Meaning. It always sounded soft to him, like a luxury they couldn’t afford."
        },
        {
          "id": "chapter-1-p66",
          "type": "paragraph",
          "text": "He looked at his brother for a long second — the boy looked so much like Baba when he went quiet like that. A part of him wanted to argue, to pull him back into motion, but another part knew it was useless."
        },
        {
          "id": "chapter-1-p67",
          "type": "paragraph",
          "text": "So he nodded once, the way soldiers do when orders change. “Alright. Stay. But call Meera if you need anything. I’ll handle the paperwork and the transfer of his projects.”"
        },
        {
          "id": "chapter-1-p68",
          "type": "paragraph",
          "text": "Arav didn’t answer. He just kept looking at the dark water, as if waiting for it to speak."
        },
        {
          "id": "chapter-1-p69",
          "type": "paragraph",
          "text": "Vikram placed a hand on his shoulder. “We’ll keep him alive through his work, Arav. That’s the only way.”"
        },
        {
          "id": "chapter-1-p70",
          "type": "paragraph",
          "text": "Arav gave a faint nod, but his eyes didn’t move from the river."
        },
        {
          "id": "chapter-1-p71",
          "type": "paragraph",
          "text": "When Vikram finally walked away, his footsteps echoed on the stone like clock ticks — steady, certain, but moving in the opposite direction."
        },
        {
          "id": "chapter-1-p72",
          "type": "paragraph",
          "text": "The river whispered beneath the night wind. And Arav stayed, watching the ashes dissolve into the water, unsure which part of himself was burning with them."
        },
        {
          "id": "chapter-1-p73",
          "type": "paragraph",
          "text": "The evening had gone heavy. Even the priests had left, their chants thinning into the hum of crickets. Arav sat alone on the ghat steps, knees drawn close, watching the last streaks of fire melt into the river."
        },
        {
          "id": "chapter-1-p74",
          "type": "paragraph",
          "text": "The silence was alive with ghosts."
        },
        {
          "id": "chapter-1-p75",
          "type": "paragraph",
          "text": "He remembered his father’s hand on his shoulder — the weight of it, firm but kind — the way Baba’s fingers always smelled faintly of graphite and sandalwood.\n“Curiosity is holy, Arav,” he used to say. “Never be ashamed of asking why.”\nThat voice had once filled every corner of their house, every corridor of the DRDO quarters. Now it was gone, replaced by the faint ring of those last words: He’d want us to finish what he started."
        },
        {
          "id": "chapter-1-p76",
          "type": "paragraph",
          "text": "Arav closed his eyes and the past rushed in."
        },
        {
          "id": "chapter-1-p77",
          "type": "paragraph",
          "text": "He was nine again, standing beside Baba in the courtyard during a summer storm. Lightning flared, and Baba had smiled, saying, “That’s energy without direction. Beautiful, but useless until contained.”"
        },
        {
          "id": "chapter-1-p78",
          "type": "paragraph",
          "text": "From the balcony above, Vikram had shouted something teasing — about building a machine to catch lightning — and Baba had laughed louder than the thunder. That laugh. It had shape, warmth, a pulse. Arav hadn’t realized until today how much of his world had orbited around that sound."
        },
        {
          "id": "chapter-1-p79",
          "type": "paragraph",
          "text": "Now even memory felt unreliable — too bright in places, too dim in others."
        },
        {
          "id": "chapter-1-p80",
          "type": "paragraph",
          "text": "He tried to recall Baba’s last evening at home — the half-eaten dinner, the silence between every sentence. Vikram talking about new projects at the division. Baba asking him, “And what of the human side, Viku?” Vikram had frowned, half-amused. “Emotion has no place in progress, Baba.” And Baba had smiled sadly, replying only, “Then progress will never stop burning itself.”"
        },
        {
          "id": "chapter-1-p81",
          "type": "paragraph",
          "text": "The memory hit him like a shove."
        },
        {
          "id": "chapter-1-p82",
          "type": "paragraph",
          "text": "He opened his eyes and looked at the Ganga — calm, unbothered — and for the first time that night, something inside him twisted. Not grief, not anger. Something sharper. A question."
        },
        {
          "id": "chapter-1-p83",
          "type": "paragraph",
          "text": "Why had Baba kept so many things hidden? Why the Sanskrit notes, the private visits to Banaras, the locked drawers at the lab? And if he was only studying time and matter… why had he been afraid?"
        },
        {
          "id": "chapter-1-p84",
          "type": "paragraph",
          "text": "The wind moved, rippling the surface of the water, and for a fleeting second, the reflections of the lamps distorted — as if the river itself had paused."
        },
        {
          "id": "chapter-1-p85",
          "type": "paragraph",
          "text": "Arav shivered. He remembered Baba once saying, “When time stands still, it’s not a miracle. It’s a question waiting to be answered.”"
        },
        {
          "id": "chapter-1-p86",
          "type": "paragraph",
          "text": "Now that question was awake inside him, restless, coiled tight behind his ribs. He couldn’t name it yet, but it was there — the feeling that his father’s death wasn’t just loss. It was the start of something that shouldn’t have begun at all."
        },
        {
          "id": "chapter-1-p87",
          "type": "paragraph",
          "text": "He pressed his palms together, closed his eyes, and whispered, “Baba, what were you really building?”"
        },
        {
          "id": "chapter-1-p88",
          "type": "paragraph",
          "text": "The wind answered only with silence. But somewhere in that silence, the faint tick of his wristwatch stopped."
        }
      ]
    },
    {
      "id": "chapter-2",
      "number": "Chapter 2",
      "title": "Ashes and Equations",
      "pageStart": 22,
      "pageEnd": 34,
      "summary": "At Manikarnika ghat, Arav encounters a mysterious boatman, Vyasa, who shares enigmatic wisdom about Kashi, time, and the sea of forgotten memory.",
      "paragraphs": [
        {
          "id": "chapter-2-p1",
          "type": "paragraph",
          "text": "Banaras woke like an old saint stretching after a long prayer. Mist still clung to the ghats, a white shawl over cracked stone, while the first rays of sun struggled through it — slow, golden, forgiving."
        },
        {
          "id": "chapter-2-p2",
          "type": "paragraph",
          "text": "The river carried everything that refused to stay — ashes, flowers, foam, fragments of yesterday’s rituals — turning all of it into one slow-moving memory."
        },
        {
          "id": "chapter-2-p3",
          "type": "paragraph",
          "text": "Arav stood near Manikarnika, watching the smoke trails climb lazily into the sky. The smell of burning wood and ghee clung to the air, thick enough to taste. This was the city his father had visited every few months, the city he’d called “the only honest equation left.”"
        },
        {
          "id": "chapter-2-p4",
          "type": "paragraph",
          "text": "Now Arav understood what he meant — Banaras didn’t hide its duality. Here, life and death didn’t oppose each other; they shared a wall."
        },
        {
          "id": "chapter-2-p5",
          "type": "paragraph",
          "text": "On one step, a body burned. On the next, a man sold tea. Devotees bathed in the same water that carried the dead. Children laughed as they chased marigolds floating away from a pyre."
        },
        {
          "id": "chapter-2-p6",
          "type": "paragraph",
          "text": "Everything existed together, unbothered. The living and the ending — both doing what they must."
        },
        {
          "id": "chapter-2-p7",
          "type": "paragraph",
          "text": "Arav breathed in the city. The chaos felt organized somehow, the noise forming a pattern he couldn’t decipher. Bells, conch shells, temple drums — it all merged into one long pulse that matched his heartbeat. He remembered his father saying, “Kashi is where time forgets to move in straight lines.” Now, standing there, he knew it was true. The past wasn’t behind him here — it was beside him, walking quietly through the mist."
        },
        {
          "id": "chapter-2-p8",
          "type": "paragraph",
          "text": "As he walked along the ghats, his mind kept slipping between observation and memory. Vendors called out — “Chai garam! Malai chai!” — and the smell of boiling milk mingled with smoke. A group of ascetics sat cross-legged, their faces painted white, muttering verses that seemed to come from a place deeper than language."
        },
        {
          "id": "chapter-2-p9",
          "type": "paragraph",
          "text": "Arav paused by a shrine, watching a priest pour water over a black stone shivling. The water flowed down, clear for a second before turning cloudy — the same way his thoughts blurred whenever he tried to remember his father without pain."
        },
        {
          "id": "chapter-2-p10",
          "type": "paragraph",
          "text": "There was a rhythm to everything here — a mathematics of motion hidden in chaos. The steady dip of an oar, the uneven ringing of a bell, the call of a temple singer slightly off beat — all adding up to something he couldn’t name but could feel. It was like standing inside one of Baba’s equations — the part before you find the solution, when everything seems impossible but alive."
        },
        {
          "id": "chapter-2-p11",
          "type": "paragraph",
          "text": "He looked at the horizon — the faint line where river met sky — and whispered to himself, “What were you trying to solve, Baba?”"
        },
        {
          "id": "chapter-2-p12",
          "type": "paragraph",
          "text": "The water gave no answer. It only carried his voice away, breaking it into ripples."
        },
        {
          "id": "chapter-2-p13",
          "type": "paragraph",
          "text": "Then, out of the mist, came the creak of wood and the slow, rhythmic splash of an oar. He didn’t notice the boat at first. It slid from the fog without sound — small, wooden, paint peeling, moving as if the river carried it of its own will."
        },
        {
          "id": "chapter-2-p14",
          "type": "paragraph",
          "text": "At the oar sat an old man, wrapped in ochre robes, skin the colour of river mud, eyes hidden behind thin spectacles. His movements were unhurried, each stroke steady, timeless. He rowed closer, then stopped a few feet from where Arav sat on the stone steps."
        },
        {
          "id": "chapter-2-p15",
          "type": "dialogue",
          "text": "“Will you cross?” the man asked. His voice was soft, almost kind, yet it carried an echo that didn’t belong to one man."
        },
        {
          "id": "chapter-2-p16",
          "type": "paragraph",
          "text": "Arav blinked. “Cross where?”"
        },
        {
          "id": "chapter-2-p17",
          "type": "paragraph",
          "text": "The old man smiled faintly. “Wherever you need to go.”"
        },
        {
          "id": "chapter-2-p18",
          "type": "paragraph",
          "text": "Arav hesitated. “I don’t know where that is.”"
        },
        {
          "id": "chapter-2-p19",
          "type": "quote",
          "text": "“Then you’re already halfway there,” the man said, dipping the oar once more into the water."
        },
        {
          "id": "chapter-2-p20",
          "type": "paragraph",
          "text": "Something about him — the stillness, the rhythm — softened the ache inside Arav. The boat creaked, a sound like breathing."
        },
        {
          "id": "chapter-2-p21",
          "type": "paragraph",
          "text": "The morning grew louder. Bells, birds, temple songs. People calling, haggling, praying. Around Arav, Banaras was awake again — a city that refused to mourn."
        },
        {
          "id": "chapter-2-p22",
          "type": "paragraph",
          "text": "But inside him, everything was still burning. The noise of the world only deepened the silence in his head."
        },
        {
          "id": "chapter-2-p23",
          "type": "paragraph",
          "text": "He heard his father’s voice as if through water:\n“Time is not a river — it’s a sea we forgot how to swim in.”"
        },
        {
          "id": "chapter-2-p24",
          "type": "paragraph",
          "text": "The words had been scribbled in his father’s notebook — half equation, half confession. Arav hadn’t understood then. Now they returned, pulsing behind his eyes like a riddle. A sea. A forgotten way of swimming."
        },
        {
          "id": "chapter-2-p25",
          "type": "paragraph",
          "text": "He thought of the torn page he had hidden — the one with Sanskrit lines running through symbols, a puzzle too familiar to dismiss. But he said nothing of it to the boatman. Something told him to keep it secret."
        },
        {
          "id": "chapter-2-p26",
          "type": "paragraph",
          "text": "The river rippled around them, gold and grey in the thin morning light. The fog swirled low, curling around the wooden hull like breath."
        },
        {
          "id": "chapter-2-p27",
          "type": "paragraph",
          "text": "Something about the old man — the calm, the rhythm of his movements — made Arav’s unease settle for a moment. The grief didn’t disappear; it just found a place to rest."
        },
        {
          "id": "chapter-2-p28",
          "type": "quote",
          "text": "“My father used to come here,” Arav said quietly. “He never said why.”"
        },
        {
          "id": "chapter-2-p29",
          "type": "paragraph",
          "text": "The boatman nodded. “Some men come to ask,” he replied. “Some come to listen.”"
        },
        {
          "id": "chapter-2-p30",
          "type": "paragraph",
          "text": "Arav frowned. “And what did he come for?”"
        },
        {
          "id": "chapter-2-p31",
          "type": "paragraph",
          "text": "The man turned his head toward the horizon where the sun was still faint, half-buried behind mist. “The same reason you’re here now, perhaps,” he said. “To see if time is still watching.”"
        },
        {
          "id": "chapter-2-p32",
          "type": "paragraph",
          "text": "Arav almost smiled. “Time watching?”"
        },
        {
          "id": "chapter-2-p33",
          "type": "paragraph",
          "text": "The old man’s oar paused mid-air. “Yes,” he said. “Sometimes time looks away. That’s when strange things happen.”"
        },
        {
          "id": "chapter-2-p34",
          "type": "paragraph",
          "text": "Arav stared at him. “You talk like you’ve seen it.”"
        },
        {
          "id": "chapter-2-p35",
          "type": "quote",
          "text": "“I’ve seen enough to know that time is patient,” he said. “But not forgiving.”"
        },
        {
          "id": "chapter-2-p36",
          "type": "paragraph",
          "text": "They both fell silent. The only sound was the soft drip of water from the oar and the cry of a kite circling high above the ghats."
        },
        {
          "id": "chapter-2-p37",
          "type": "paragraph",
          "text": "A child ran past Arav at the stairs near the coast, chasing a red balloon. The world felt cruel in its ordinariness. The boat rocked gently. The old man’s robe fluttered in the wind."
        },
        {
          "id": "chapter-2-p38",
          "type": "paragraph",
          "text": "Arav felt the urge to ask something he couldn’t yet form — about his father, about meaning, about the strange magnet pulling him to this city that breathed in both directions at once — toward the living and the gone."
        },
        {
          "id": "chapter-2-p39",
          "type": "paragraph",
          "text": "The sun had climbed higher, soft gold spilling across the water. The mist broke into threads, drifting apart like thoughts that refused to stay together."
        },
        {
          "id": "chapter-2-p40",
          "type": "paragraph",
          "text": "Arav kept watching the current — the way it bent around the boat, forming small spirals before straightening out again. There was meaning in that motion, he felt. Some hidden equation that only his father might have known how to read."
        },
        {
          "id": "chapter-2-p41",
          "type": "quote",
          "text": "“My father mentioned Kashi,” he said finally. His voice came out rough, unused. “Not Banaras. He said if anything ever happened, I should go there.”"
        },
        {
          "id": "chapter-2-p42",
          "type": "paragraph",
          "text": "The boatman’s oar slowed, resting against the rim of the boat. “And what will you look for in Kashi?”"
        },
        {
          "id": "chapter-2-p43",
          "type": "paragraph",
          "text": "Arav hesitated. “I don’t know. Maybe… answers. Maybe him.”"
        },
        {
          "id": "chapter-2-p44",
          "type": "paragraph",
          "text": "The old man’s lips curved into a half-smile, more pity than amusement. “Beta,” he said, “Banaras itself is Kashi.”"
        },
        {
          "id": "chapter-2-p45",
          "type": "paragraph",
          "text": "Arav frowned. “They’re the same?”"
        },
        {
          "id": "chapter-2-p46",
          "type": "paragraph",
          "text": "The man nodded. “Different names for the same crossing. You don’t have to travel through space,” he said, eyes glinting behind the lenses, “travel through time.”"
        },
        {
          "id": "chapter-2-p47",
          "type": "paragraph",
          "text": "The words landed softly but stayed heavy, like stones dropped into deep water. Arav tried to speak, but nothing came. Around him, the sounds of the city returned — the bells, the chant of morning prayers, the slap of oars from other boats — yet they all felt distant, like echoes from another age."
        },
        {
          "id": "chapter-2-p48",
          "type": "paragraph",
          "text": "The boatman dipped his oar again, pushing away from the steps. “Some crossings,” he said over his shoulder, “you make without moving.”"
        },
        {
          "id": "chapter-2-p49",
          "type": "paragraph",
          "text": "Arav stood there, frozen between the pull of logic and the whisper of something ancient. The water shimmered, breaking the reflection of the sky into fragments that drifted downstream."
        },
        {
          "id": "chapter-2-p50",
          "type": "paragraph",
          "text": "He could no longer tell where the river ended and the light began. And for the first time, he felt not grief, but motion — not forward, not back — just a quiet stirring, as if time itself had turned its face toward him."
        },
        {
          "id": "chapter-2-p51",
          "type": "paragraph",
          "text": "The river had warmed by now; the fog had thinned into thin smoke drifting above the water. Arav stood, steadying himself against the rim of the boat."
        },
        {
          "id": "chapter-2-p52",
          "type": "dialogue",
          "text": "“Can you take me back to the ghat?” he asked."
        },
        {
          "id": "chapter-2-p53",
          "type": "paragraph",
          "text": "Vyasa nodded once, dipping the oar without a word. They moved in silence. Bells echoed faintly from the temples, merging with the splash of water."
        },
        {
          "id": "chapter-2-p54",
          "type": "paragraph",
          "text": "When they reached the steps, Arav stepped onto the stone. He hesitated for a moment, turning back. “I think I’ll go to Mumbai,” he said. “My brother might have… something. Some clue.”"
        },
        {
          "id": "chapter-2-p55",
          "type": "paragraph",
          "text": "Vyasa looked at him with a faint, unreadable smile. “If that is where you must begin, then go,” he said softly. “Sometimes, searching far helps you see what is near.”"
        },
        {
          "id": "chapter-2-p56",
          "type": "paragraph",
          "text": "Arav nodded, unsure if he’d heard wisdom or farewell. He slung his bag over his shoulder, the morning light drawing thin gold lines around his silhouette."
        },
        {
          "id": "chapter-2-p57",
          "type": "paragraph",
          "text": "As he walked away through the crowd — past the flower sellers, the dogs, the red-clad sadhus — the old man’s boat drifted quietly back into the river."
        },
        {
          "id": "chapter-2-p58",
          "type": "paragraph",
          "text": "From the shadowed curve of the steps, a laugh rose — dry, ancient, amused. Markandeya sat crouched beside a small fire, feeding it twigs. His beard caught the light like threads of silver smoke."
        },
        {
          "id": "chapter-2-p59",
          "type": "dialogue",
          "text": "“Such a dumbo, this boy,” he chuckled, half to himself. “You gave him the answer — here lies what he seeks — and still he runs off to Mumbai.”"
        },
        {
          "id": "chapter-2-p60",
          "type": "paragraph",
          "text": "Vyasa’s smile didn’t fade. He kept his eyes on the horizon where the sun met the water. “Let him,” he murmured. “The river always brings back what belongs to it.”"
        },
        {
          "id": "chapter-2-p61",
          "type": "paragraph",
          "text": "Markandeya snorted, stirring the ash with a stick. “And what will he find there?”"
        },
        {
          "id": "chapter-2-p62",
          "type": "paragraph",
          "text": "Vyasa’s gaze softened. “Only the reflection of what waits here. He must leave to know why he must return.”"
        },
        {
          "id": "chapter-2-p63",
          "type": "paragraph",
          "text": "The two old figures sat in silence. A kite screamed overhead; the river shimmered below, calm and infinite."
        },
        {
          "id": "chapter-2-p64",
          "type": "paragraph",
          "text": "Somewhere on the road above, Arav Sen Gupta disappeared into the noise of Banaras — unaware that time had already begun to bend toward him."
        }
      ]
    },
    {
      "id": "chapter-3",
      "number": "Chapter 3",
      "title": "Echoes of the Past",
      "pageStart": 35,
      "pageEnd": 70,
      "summary": "Arav returns to Mumbai and unlocks his father's lab, finding the annotated Shiv Purana and discovering that Arvind was researching the Trishul of Reality.",
      "paragraphs": [
        {
          "id": "chapter-3-p1",
          "type": "paragraph",
          "text": "The city of Mumbai greeted him with glare, not warmth. The sun hung sharp above the concrete, bleaching every colour to exhaustion. Glass towers rose like mirrors, reflecting heat, ambition, and nothing else."
        },
        {
          "id": "chapter-3-p2",
          "type": "paragraph",
          "text": "From the back seat of the auto, Arav watched them blur by — each one taller, cleaner, emptier. His father had once pointed at a skyline like this and said, “Monuments of misplaced ambition, beta. They scrape the sky because they can’t touch meaning.”"
        },
        {
          "id": "chapter-3-p3",
          "type": "paragraph",
          "text": "The driver’s radio played a broken tune from the nineties. Arav barely heard it. His fingers traced the edge of his bag — inside was the torn page, folded three times, the crease now part of the paper’s skin."
        },
        {
          "id": "chapter-3-p4",
          "type": "paragraph",
          "text": "When the auto turned into their lane, the air changed. Cooler, quieter. The building loomed like an old thesis — precise, functional, soulless. The watchman straightened up when he saw him, half-smiling, half unsure. “Bade sahib…” he began, then stopped, realizing. Arav nodded once, letting the silence finish the sentence."
        },
        {
          "id": "chapter-3-p5",
          "type": "paragraph",
          "text": "Inside, the house smelled faintly of sandalwood — the aftertaste of rituals Vikram must have done before leaving for work. Everything was where it should be. Cushions aligned, curtains drawn, the clock ticking three seconds too slow."
        },
        {
          "id": "chapter-3-p6",
          "type": "paragraph",
          "text": "Arav dropped his bag near the door and walked through the living room. The light from the balcony filtered through half-closed blinds, striping the floor like an old film reel. He felt like a ghost walking through a scene he’d already seen too many times in dreams."
        },
        {
          "id": "chapter-3-p7",
          "type": "paragraph",
          "text": "On the dining table sat a framed photograph: Dr. Arvind Sen Gupta — smiling, half-turned toward the camera, eyes full of that quiet mischief that made every lecture feel like a secret being shared. Beside the frame lay the Vigyan Ratna medal, catching the light from the window."
        },
        {
          "id": "chapter-3-p8",
          "type": "paragraph",
          "text": "The gold had dulled slightly; fingerprints blurred its edges. Arav picked it up, heavier than he remembered."
        },
        {
          "id": "chapter-3-p9",
          "type": "paragraph",
          "text": "The inscription read: For contribution to Theoretical Physics — Matter-Energy Interference Studies."
        },
        {
          "id": "chapter-3-p10",
          "type": "paragraph",
          "text": "He turned it over in his hand, the metal cool against his palm. For a second, the room seemed to tilt — not from dizziness, but from the weight of everything that once revolved around that man."
        },
        {
          "id": "chapter-3-p11",
          "type": "paragraph",
          "text": "He placed the medal back carefully and sat down at the dining table. The chair creaked — a sound that belonged to his father’s presence more than his own."
        },
        {
          "id": "chapter-3-p12",
          "type": "paragraph",
          "text": "There were no voices here now. Only the hum of the refrigerator, the faint traffic from the distance, the clock’s slow defiance against silence."
        },
        {
          "id": "chapter-3-p13",
          "type": "paragraph",
          "text": "He realized, with a small ache, that this house had stopped being home long before his father died. It was perfect, yes — the kind of perfection that smells of disinfectant and absence."
        },
        {
          "id": "chapter-3-p14",
          "type": "paragraph",
          "text": "He looked around — books arranged by colour, photographs aligned by height. All of it Vikram’s doing. Vikram who believed order meant control, control meant peace. But peace, Arav thought, had no sound, and no warmth."
        },
        {
          "id": "chapter-3-p15",
          "type": "paragraph",
          "text": "A breeze pushed the blinds, sending slants of light across the medal again. The glint caught his eyes — and suddenly, for a heartbeat, he saw his father sitting at that very table, papers scattered, pen tapping, murmuring something about light as both particle and prayer."
        },
        {
          "id": "chapter-3-p16",
          "type": "paragraph",
          "text": "The vision vanished as quickly as it came. Arav rubbed his eyes, leaned back, and exhaled. He didn’t know yet if he had come home or walked into a museum — curated, labelled, dustless, and dead."
        },
        {
          "id": "chapter-3-p17",
          "type": "paragraph",
          "text": "He sat on the couch just next to him, and with a sigh he closed his eyes for a moment of peace."
        },
        {
          "id": "chapter-3-p18",
          "type": "paragraph",
          "text": "The house blurred, and with it the sterile Mumbai air. In his mind, colour began to seep back — the pale light of another time, the smell of hot iron, chalk dust, and overboiled chai."
        },
        {
          "id": "chapter-3-p19",
          "type": "paragraph",
          "text": "He was ten again. Vikram, sixteen. The house was smaller then, noisier, messier — full of laughter that didn’t need permission. Baba’s lab was the only warm room in winter, glowing with lamplight and the smell of chalk and singed wires."
        },
        {
          "id": "chapter-3-p20",
          "type": "paragraph",
          "text": "On one wall, an old blackboard full of loops and symbols. On another, a clutter of papers, cups of cold tea, and one framed photo of his wife — the only picture she’d let him keep."
        },
        {
          "id": "chapter-3-p21",
          "type": "paragraph",
          "text": "He never spoke of her much, but every time he looked at that photo, his tone softened, his sentences slowed.\n“Your mother saw time in music,” he used to tell them once, tracing circles on the board. “I see it in equations. Both try to catch what never stops moving.”"
        },
        {
          "id": "chapter-3-p22",
          "type": "paragraph",
          "text": "Vikram would nod — serious, steady, already more man than boy. Arav just watched, trying to understand the way their father’s mind worked, the way light seemed to bend around him when he spoke."
        },
        {
          "id": "chapter-3-p23",
          "type": "paragraph",
          "text": "One evening, Baba drew a circle and said, “Time is not a line, beta. It’s a loop that remembers every point.” He looked at them both, eyes alive behind his glasses. “Every moment you’ve ever lived — it’s still somewhere, humming.”"
        },
        {
          "id": "chapter-3-p24",
          "type": "paragraph",
          "text": "Vikram asked, “Then what’s the point of moving forward?”"
        },
        {
          "id": "chapter-3-p25",
          "type": "paragraph",
          "text": "Sen Gupta smiled. “To see if the loop still loves you back.”"
        },
        {
          "id": "chapter-3-p26",
          "type": "paragraph",
          "text": "Arav didn’t ask anything. He just kept staring at that loop — feeling, somehow, that he’d been there before."
        },
        {
          "id": "chapter-3-p27",
          "type": "paragraph",
          "text": "A loud sizzle broke the moment. The smell of burnt roti filled the air. Their father looked at the pan, then at them, mock-serious. “Entropy, my children. Dinner has evolved.”"
        },
        {
          "id": "chapter-3-p28",
          "type": "paragraph",
          "text": "Both boys burst out laughing. For a second, the house felt less like a lab, more like a heartbeat."
        },
        {
          "id": "chapter-3-p29",
          "type": "paragraph",
          "text": "That was the rhythm of their days: science and silliness, silence and warmth. There was no mother to balance it — no softness except in their father’s voice when he remembered her. But somehow that was enough. The three of them — their small, strange universe."
        },
        {
          "id": "chapter-3-p30",
          "type": "paragraph",
          "text": "Then came the night of the award. The Vigyan Ratna."
        },
        {
          "id": "chapter-3-p31",
          "type": "paragraph",
          "text": "A hall of marble and white light, cameras flashing. Arvind Sen Gupta stood on the stage, kurta pressed, hands trembling only slightly. He bowed — but not too low — and said into the microphone, “Discovery is not reward. It’s responsibility.”"
        },
        {
          "id": "chapter-3-p32",
          "type": "paragraph",
          "text": "The room clapped politely, unsure what to make of a man who refused grandeur."
        },
        {
          "id": "chapter-3-p33",
          "type": "paragraph",
          "text": "Later, in the car, the medal rested on his lap. Arav sat beside him, quiet. “Are you happy, Baba?” he’d asked."
        },
        {
          "id": "chapter-3-p34",
          "type": "paragraph",
          "text": "Sen Gupta smiled faintly. “Happiness is a soft thing, beta. I prefer wonder.” He looked out the window, city lights flickering across his glasses. “Your mother used to say — curiosity is what keeps love alive. Maybe she was right.”"
        },
        {
          "id": "chapter-3-p35",
          "type": "paragraph",
          "text": "That was the last time Arav remembered him relaxed — not working, not teaching, just being."
        },
        {
          "id": "chapter-3-p36",
          "type": "paragraph",
          "text": "After that, the house grew quieter. The lab lights stayed on longer. And something — some quiet urgency — began to take hold of Baba’s eyes."
        },
        {
          "id": "chapter-3-p37",
          "type": "paragraph",
          "text": "Still, when he laughed, the world was safe again. And when he called out “Arav, light’s bending wrong again, come see this!” the boy ran — always ran."
        },
        {
          "id": "chapter-3-p38",
          "type": "paragraph",
          "text": "Back in the present, Arav opened his eyes. The medal was still there. The house was the same. Only Baba was gone — and the air had lost its hum."
        },
        {
          "id": "chapter-3-p39",
          "type": "paragraph",
          "text": "He stood up, the sound of the sea of Mumbai faint through the window, and thought — for all his father’s brilliance, it was love that held their small universe together. And now, that too was gone."
        },
        {
          "id": "chapter-3-p40",
          "type": "paragraph",
          "text": "The years after the award moved strangely — fast on the outside, slow within. The Sen Gupta house grew quieter, not with peace, but with distance."
        },
        {
          "id": "chapter-3-p41",
          "type": "paragraph",
          "text": "Baba spent longer hours at the Defence Research complex. When he returned, he carried the smell of metal and ozone, not chalk or paper. His notebooks turned darker — more symbols, fewer sentences. And his handwriting, once flowing, now leaned forward like it was chasing something unseen."
        },
        {
          "id": "chapter-3-p42",
          "type": "paragraph",
          "text": "At first, Arav waited up every night, pretending to study. Sometimes he’d fall asleep on the couch, and wake to find his father sitting by the lamp, staring at a pendulum swinging over a bowl of water."
        },
        {
          "id": "chapter-3-p43",
          "type": "dialogue",
          "text": "“What are you looking for?” Arav once asked."
        },
        {
          "id": "chapter-3-p44",
          "type": "quote",
          "text": "“Stillness,” Baba said softly. “The moment motion remembers where it began.”"
        },
        {
          "id": "chapter-3-p45",
          "type": "paragraph",
          "text": "He smiled when he said it, but there was something hollow behind it — the smile of a man who’d crossed too far into thought and couldn’t find the way back."
        },
        {
          "id": "chapter-3-p46",
          "type": "paragraph",
          "text": "Vikram, meanwhile, had finished his engineering degree and joined the DRDO’s Special Unit — his father’s old division. He carried himself like a soldier of science: punctual, logical, certain."
        },
        {
          "id": "chapter-3-p47",
          "type": "paragraph",
          "text": "Whenever he visited, his voice filled the house the way their mother’s once did — commanding the silence to behave.\n“You should come see the lab, Arav,” he’d say. “It’s where real work happens. Not in dreams.”"
        },
        {
          "id": "chapter-3-p48",
          "type": "paragraph",
          "text": "Arav only nodded, unsure how to explain that his dreams were work — that thinking, for him, wasn’t a distraction but a language he inherited."
        },
        {
          "id": "chapter-3-p49",
          "type": "paragraph",
          "text": "Sometimes their father overheard them and chuckled. “Both of you are right,” he’d say. “Vikram builds the body, Arav finds the soul.”"
        },
        {
          "id": "chapter-3-p50",
          "type": "paragraph",
          "text": "But even that balance began to falter. The experiments grew riskier, the papers stopped getting published."
        },
        {
          "id": "chapter-3-p51",
          "type": "paragraph",
          "text": "Rumours came — quiet ones — about “temporal energy mapping” and “matter singularities.” Arav heard snippets from his father’s old colleagues, whispers of a project that blurred physics with faith."
        },
        {
          "id": "chapter-3-p52",
          "type": "paragraph",
          "text": "He didn’t understand all of it, only that it scared him — because his father’s eyes had begun to look the same way they did when he used to talk about his wife’s death. As if he’d found a doorway and was tempted to walk through."
        },
        {
          "id": "chapter-3-p53",
          "type": "paragraph",
          "text": "One night, Arav entered the lab to say goodnight. The air hummed — faint, electric."
        },
        {
          "id": "chapter-3-p54",
          "type": "paragraph",
          "text": "On the wall, a large circle drawn in chalk, the same loop from years ago — now surrounded by equations that twisted like vines. In the centre, a line in Sanskrit:\n“Kaal swayam shrota hai.” (Time itself is the listener.)"
        },
        {
          "id": "chapter-3-p55",
          "type": "paragraph",
          "text": "Baba didn’t notice him at first. He was murmuring to the empty room — voice low, tender, almost prayerful."
        },
        {
          "id": "chapter-3-p56",
          "type": "paragraph",
          "text": "When he finally turned, Arav saw exhaustion more than madness.\n“Arav,” he said, reaching out. “If I’m gone one day, remember — silence is the only language time speaks.”"
        },
        {
          "id": "chapter-3-p57",
          "type": "paragraph",
          "text": "Arav tried to laugh it off. “You’re not going anywhere, Baba.”"
        },
        {
          "id": "chapter-3-p58",
          "type": "paragraph",
          "text": "But he didn’t answer. He only pressed a folded note into Arav’s hand — something written hastily, half-English, half-Sanskrit. Later, Arav tucked it inside one of his sketchbooks and forgot about it."
        },
        {
          "id": "chapter-3-p59",
          "type": "paragraph",
          "text": "It would take a pyre, a river, and a torn page before he’d remember."
        },
        {
          "id": "chapter-3-p60",
          "type": "paragraph",
          "text": "By the time Arav finished engineering, their paths had already split — one following order, the other chasing understanding. Vikram was building things that could change the world. Arav was trying to figure out why the world needed changing in the first place."
        },
        {
          "id": "chapter-3-p61",
          "type": "paragraph",
          "text": "And in the middle stood their father — the bridge between reason and wonder — slowly sinking under the weight of both."
        },
        {
          "id": "chapter-3-p62",
          "type": "paragraph",
          "text": "The sharp whistle of the pressure cooker broke the quiet. Arav startled awake, heart racing, unsure for a second which time he was in. The house still smelled faintly of dust and sandalwood — but under it, something newer: cumin, garlic, the warmth of a lived-in kitchen."
        },
        {
          "id": "chapter-3-p63",
          "type": "paragraph",
          "text": "He sat up on the couch, rubbing his face. The living room was dim, curtains drawn halfway. From the kitchen came the sound of ladle against steel and Meera’s voice humming a half-forgotten film song."
        },
        {
          "id": "chapter-3-p64",
          "type": "paragraph",
          "text": "For a moment, he just watched her from where he sat — sleeves rolled up, hair tied loose, moving with the unhurried rhythm of someone who had decided to keep living even when everything else stopped."
        },
        {
          "id": "chapter-3-p65",
          "type": "quote",
          "text": "“You finally woke up,” she said without turning."
        },
        {
          "id": "chapter-3-p66",
          "type": "quote",
          "text": "“Yeah,” he murmured. “Didn’t realise I’d dozed off.”"
        },
        {
          "id": "chapter-3-p67",
          "type": "paragraph",
          "text": "She turned, smiling faintly. “You were somewhere else. I didn’t want to call you back too soon.”"
        },
        {
          "id": "chapter-3-p68",
          "type": "paragraph",
          "text": "He looked down, embarrassed. “How long was I gone?”"
        },
        {
          "id": "chapter-3-p69",
          "type": "quote",
          "text": "“Long enough for me to finish cooking,” she said, lifting the cooker lid."
        },
        {
          "id": "chapter-3-p70",
          "type": "paragraph",
          "text": "The smell of dal and fried onions filled the air — simple, human, grounding. She came to the doorway, wiping her hands on her apron. “Vikram should be home soon. He said he’ll come straight from the unit. Thought we could all have dinner together.”"
        },
        {
          "id": "chapter-3-p71",
          "type": "paragraph",
          "text": "Arav nodded, eyes distant. “He still working the same hours?”"
        },
        {
          "id": "chapter-3-p72",
          "type": "quote",
          "text": "“Longer,” she said. “It’s not work anymore. It’s… inheritance.” Her voice softened. “You know, when I met him, he was ridiculous.”"
        },
        {
          "id": "chapter-3-p73",
          "type": "paragraph",
          "text": "Arav looked up."
        },
        {
          "id": "chapter-3-p74",
          "type": "quote",
          "text": "“Built a solar lamp for our balcony because I said the light outside was too dull. Fixed our doorbell to play 90’s songs because he thought plain rings were depressing.” She smiled wistfully. “He used to find joy in solving small problems. Every act of repair was love for him.”"
        },
        {
          "id": "chapter-3-p75",
          "type": "paragraph",
          "text": "Arav smiled faintly. “That sounds like the bhai I remember.”"
        },
        {
          "id": "chapter-3-p76",
          "type": "paragraph",
          "text": "Her tone darkened a little. “Now it’s different. Everything’s a project. A task. Your father’s shadow is everywhere in this house — even in the silence.”"
        },
        {
          "id": "chapter-3-p77",
          "type": "paragraph",
          "text": "Arav looked around — at the shelves lined with old lab files, the untouched photo frame, the medal beside it. “I thought you fixed the house,” he said softly."
        },
        {
          "id": "chapter-3-p78",
          "type": "quote",
          "text": "“I did,” she said. “But some things refuse fixing.”"
        },
        {
          "id": "chapter-3-p79",
          "type": "paragraph",
          "text": "They stood quiet for a moment, the only sound the ticking of the kitchen clock. Then she added, “He won’t admit it, but he’s scared — scared that if he doesn’t keep building, he’ll disappear like your father did. Maybe you can talk to him tonight.”"
        },
        {
          "id": "chapter-3-p80",
          "type": "paragraph",
          "text": "Arav didn’t answer immediately. His throat felt tight. “I’ll try,” he said finally."
        },
        {
          "id": "chapter-3-p81",
          "type": "paragraph",
          "text": "The cooker hissed again. Meera went back to the kitchen, and Arav leaned back on the couch — listening to the simple sounds of a wind chime at home trying to stay alive."
        },
        {
          "id": "chapter-3-p82",
          "type": "paragraph",
          "text": "For the first time since his father’s death, the silence didn’t feel empty. It just felt unfinished."
        },
        {
          "id": "chapter-3-p83",
          "type": "paragraph",
          "text": "The key turned in the lock just as the first droplets of rain hit the balcony grill. Vikram stepped in — shoulders hunched, hair slightly damp, shirt creased from a day too long. He looked like someone who had forgotten what ease felt like."
        },
        {
          "id": "chapter-3-p84",
          "type": "quote",
          "text": "“Smells good,” he said, forcing a smile. “Dal and rice?”"
        },
        {
          "id": "chapter-3-p85",
          "type": "paragraph",
          "text": "Meera appeared from the kitchen, wiping her hands. “And aloo-fry. You still remember how to eat, right?”"
        },
        {
          "id": "chapter-3-p86",
          "type": "paragraph",
          "text": "He chuckled faintly, setting his bag down. “Barely. The lab cafeteria’s idea of food should be classified as cruelty.”"
        },
        {
          "id": "chapter-3-p87",
          "type": "paragraph",
          "text": "Arav watched them quietly from the couch. His brother looked older than he remembered — not in years, but in gravity. There was a dullness in his eyes that used to hold spark."
        },
        {
          "id": "chapter-3-p88",
          "type": "quote",
          "text": "“Arav,” Vikram said, turning toward him. “Didn’t think you’d still be up.”"
        },
        {
          "id": "chapter-3-p89",
          "type": "dialogue",
          "text": "“Didn’t think you’d still be working this late,” Arav replied."
        },
        {
          "id": "chapter-3-p90",
          "type": "paragraph",
          "text": "The brief silence that followed wasn’t tense, just full — like the pause before an old tune one forgets the words to."
        },
        {
          "id": "chapter-3-p91",
          "type": "paragraph",
          "text": "Meera broke it with her steady voice. “Come, both of you. Food’s ready.”"
        },
        {
          "id": "chapter-3-p92",
          "type": "paragraph",
          "text": "They sat around the dining table. The faint hum of the ceiling fan mixed with the clink of plates — the kind of ordinary sound that feels sacred after loss."
        },
        {
          "id": "chapter-3-p93",
          "type": "paragraph",
          "text": "Vikram exhaled, loosening his tie. “So,” he said between mouthfuls, “tell me about Banaras. You stayed longer than you said. What kept you there?”"
        },
        {
          "id": "chapter-3-p94",
          "type": "paragraph",
          "text": "Arav hesitated, spoon idle over rice. “I don’t know. Maybe I wasn’t ready to leave.”"
        },
        {
          "id": "chapter-3-p95",
          "type": "dialogue",
          "text": "“You find anything?” Vikram’s tone carried both curiosity and caution."
        },
        {
          "id": "chapter-3-p96",
          "type": "paragraph",
          "text": "Arav shrugged. “Just questions.”"
        },
        {
          "id": "chapter-3-p97",
          "type": "paragraph",
          "text": "Before the air could turn heavy, Meera leaned forward, smiling. “Banaras, questions — look at you two talking like research papers again. Eat before the dal gets cold.”"
        },
        {
          "id": "chapter-3-p98",
          "type": "paragraph",
          "text": "They laughed — briefly, but it felt like sunlight after days of rain."
        },
        {
          "id": "chapter-3-p99",
          "type": "quote",
          "text": "“Remember that trip to Pune?” Meera said suddenly. “When Vikram’s scooter died halfway up the hill?”"
        },
        {
          "id": "chapter-3-p100",
          "type": "paragraph",
          "text": "Vikram groaned. “Please don’t remind me. I was trying to impress you.”"
        },
        {
          "id": "chapter-3-p101",
          "type": "quote",
          "text": "“And you did — by rolling us both into a ditch,” she said, laughing. “Arav had to come rescue us.”"
        },
        {
          "id": "chapter-3-p102",
          "type": "paragraph",
          "text": "Arav smiled, the memory glowing faintly in his eyes. “Baba scolded me for skipping class that day.”"
        },
        {
          "id": "chapter-3-p103",
          "type": "paragraph",
          "text": "Vikram’s grin softened. “He didn’t scold. He just said, ‘Even equations need balance.’”"
        },
        {
          "id": "chapter-3-p104",
          "type": "paragraph",
          "text": "That line hung in the air a moment too long. The laughter faded into silence."
        },
        {
          "id": "chapter-3-p105",
          "type": "paragraph",
          "text": "Meera spoke gently, “He would’ve loved to see this — both of you here, like old times.”"
        },
        {
          "id": "chapter-3-p106",
          "type": "paragraph",
          "text": "Vikram looked away, jaw tightening. “Old times don’t come back, Meera.”"
        },
        {
          "id": "chapter-3-p107",
          "type": "paragraph",
          "text": "Arav watched him, then said softly, “Sometimes they do. Just in different clothes.”"
        },
        {
          "id": "chapter-3-p108",
          "type": "paragraph",
          "text": "The rain outside had turned steady, tapping against the windowpanes."
        },
        {
          "id": "chapter-3-p109",
          "type": "paragraph",
          "text": "Meera tried to lighten the air again. “Anyway, enough philosophy. Arav, tell me — do you have a girlfriend yet?”"
        },
        {
          "id": "chapter-3-p110",
          "type": "paragraph",
          "text": "He blinked. “What?”"
        },
        {
          "id": "chapter-3-p111",
          "type": "paragraph",
          "text": "She smiled teasingly. “You were always the quiet one, but Baba said you had a poet’s heart. I bet there’s someone.”"
        },
        {
          "id": "chapter-3-p112",
          "type": "paragraph",
          "text": "Arav chuckled faintly. “No one, Meera. Guess I’m better with ghosts than people.”"
        },
        {
          "id": "chapter-3-p113",
          "type": "quote",
          "text": "“Don’t say that,” she said softly. “Ghosts fade. People don’t.”"
        },
        {
          "id": "chapter-3-p114",
          "type": "paragraph",
          "text": "For a long while, they just ate in silence — three lives circling a memory they all shared."
        },
        {
          "id": "chapter-3-p115",
          "type": "paragraph",
          "text": "When the plates were cleared, Vikram leaned back, voice quieter. “You know… sometimes I still hear him. In the lab. Like he’s correcting my calculations.”"
        },
        {
          "id": "chapter-3-p116",
          "type": "paragraph",
          "text": "Arav met his eyes. “Maybe he is.”"
        },
        {
          "id": "chapter-3-p117",
          "type": "paragraph",
          "text": "Meera placed her hand over Vikram’s, then Arav’s — steady, grounding. “Maybe he never left,” she whispered."
        },
        {
          "id": "chapter-3-p118",
          "type": "paragraph",
          "text": "The clock ticked. The rain kept falling. And for one suspended moment, they weren’t brothers burdened by legacy — just two sons and a woman trying to keep them human."
        },
        {
          "id": "chapter-3-p119",
          "type": "paragraph",
          "text": "The house had gone silent. The hum of the refrigerator was the only sound holding the night together."
        },
        {
          "id": "chapter-3-p120",
          "type": "paragraph",
          "text": "Arav stepped out into the lawn. The grass was still damp from evening rain, glinting under the porch light. Above him, the Mumbai sky stretched dull and yellowed, city glow drowning out the stars."
        },
        {
          "id": "chapter-3-p121",
          "type": "paragraph",
          "text": "He walked barefoot, hands in pockets, mind crowded. Every question felt heavier at night. His father’s voice — that calm, patient tone — still echoed somewhere in the back of his head, tangled with the words time, river, sea. He didn’t know what any of it meant anymore."
        },
        {
          "id": "chapter-3-p122",
          "type": "paragraph",
          "text": "Through the sliding glass door, he saw Vikram — standing in the living room, a drink in hand, watching. Their eyes met briefly."
        },
        {
          "id": "chapter-3-p123",
          "type": "paragraph",
          "text": "Vikram opened the door and stepped out, letting the cool air touch his face. “Couldn’t sleep?” he asked."
        },
        {
          "id": "chapter-3-p124",
          "type": "paragraph",
          "text": "Arav shook his head. “Too many thoughts. They don’t switch off.”"
        },
        {
          "id": "chapter-3-p125",
          "type": "paragraph",
          "text": "Vikram nodded. “Yeah. They don’t.”"
        },
        {
          "id": "chapter-3-p126",
          "type": "paragraph",
          "text": "They stood side by side, both staring into the dark patch of lawn that wasn’t really green anymore — just an outline in half-light."
        },
        {
          "id": "chapter-3-p127",
          "type": "paragraph",
          "text": "After a while, Vikram said, “You keep looking for meaning. But sometimes, Arav, there isn’t any. Baba’s work was science, not scripture.”"
        },
        {
          "id": "chapter-3-p128",
          "type": "paragraph",
          "text": "Arav looked at him. “Maybe not. But for him, it was never just science either.”"
        },
        {
          "id": "chapter-3-p129",
          "type": "paragraph",
          "text": "Vikram sighed, rubbing his temple. “You think understanding his metaphors will bring him back? He left us a lifetime of equations. That’s what I’m trying to finish.”"
        },
        {
          "id": "chapter-3-p130",
          "type": "quote",
          "text": "“You’re finishing numbers,” Arav said quietly. “I’m trying to understand him.”"
        },
        {
          "id": "chapter-3-p131",
          "type": "paragraph",
          "text": "The words hung there — soft but sharp enough to cut."
        },
        {
          "id": "chapter-3-p132",
          "type": "paragraph",
          "text": "Vikram turned, eyes tight. “Don’t make it sound like I don’t care.”"
        },
        {
          "id": "chapter-3-p133",
          "type": "dialogue",
          "text": "“I didn’t say that.”"
        },
        {
          "id": "chapter-3-p134",
          "type": "dialogue",
          "text": "“But you think it,” Vikram replied. “You always looked at him like he was some saint. He was a man — obsessed, restless, brilliant, but human. He taught us to think, not worship.”"
        },
        {
          "id": "chapter-3-p135",
          "type": "paragraph",
          "text": "Arav didn’t argue. The night didn’t need raised voices; it needed truth. “Maybe I’m not worshipping him,” he said finally. “Maybe I’m just trying to listen to what he wasn’t allowed to say.”"
        },
        {
          "id": "chapter-3-p136",
          "type": "paragraph",
          "text": "Vikram exhaled, long and slow. “You’re chasing ghosts, Arav. I’m chasing data. One of us has to stay real.”"
        },
        {
          "id": "chapter-3-p137",
          "type": "paragraph",
          "text": "Arav smiled faintly, eyes still on the lawn. “And one of us has to remember why the data mattered.”"
        },
        {
          "id": "chapter-3-p138",
          "type": "paragraph",
          "text": "For a long moment, neither spoke. A dog barked in the distance; a train horn drifted faintly through the night."
        },
        {
          "id": "chapter-3-p139",
          "type": "paragraph",
          "text": "Vikram finished his drink, set the glass on the porch railing. “You think answers live in questions. I think they live in work. That’s the difference.”"
        },
        {
          "id": "chapter-3-p140",
          "type": "paragraph",
          "text": "He turned to go, then paused at the door. “Just don’t lose yourself trying to find him.”"
        },
        {
          "id": "chapter-3-p141",
          "type": "paragraph",
          "text": "Arav watched him disappear inside — the faint reflection of his brother fading in the glass. He stood there alone for a while longer, the night pressing close, the air thick with something unnamed."
        },
        {
          "id": "chapter-3-p142",
          "type": "paragraph",
          "text": "In the distance, thunder murmured — as if the city itself had remembered something ancient."
        },
        {
          "id": "chapter-3-p143",
          "type": "paragraph",
          "text": "Arav whispered into the dark, “I’m not losing myself, bhai. I’m following him.”"
        },
        {
          "id": "chapter-3-p144",
          "type": "paragraph",
          "text": "Sleep never came. He lay on the bed, eyes open to the ceiling fan that spun like an idea with no direction. The house felt too still — every tick of the clock louder than it should’ve been."
        },
        {
          "id": "chapter-3-p145",
          "type": "paragraph",
          "text": "Finally, Arav sat up. The air was heavy, like it remembered things. He slipped on his slippers and walked down the hall, toward the locked door at the end — the old lab."
        },
        {
          "id": "chapter-3-p146",
          "type": "paragraph",
          "text": "The key hung on a nail, just where it always had. He hesitated before turning it. The click sounded louder than thunder in the silence."
        },
        {
          "id": "chapter-3-p147",
          "type": "paragraph",
          "text": "Inside, the air smelled of old paper, metal, and something faintly burnt — a ghost of experiments long ended. Sheets covered the machines like shrouds. Dust coated everything, soft and undisturbed. A single bulb hung above, flickering weakly, its light yellow and tired."
        },
        {
          "id": "chapter-3-p148",
          "type": "paragraph",
          "text": "He pulled the sheet off the central table. A gust of dust rose — like the room exhaled after years of holding its breath."
        },
        {
          "id": "chapter-3-p149",
          "type": "paragraph",
          "text": "On the desk: books on Thermodynamics, Quantum Mechanics, Relativity, their margins filled with his father’s neat, deliberate handwriting. Diagrams, notes, calculations, fragments of Sanskrit scribbled in between equations."
        },
        {
          "id": "chapter-3-p150",
          "type": "paragraph",
          "text": "Arav traced a line with his finger — an old note half-faded in ink:\n“All matter bends not to force, but to memory.”"
        },
        {
          "id": "chapter-3-p151",
          "type": "paragraph",
          "text": "He froze. The handwriting was undeniably his father’s — sharp, exact, calm."
        },
        {
          "id": "chapter-3-p152",
          "type": "paragraph",
          "text": "Papers lay scattered — formulae, sketches of geometric loops, spirals intersecting grids. On one corner, a small torn sheet — edges burnt — with symbols that looked almost like the page he had hidden in Banaras."
        },
        {
          "id": "chapter-3-p153",
          "type": "paragraph",
          "text": "He held it up to the light. The same pattern of rhythm — physics and philosophy folded into one another. He could almost hear his father’s voice, patient and curious:\n“Equations aren’t meant to prove. They’re meant to listen.”"
        },
        {
          "id": "chapter-3-p154",
          "type": "paragraph",
          "text": "The bulb buzzed faintly above him. A thin layer of dust slipped off a shelf as if stirred by breath."
        },
        {
          "id": "chapter-3-p155",
          "type": "paragraph",
          "text": "Arav whispered, “Baba… what were you building?”"
        },
        {
          "id": "chapter-3-p156",
          "type": "paragraph",
          "text": "No answer — only the faint creak of the old fan, spinning slow, counting time."
        },
        {
          "id": "chapter-3-p157",
          "type": "paragraph",
          "text": "He gathered a few pages, stacking them neatly, careful like touching sacred ground. And for a moment — just a heartbeat — he thought he smelled sandalwood again."
        },
        {
          "id": "chapter-3-p158",
          "type": "paragraph",
          "text": "The scent came softly — faint, warm, unmistakable. Sandalwood."
        },
        {
          "id": "chapter-3-p159",
          "type": "paragraph",
          "text": "Arav turned his head, the smell guiding him through the still air. It wasn’t memory; it was present, drifting from a corner shelf. He moved toward it, slow, cautious — like approaching a living thing."
        },
        {
          "id": "chapter-3-p160",
          "type": "paragraph",
          "text": "There, half-buried under files and papers, lay a thick, ancient-looking book. The spine was cracked, the cover stained from years of touch.\nShiv Purana."
        },
        {
          "id": "chapter-3-p161",
          "type": "paragraph",
          "text": "He froze. Among the manuals on quantum optics and particle decay, it felt almost alien — and yet, perfectly at home."
        },
        {
          "id": "chapter-3-p162",
          "type": "paragraph",
          "text": "He brushed the dust off and opened it. The pages gave a tired sigh, releasing a stronger wave of that same sandalwood fragrance — the kind his father used to light during late-night work sessions, saying, “Science, too, needs prayer sometimes.”"
        },
        {
          "id": "chapter-3-p163",
          "type": "paragraph",
          "text": "Inside the book, lines were underlined in blue ink — his father’s handwriting again. Between the verses of cosmic dance and destruction, he had written small annotations in English:\n“Matter, Energy, Time — the Trishul of Reality.”\n“Creation and Destruction are states of motion, not morality.”\n“Mahakaal = Beyond measurement. Beyond causality.”"
        },
        {
          "id": "chapter-3-p164",
          "type": "paragraph",
          "text": "Arav’s fingers trembled slightly as he turned the pages. Every line felt less like religion, more like a formula disguised as devotion."
        },
        {
          "id": "chapter-3-p165",
          "type": "paragraph",
          "text": "He found one Sanskrit verse circled twice:\nकालो हि दुरतिक्रमः — None escapes Time."
        },
        {
          "id": "chapter-3-p166",
          "type": "paragraph",
          "text": "Next to it, his father had written in pencil:\n“To understand destruction, one must stand where it begins — Kashi.”"
        },
        {
          "id": "chapter-3-p167",
          "type": "paragraph",
          "text": "Arav stared at the word. Kashi. The city that refused to leave him."
        },
        {
          "id": "chapter-3-p168",
          "type": "paragraph",
          "text": "He closed the book slowly, the pages whispering secrets to each other. The bulb above flickered once — its light catching the rim of the open window, where the wind smelled faintly of rain."
        },
        {
          "id": "chapter-3-p169",
          "type": "paragraph",
          "text": "Arav whispered, “You really never left, did you, Baba?”"
        },
        {
          "id": "chapter-3-p170",
          "type": "paragraph",
          "text": "He looked around the lab — the scattered equations, the quiet machines, the Shiv Purana resting on the desk — and everything suddenly felt connected, like a pattern he had only been half-seeing till now."
        },
        {
          "id": "chapter-3-p171",
          "type": "paragraph",
          "text": "The sea. The page. The city. The silence that time listens to."
        },
        {
          "id": "chapter-3-p172",
          "type": "paragraph",
          "text": "He exhaled slowly, eyes steady, as if the air itself had just given him direction. Back to where it began.\nBanaras. Kashi. Mahakaal — the destroyer of worlds."
        },
        {
          "id": "chapter-3-p173",
          "type": "paragraph",
          "text": "The house slept heavy. Even the clocks seemed tired — their ticking slow, uneven. Arav sat in the lab, the faint hum of the bulb tracing the silence."
        },
        {
          "id": "chapter-3-p174",
          "type": "paragraph",
          "text": "The Shiv Purana lay open beside him, its scent of sandalwood still warm in the air. He stared at the blank sheet on the desk for a long time before the pen began to move."
        },
        {
          "id": "chapter-3-p175",
          "type": "paragraph",
          "text": "Bhai,\nDon’t worry. I’m fine.\nI just need to see something for myself — something Baba left unfinished.\nYou’ll think I’m chasing shadows again, but maybe that’s the only way to see light.\nTell Meera not to wait up.\nIf I find answers, I’ll come back. If not, maybe I’ll finally understand what he meant by “time listens to silence.”\n— Arav"
        },
        {
          "id": "chapter-3-p176",
          "type": "paragraph",
          "text": "He placed the letter neatly on the table — no envelope, no weight to hold it down — just trust that it would be found."
        },
        {
          "id": "chapter-3-p177",
          "type": "paragraph",
          "text": "For a moment he looked around the lab — the still machines, the old notes, the faint smell of metal and dust. It didn’t feel like a room anymore; it felt like memory, waiting."
        },
        {
          "id": "chapter-3-p178",
          "type": "paragraph",
          "text": "He picked up the Shiv Purana, tucking it under his arm. It was heavier than it looked."
        },
        {
          "id": "chapter-3-p179",
          "type": "paragraph",
          "text": "Turning off the bulb, he whispered into the darkness, “You’re not done teaching me yet, Baba.”"
        },
        {
          "id": "chapter-3-p180",
          "type": "paragraph",
          "text": "The corridor was quiet as he stepped out. The living room clock showed 3:42 AM. He didn’t wait to think about it."
        },
        {
          "id": "chapter-3-p181",
          "type": "paragraph",
          "text": "Outside, the city shimmered wet under streetlights. A taxi idled near the junction, driver half-asleep."
        },
        {
          "id": "chapter-3-p182",
          "type": "quote",
          "text": "“Kaha pe, saab?”\n“Mumbai Central,” Arav said, catching his breath."
        },
        {
          "id": "chapter-3-p183",
          "type": "paragraph",
          "text": "The taxi rolled into motion, tires slicing through puddles. He watched the buildings slide past — towers his father once called ‘monuments of misplaced ambition.’"
        },
        {
          "id": "chapter-3-p184",
          "type": "paragraph",
          "text": "At Mumbai Central, noise swallowed the night — hawkers, footsteps, the clang of metal. A voice on the speaker echoed through the mist:\n“Train number 12167, Mumbai – Banaras Express, arriving on platform six.”"
        },
        {
          "id": "chapter-3-p185",
          "type": "paragraph",
          "text": "He ran. Boarded the general compartment as the train groaned to life. The air inside smelled of sweat, chai, and rain. He found a corner seat by the window. Outside, the city lights blurred like dying embers."
        },
        {
          "id": "chapter-3-p186",
          "type": "paragraph",
          "text": "Holding the Shiv Purana close, he closed his eyes. The rhythm of the train merged with his pulse.\nIf time could destroy, could it also forgive?"
        },
        {
          "id": "chapter-3-p187",
          "type": "paragraph",
          "text": "The thought lingered as Mumbai disappeared behind him — a city fading into smoke and distance, while ahead, Banaras waited.\nKashi. Mahakaal. The destroyer of worlds."
        }
      ]
    },
    {
      "id": "chapter-4",
      "number": "Chapter 4",
      "title": "The Torn Page",
      "pageStart": 71,
      "pageEnd": 99,
      "summary": "While Arav travels back to Kashi, Vikram discovers father's key formula on entropy, forms team ASHTAK, and successfully extends a mayfly's lifespan tenfold.",
      "paragraphs": [
        {
          "id": "chapter-4-p1",
          "type": "paragraph",
          "text": "The Letter and the Lab"
        },
        {
          "id": "chapter-4-p2",
          "type": "paragraph",
          "text": "The door was ajar. Meera noticed it first — the faint line of light seeping through from the lab. She frowned; it hadn’t been open in years."
        },
        {
          "id": "chapter-4-p3",
          "type": "paragraph",
          "text": "Barefoot, she walked in, the morning still pale outside. The smell of dust, ink, and sandalwood hung faintly in the air. On the desk lay a single sheet of paper."
        },
        {
          "id": "chapter-4-p4",
          "type": "paragraph",
          "text": "She picked it up, eyes narrowing at the familiar handwriting."
        },
        {
          "id": "chapter-4-p5",
          "type": "paragraph",
          "text": "Bhai,\nDon’t worry. I’m fine..."
        },
        {
          "id": "chapter-4-p6",
          "type": "paragraph",
          "text": "Her chest tightened. “Vikram,” she called out softly, voice half trembling."
        },
        {
          "id": "chapter-4-p7",
          "type": "paragraph",
          "text": "No response. She called again, louder this time."
        },
        {
          "id": "chapter-4-p8",
          "type": "paragraph",
          "text": "Vikram stumbled out of the bedroom, half-awake, hair unkempt. “What happened?”"
        },
        {
          "id": "chapter-4-p9",
          "type": "paragraph",
          "text": "She held up the letter. “It’s Arav. He’s gone.”"
        },
        {
          "id": "chapter-4-p10",
          "type": "paragraph",
          "text": "That sobered him instantly. He took the page, scanned it quickly — his jaw tightening as he reached the end. He didn’t speak for a moment. Then, quietly: “He went back.”"
        },
        {
          "id": "chapter-4-p11",
          "type": "dialogue",
          "text": "“To Banaras?” Meera asked."
        },
        {
          "id": "chapter-4-p12",
          "type": "paragraph",
          "text": "He nodded once, eyes heavy with both frustration and something else — a kind of pride he couldn’t admit."
        },
        {
          "id": "chapter-4-p13",
          "type": "paragraph",
          "text": "Meera touched his arm. “See the lab, Vikram. Maybe he left something else.”"
        },
        {
          "id": "chapter-4-p14",
          "type": "paragraph",
          "text": "He hesitated. For years, he’d avoided that room. Too many ghosts. But he nodded."
        },
        {
          "id": "chapter-4-p15",
          "type": "paragraph",
          "text": "The lab was dim, the bulb still faintly warm. Vikram walked in slowly, brushing dust off the desk, running a hand over the machines. His father’s handwriting — equations, half-erased notes, faint outlines of circuits — still clung to the walls."
        },
        {
          "id": "chapter-4-p16",
          "type": "paragraph",
          "text": "He exhaled, a quiet ache filling the silence. “You never stopped working, did you, Baba?”"
        },
        {
          "id": "chapter-4-p17",
          "type": "paragraph",
          "text": "And somewhere inside that ache, he felt something flicker — not grief this time, but light."
        },
        {
          "id": "chapter-4-p18",
          "type": "paragraph",
          "text": "The train rocked gently as dawn broke over the tracks. A whistle cut through the morning air."
        },
        {
          "id": "chapter-4-p19",
          "type": "dialogue",
          "text": "“Ticket, sir?” the T.C. asked, tapping Arav’s shoulder."
        },
        {
          "id": "chapter-4-p20",
          "type": "paragraph",
          "text": "Arav blinked awake, eyes gritty. He fumbled through his bag — nothing. He’d left in such a rush. “I—I don’t have it. I boarded late.”"
        },
        {
          "id": "chapter-4-p21",
          "type": "paragraph",
          "text": "The T.C. sighed. “Fine’s ₹250.”"
        },
        {
          "id": "chapter-4-p22",
          "type": "paragraph",
          "text": "Arav paid without argument. His eyes drifted to the window, where the Itarsi Junction sign flashed by in yellow paint, bold and half-faded. Vendors shouted for chai, newspapers slapped against counters, smoke from frying pakoras rose into the air."
        },
        {
          "id": "chapter-4-p23",
          "type": "paragraph",
          "text": "He leaned back, letting the noise blur around him. In his head, one question: Did they find the letter?"
        },
        {
          "id": "chapter-4-p24",
          "type": "paragraph",
          "text": "The phone buzzed. Meera."
        },
        {
          "id": "chapter-4-p25",
          "type": "paragraph",
          "text": "He answered quietly, “Meera bhabhi…”"
        },
        {
          "id": "chapter-4-p26",
          "type": "paragraph",
          "text": "Her voice came fast, worried: “Are you out of your mind, Arav? Leaving like that? Vikram was worried sick—”"
        },
        {
          "id": "chapter-4-p27",
          "type": "dialogue",
          "text": "“I’m fine,” he interrupted gently. “I just… needed to go.”"
        },
        {
          "id": "chapter-4-p28",
          "type": "paragraph",
          "text": "There was silence on the line, then her sigh. “At least tell us when you reach. Please. Take care, okay?”"
        },
        {
          "id": "chapter-4-p29",
          "type": "quote",
          "text": "“I will,” he said."
        },
        {
          "id": "chapter-4-p30",
          "type": "paragraph",
          "text": "When the call ended, he looked at the Shiv Purana resting on his lap. He ran his fingers over the embossed title, feeling its quiet pulse. Then he opened it again, reading the verse his father had circled — None escapes Time."
        },
        {
          "id": "chapter-4-p31",
          "type": "paragraph",
          "text": "The train rattled on. The world outside blurred into motion — stations, trees, faces passing like unfinished thoughts."
        },
        {
          "id": "chapter-4-p32",
          "type": "paragraph",
          "text": "Back in Mumbai, Vikram stood at the same desk, surrounded by chaos. The papers Arav had disturbed were spread open now — a storm of numbers, notes, and diagrams. He flipped through them, cross-referencing every line, every mark."
        },
        {
          "id": "chapter-4-p33",
          "type": "paragraph",
          "text": "Then his eyes caught something — a small note at the edge of a diagram:\n“Entropy is the witness, not the culprit.”"
        },
        {
          "id": "chapter-4-p34",
          "type": "paragraph",
          "text": "He froze. Entropy — the measure of disorder, of decay — what if his father wasn’t trying to erase it, but use it?"
        },
        {
          "id": "chapter-4-p35",
          "type": "paragraph",
          "text": "He sat down, calculations spilling from his mind onto the page. Lines, derivatives, loops — he worked in silence, breath steady, mind burning. Then, as if the pieces finally fit, he whispered:\n“Of course. The missing constant isn’t energy. It’s time’s decay rate itself.”"
        },
        {
          "id": "chapter-4-p36",
          "type": "paragraph",
          "text": "The realization hit him like light through fog. His father had come close — terrifyingly close — to decoding the equation that could stop matter from ageing."
        },
        {
          "id": "chapter-4-p37",
          "type": "paragraph",
          "text": "Only one part remained unknown: the exact threshold of entropy — how much decay must occur before decay could be neutralized. X amount of entropy, in Y amount of time. He had found the skeleton of the formula."
        },
        {
          "id": "chapter-4-p38",
          "type": "dialogue",
          "text": "“Meera!” he called, stepping out of the lab."
        },
        {
          "id": "chapter-4-p39",
          "type": "paragraph",
          "text": "She appeared at the doorway, still in her night clothes. “What happened?”"
        },
        {
          "id": "chapter-4-p40",
          "type": "quote",
          "text": "“Call Arav,” he said, eyes bright. “Check if he’s fine. And get breakfast ready fast. I need to leave for DRDO. I think… I think I’ve cracked it.”"
        },
        {
          "id": "chapter-4-p41",
          "type": "paragraph",
          "text": "Meera stared at him — a flicker of disbelief, fear, and hope passing through her face. Vikram smiled faintly, already lost in equations again."
        },
        {
          "id": "chapter-4-p42",
          "type": "paragraph",
          "text": "Behind him, the lab light flickered once — like approval."
        },
        {
          "id": "chapter-4-p43",
          "type": "paragraph",
          "text": "The whistle blew. The train jerked to life and the cold rhythm of the rails slid beneath Arav. Tires of wheels, small metal hearts clanging on steel, carried him east."
        },
        {
          "id": "chapter-4-p44",
          "type": "paragraph",
          "text": "He opened the Shiv Purana on his lap, its cover creased with use, the aroma of sandalwood rising gently between the pages. His reading light inside the compartment cast a soft pool of illumination."
        },
        {
          "id": "chapter-4-p45",
          "type": "paragraph",
          "text": "He turned to the first page — the verses began in quiet Sanskrit, then English translation beneath:\n“Sages requested Sutaji to explain the proper method of listening to the Shiv Purana … So that mankind may be purified and freed.”\n“The Sage Shaunak asked: ‘O Sutaji, what is the nature of the eternal One who neither comes nor goes?’”"
        },
        {
          "id": "chapter-4-p46",
          "type": "paragraph",
          "text": "Arav’s finger traced the lines slowly. His father’s annotation in the margin:\n“Contemplate what cannot be measured — then time may show its face.”"
        },
        {
          "id": "chapter-4-p47",
          "type": "paragraph",
          "text": "He swallowed. Outside the window, dawn broke over a station — the sign “Itarsi Junction” flickering as hawkers called: chai-wallah, vada stand, newspapers. He leaned back, the Purana open on his knees, words spinning between his father’s worlds and this one:\n“In the pathless, the formless manifests.”"
        },
        {
          "id": "chapter-4-p48",
          "type": "paragraph",
          "text": "He closed his eyes for a moment, the book resting against his chest. The corridor of the train blurred — passengers, lights, noise — but his mind sharpened. Time was not just passing. It was listening."
        },
        {
          "id": "chapter-4-p49",
          "type": "paragraph",
          "text": "He opened the next page as the train cut through mist:\n“He who sees the Destroyer in the heart of creation becomes undying.”"
        },
        {
          "id": "chapter-4-p50",
          "type": "paragraph",
          "text": "Arav’s breath caught. The words aligned with everything he had felt since the funeral — the pyre, the ashes, the page he hid, the lab untouched. He pressed the Purana tighter. The journey wasn’t just a train ride. It was an invitation."
        },
        {
          "id": "chapter-4-p51",
          "type": "paragraph",
          "text": "The brakes screamed as the car pulled in through the security gate of the DRDO compound. Gravel cracked beneath the tyres."
        },
        {
          "id": "chapter-4-p52",
          "type": "paragraph",
          "text": "Vikram stepped out before the vehicle stopped completely — hair still uncombed, the night’s fatigue pressed deep beneath his eyes."
        },
        {
          "id": "chapter-4-p53",
          "type": "paragraph",
          "text": "The guard saluted sharply. “Good morning, sir.”"
        },
        {
          "id": "chapter-4-p54",
          "type": "paragraph",
          "text": "Vikram just nodded and walked through the biometric gate."
        },
        {
          "id": "chapter-4-p55",
          "type": "paragraph",
          "text": "Beyond the glass walls, the lab wing opened into a high, sterile corridor humming with servers and fluorescent light. At the far end waited ASHTAK — eight scientists in faded lab coats, standing around a holographic table."
        },
        {
          "id": "chapter-4-p56",
          "type": "paragraph",
          "text": "This was his father’s team. Now his."
        },
        {
          "id": "chapter-4-p57",
          "type": "paragraph",
          "text": "Each of them carried a different aura — brilliance weighed down by loss. The table flickered with equations, simulation grids, energy loops that still bore Dr. Arvind Sen Gupta’s watermark."
        },
        {
          "id": "chapter-4-p58",
          "type": "paragraph",
          "text": "Vikram’s throat tightened at the sight."
        },
        {
          "id": "chapter-4-p59",
          "type": "quote",
          "text": "“Good to see you back, Vikram,” said Dr. Samar Bose, a wiry man in his fifties, spectacles always half-sliding down his nose. He had been Arvind’s closest friend — scientist of sound and frequency, the man who could make vibrations sing into patterns."
        },
        {
          "id": "chapter-4-p60",
          "type": "paragraph",
          "text": "Vikram shook his hand. “I had to come. I think I found what he was missing.”"
        },
        {
          "id": "chapter-4-p61",
          "type": "paragraph",
          "text": "Samar raised an eyebrow. “You found entropy?”"
        },
        {
          "id": "chapter-4-p62",
          "type": "paragraph",
          "text": "Vikram didn’t answer immediately. He placed his tablet on the table, pulling up the copied fragments of his father’s last equations."
        },
        {
          "id": "chapter-4-p63",
          "type": "paragraph",
          "text": "The rest of ASHTAK gathered closer —\n● Dr. Ishita Roy, expert in molecular thermodynamics, nerves quick and sharp.\n● Colonel Pratap Menon, applied physics and defense systems, the only one who still called Arvind “sir” in present tense.\n● Ananya Deshmukh, researcher in radiation behavior and atomic decay.\n● Farooq Khan, mathematical algorithms and probability systems, calm as a monk.\n● Raghav Sinha, quantum signal decoding, perpetually chewing gum.\n● Leena Patel, neural synchronization and pattern mapping — youngest, brilliant, quiet."
        },
        {
          "id": "chapter-4-p64",
          "type": "paragraph",
          "text": "Eight minds — one pulse. ASHTAK. A team built to rewrite the boundaries between matter and memory. To make the invisible measurable. To make time itself predictable."
        },
        {
          "id": "chapter-4-p65",
          "type": "paragraph",
          "text": "Vikram glanced around at them, and for a fleeting second, saw what his father must’ve seen — not a team, but a possibility."
        },
        {
          "id": "chapter-4-p66",
          "type": "paragraph",
          "text": "He exhaled slowly. “He wasn’t wrong,” he said softly, tapping the floating equation. “He just needed a little more time.”"
        },
        {
          "id": "chapter-4-p67",
          "type": "paragraph",
          "text": "The others looked at him — unsure whether it was faith or madness speaking."
        },
        {
          "id": "chapter-4-p68",
          "type": "paragraph",
          "text": "Samar broke the silence. “Then let’s buy him that time.”"
        },
        {
          "id": "chapter-4-p69",
          "type": "paragraph",
          "text": "The hum of machines rose, merging with the low thrum of Vikram’s heartbeat."
        },
        {
          "id": "chapter-4-p70",
          "type": "paragraph",
          "text": "While, the train clattered on through the endless plains — fields, smoke, distant water tanks flashing past in a blur of light and dust."
        },
        {
          "id": "chapter-4-p71",
          "type": "paragraph",
          "text": "Arav sat by the window, elbows on the metal sill, eyes half on the world, half on the pages of the Shiv Purana. The verses whispered of beginnings before beginnings — Shiv as the void, Shakti as the pulse."
        },
        {
          "id": "chapter-4-p72",
          "type": "paragraph",
          "text": "He was tracing the words with his finger when a voice came, calm and unhurried:\n“Waqt kya hai?”"
        },
        {
          "id": "chapter-4-p73",
          "type": "paragraph",
          "text": "Arav looked up. Across from him sat a man wrapped in saffron, his skin creased like parched soil, his eyes — still, steady — as if they belonged somewhere older. He smiled faintly, not as a greeting, but as one who already knew the answer."
        },
        {
          "id": "chapter-4-p74",
          "type": "dialogue",
          "text": "“Bas ek thread,” the man continued, “that binds the living, the dead, and everything in between.”"
        },
        {
          "id": "chapter-4-p75",
          "type": "paragraph",
          "text": "Arav blinked, unsure if he’d heard right. “Thread?”"
        },
        {
          "id": "chapter-4-p76",
          "type": "dialogue",
          "text": "“Hmm,” the man nodded, adjusting the rudraksha beads around his neck. “Time is the only cloth that never tears. We only forget how to weave it.”"
        },
        {
          "id": "chapter-4-p77",
          "type": "paragraph",
          "text": "The rhythm of the train filled the silence — wheels over tracks, steady and infinite, like the ticking of some ancient clock."
        },
        {
          "id": "chapter-4-p78",
          "type": "paragraph",
          "text": "Arav closed the book gently. “You speak like you’ve seen it.”"
        },
        {
          "id": "chapter-4-p79",
          "type": "paragraph",
          "text": "The vairagi smiled. “Dekha bhi hai, bhool bhi gaya.” Then, softly: “You carry his words, don’t you? ‘Time is not a river… it’s a sea we forgot how to swim in.’”"
        },
        {
          "id": "chapter-4-p80",
          "type": "paragraph",
          "text": "Arav froze. “How do you—”"
        },
        {
          "id": "chapter-4-p81",
          "type": "paragraph",
          "text": "The old man chuckled, cutting him off. “You think thoughts are born once? No, beta. They travel. Just like you.”"
        },
        {
          "id": "chapter-4-p82",
          "type": "paragraph",
          "text": "Arav stared, breath shallow. The world outside blurred — fields becoming ripples of green and gold, sun smudged behind smoke."
        },
        {
          "id": "chapter-4-p83",
          "type": "dialogue",
          "text": "“Tell me,” the man asked, “what do you seek in Kashi?”"
        },
        {
          "id": "chapter-4-p84",
          "type": "paragraph",
          "text": "Arav hesitated. “Maybe… a beginning. Or an answer.”"
        },
        {
          "id": "chapter-4-p85",
          "type": "paragraph",
          "text": "The vairagi’s eyes gleamed, almost kind. “In Kashi, answers don’t speak. They watch. You’ll see what must end before you learn what begins.”"
        },
        {
          "id": "chapter-4-p86",
          "type": "paragraph",
          "text": "Then he leaned back, closing his eyes, the faintest smile at his lips."
        },
        {
          "id": "chapter-4-p87",
          "type": "paragraph",
          "text": "The train roared into a tunnel — for a moment, all was dark. When the light returned, the seat across from Arav was empty. No saffron, no beads, no trace — only the Shiv Purana open on his lap, its pages trembling slightly with the motion of the train."
        },
        {
          "id": "chapter-4-p88",
          "type": "paragraph",
          "text": "And in the faint rustle of those pages, Arav could almost hear the same voice again — “The thread, beta. Find where it starts.”"
        },
        {
          "id": "chapter-4-p89",
          "type": "paragraph",
          "text": "He looked out of the window — the signboard of Mughalsarai Junction flashed by. Kashi was near. And for the first time, Arav felt time itself leaning closer, as if listening."
        },
        {
          "id": "chapter-4-p90",
          "type": "paragraph",
          "text": "The station had barely quieted when Arav stepped into the city. The air itself felt alive — thick with incense, dust, sweat, and bells. Cows lumbered through narrow lanes; pilgrims chanted; loudspeakers tangled with temple drums. Kashi didn’t walk — it breathed."
        },
        {
          "id": "chapter-4-p91",
          "type": "paragraph",
          "text": "He kept the Shiv Purana close to his chest as he moved through the labyrinth of alleys. Walls painted with half-faded mantras, electric wires looping like veins over doorways, and the smell — sandalwood, milk, burning oil — merging into something ancient, familiar."
        },
        {
          "id": "chapter-4-p92",
          "type": "paragraph",
          "text": "He crossed Manikarnika, where fires never died, and paused. Each pyre was a heartbeat — slow, steady, endless. Somewhere between those flames and the Ganga’s shimmer, the vairagi’s words returned: “Find where the thread starts.”"
        },
        {
          "id": "chapter-4-p93",
          "type": "paragraph",
          "text": "Arav whispered under his breath, “Time doesn’t flow here, does it, Baba? It stays.”"
        },
        {
          "id": "chapter-4-p94",
          "type": "paragraph",
          "text": "He walked on — toward Kashi Vishwanath. The temple rose ahead like a memory made of gold and stone, its shikhara gleaming through the haze. The sound of conches and bells grew louder, blurring thought into feeling."
        },
        {
          "id": "chapter-4-p95",
          "type": "paragraph",
          "text": "Inside, he stood before the Jyotirlinga. Oil lamps flickered. Chanting rippled through the air — Om Namah Shivaya — not prayer, but vibration, an equation of devotion and resonance."
        },
        {
          "id": "chapter-4-p96",
          "type": "paragraph",
          "text": "He touched the cold marble, eyes closed. And in that moment, he saw. Not with eyes — but with memory, with silence."
        },
        {
          "id": "chapter-4-p97",
          "type": "paragraph",
          "text": "His father’s voice, soft, patient:\n“Time, Arav, is the constant in every variable. Matter decays not because it ages, but because time chooses to move on.”\nAnd then, clearer:\n“If we could understand how time perceives matter, we could learn to pause decay — not cheat death, but understand its rhythm.”"
        },
        {
          "id": "chapter-4-p98",
          "type": "paragraph",
          "text": "Arav’s breath caught. He looked up at the Shivlinga — the symbol of both creation and destruction — the still point between beginnings and ends. The torn page. The equations. The words. They weren’t about energy or matter alone. They were about time itself."
        },
        {
          "id": "chapter-4-p99",
          "type": "paragraph",
          "text": "A whisper slipped from his lips — “He was working on time… the decay constant was never material. It was temporal.”"
        },
        {
          "id": "chapter-4-p100",
          "type": "paragraph",
          "text": "Outside, a bell rang — sharp, resonant, like a final confirmation. The city shimmered in heat and incense. For a second, Arav felt everything slow — every breath, every sound — suspended in invisible rhythm. He opened his eyes."
        },
        {
          "id": "chapter-4-p101",
          "type": "paragraph",
          "text": "Somewhere far away, the world shifted."
        },
        {
          "id": "chapter-4-p102",
          "type": "paragraph",
          "text": "The whiteboards were a battlefield. Equations spilled across every surface — half-erased, rewritten, crossed out again. The hum of prototype chambers filled the DRDO basement — a controlled frenzy of lights, graphs, and numbers flashing in rhythmic chaos."
        },
        {
          "id": "chapter-4-p103",
          "type": "dialogue",
          "text": "“Entropy’s not a variable,” Vikram snapped, marker tapping on the board. “It’s the exchange factor. You can’t cancel decay, but you can shift its rhythm.”"
        },
        {
          "id": "chapter-4-p104",
          "type": "paragraph",
          "text": "Dr. Ishita Roy, sleeves rolled up, shot back, “That rhythm depends on thermal gradient. We stabilize the energy field — we stabilize the decay.”"
        },
        {
          "id": "chapter-4-p105",
          "type": "paragraph",
          "text": "From the far corner, Farooq Khan muttered without looking up, “Statistically improbable, but not impossible. If we hit that constant, even chaos repeats itself.” His pen clicked — once, twice — like a metronome counting uncertainty."
        },
        {
          "id": "chapter-4-p106",
          "type": "paragraph",
          "text": "Ananya Deshmukh’s radiation monitor beeped. “No spikes yet. Radiation field contained within the core. But we’re still losing atomic balance at ten-to-the-minus-nine seconds.”"
        },
        {
          "id": "chapter-4-p107",
          "type": "paragraph",
          "text": "Colonel Pratap Menon stepped in, voice clipped, military calm cutting through the static. “Either we lock it, or we abort. DRDO’s clock is ticking.”"
        },
        {
          "id": "chapter-4-p108",
          "type": "paragraph",
          "text": "Leena Patel, the youngest, typed furiously, eyes flicking between algorithm feeds. Her voice was soft but sure. “The field doesn’t collapse. It resets. It wants to survive.”"
        },
        {
          "id": "chapter-4-p109",
          "type": "paragraph",
          "text": "Vikram turned, caught the phrase. “Say that again.”"
        },
        {
          "id": "chapter-4-p110",
          "type": "dialogue",
          "text": "“It wants to survive,” Leena repeated. “Decay isn’t death — it’s renewal. The system’s telling us that matter remembers stability.”"
        },
        {
          "id": "chapter-4-p111",
          "type": "paragraph",
          "text": "Samar Bose — Arvind’s old friend, silent until now — lifted his head. “Then maybe you’re not fighting decay,” he said. “Maybe you’re asking it to wait.”"
        },
        {
          "id": "chapter-4-p112",
          "type": "paragraph",
          "text": "The room froze."
        },
        {
          "id": "chapter-4-p113",
          "type": "paragraph",
          "text": "Vikram drew one line across the board, then another.\n“ΔE = f(ΔS / Δt)” — the balance between energy, entropy, and time.\nHe whispered, “If entropy has rhythm… then we just need to tune it.”"
        },
        {
          "id": "chapter-4-p114",
          "type": "paragraph",
          "text": "Ishita adjusted the power core. Farooq keyed in the final parameters."
        },
        {
          "id": "chapter-4-p115",
          "type": "paragraph",
          "text": "The machine’s pulse steadied — a soft, resonant hum. Numbers scrolled across the main display: 0.137 — 0.142 — 0.145 —"
        },
        {
          "id": "chapter-4-p116",
          "type": "paragraph",
          "text": "Vikram leaned forward. “That’s it. That’s the number.”"
        },
        {
          "id": "chapter-4-p117",
          "type": "paragraph",
          "text": "For a heartbeat, no one moved. Then the mayfly in the test chamber fluttered — fragile wings catching light — and did not fall."
        },
        {
          "id": "chapter-4-p118",
          "type": "paragraph",
          "text": "The faint buzz of the machine still filled the lab, but silence took over. The mayfly lived."
        },
        {
          "id": "chapter-4-p119",
          "type": "paragraph",
          "text": "Ishita exhaled, hands trembling. “Tenfold increase. Confirmed.” Her voice carried disbelief — and awe."
        },
        {
          "id": "chapter-4-p120",
          "type": "paragraph",
          "text": "Pratap crossed his arms. “Sen Gupta sir would’ve said, Don’t play with fire unless you know who lit it.” He half-smiled. “Looks like his sons inherited the matchbox.”"
        },
        {
          "id": "chapter-4-p121",
          "type": "paragraph",
          "text": "Ananya checked the radiation field again. “Stable. No drift. It’s… holding.”"
        },
        {
          "id": "chapter-4-p122",
          "type": "paragraph",
          "text": "Farooq looked up from his notes. “Statistical probability: zero-point-one percent. And yet…” He gestured to the mayfly. “Miracle has entered mathematics.”"
        },
        {
          "id": "chapter-4-p123",
          "type": "paragraph",
          "text": "Leena stood nearest to the glass chamber. Her reflection overlapped the insect’s wings. “If time bends here,” she whispered, “does it straighten somewhere else?”"
        },
        {
          "id": "chapter-4-p124",
          "type": "paragraph",
          "text": "Samar Bose, arms folded, smiled sadly. “Your father would have stopped now,” he said. “He knew what happens when man mistakes delay for victory.”"
        },
        {
          "id": "chapter-4-p125",
          "type": "paragraph",
          "text": "Vikram didn’t answer. His gaze was fixed on the monitor — on the constant that refused to vanish. “This is what he wanted,” he murmured. “We’ve found the interval where matter forgets to die.”"
        },
        {
          "id": "chapter-4-p126",
          "type": "paragraph",
          "text": "Samar’s eyes softened. “He was searching for mercy, not mastery.”"
        },
        {
          "id": "chapter-4-p127",
          "type": "paragraph",
          "text": "The rest of Ashtak stood quietly — seven minds around a single hum of light. But on the reflective glass, eight shadows trembled — one faint, one unseen, belonging to Arvind Sen Gupta, the man whose absence had summoned them all."
        },
        {
          "id": "chapter-4-p128",
          "type": "paragraph",
          "text": "For a long moment, no one spoke. Outside, dawn seeped into the lab’s tinted glass, painting the equations gold. And in that light, it almost looked as if the chalk dust on the floor had begun to move — as though time itself was stirring, listening."
        },
        {
          "id": "chapter-4-p129",
          "type": "paragraph",
          "text": "The day was ending — a dusk that didn’t fade, but folded gently into light."
        },
        {
          "id": "chapter-4-p130",
          "type": "paragraph",
          "text": "In Banaras, Arav stood by the ghats, the Shiv Purana still warm in his hands. The verses he’d read echoed like pulsebeats — \"That which ends, begins within itself. That which is destroyed, remembers the shape of creation.\" He lit a diya and set it afloat. The flame trembled, caught the wind, then steadied. For the first time in months, his hands did not shake."
        },
        {
          "id": "chapter-4-p131",
          "type": "paragraph",
          "text": "In Mumbai, the lab was silent except for the soft hiss of valves. Vikram watched the mayfly hover — alive, wings glinting under a violet lamp. He looked to the vial beside it, labeled AMRIT-01, and drew a slow breath. He injected the serum into a sealed tissue chamber — the machine responded with a pulse of golden light. Numbers stabilized. Matter had paused its decay."
        },
        {
          "id": "chapter-4-p132",
          "type": "paragraph",
          "text": "Both brothers looked up — miles apart, under the same dying sun. Arav’s diya drifted past hundreds of others, a tiny spark in a moving constellation. Vikram’s data screen reflected in his eyes, a constellation of digits that refused to fall."
        },
        {
          "id": "chapter-4-p133",
          "type": "paragraph",
          "text": "For Arav, it was faith finding reason. For Vikram, reason finding godhood. Two sons worshipping the same father, in opposite ways."
        },
        {
          "id": "chapter-4-p134",
          "type": "paragraph",
          "text": "As the sky deepened into amber and indigo, their worlds — science and silence — aligned for a fleeting instant. The mayfly fluttered; the flame steadied. Somewhere, unseen, Arvind Sen Gupta’s voice seemed to whisper:\n“Every answer is just a prayer written backward.”"
        },
        {
          "id": "chapter-4-p135",
          "type": "paragraph",
          "text": "The screen dimmed. The river glowed. And in that shared dusk, the world felt ready for a new dawn."
        },
        {
          "id": "chapter-4-p136",
          "type": "paragraph",
          "text": "Night. The Ganga lay still; the Mumbai skyline hummed. Two cities, two sons — and one shadow stretching between them."
        },
        {
          "id": "chapter-4-p137",
          "type": "paragraph",
          "text": "Arav, on the ghats, felt the wind shift cold across his face. He thought of Vikram — the elder brother who once soldered his toy car’s motor when he cried, who now soldered reality itself. He pulled the Shiv Purana closer, whispering, “Bhai would call this superstition.”"
        },
        {
          "id": "chapter-4-p138",
          "type": "paragraph",
          "text": "In Mumbai, Vikram leaned back in his chair, eyes red from sleepless calculation. The mayfly still clung to life in its chamber — small, stubborn, almost holy. He smiled, weary, and murmured, “Arav would call this blasphemy.”"
        },
        {
          "id": "chapter-4-p139",
          "type": "paragraph",
          "text": "Both laughed softly, alone, unaware of the echo they shared."
        },
        {
          "id": "chapter-4-p140",
          "type": "paragraph",
          "text": "A text blinked on Vikram’s phone — from Meera: “He called. Reached safely.” He typed a reply, then erased it. For all his mastery of time, he couldn’t rewind the last conversation with his brother."
        },
        {
          "id": "chapter-4-p141",
          "type": "paragraph",
          "text": "Arav watched the diya drift out of sight. “Maybe he found something,” he thought, “something that will bring us back.”"
        },
        {
          "id": "chapter-4-p142",
          "type": "paragraph",
          "text": "The wind rose — the same wind, two directions. Between Banaras and Mumbai, between experiment and devotion, between flame and formula, the story paused — breathing."
        },
        {
          "id": "chapter-4-p143",
          "type": "paragraph",
          "text": "Just for a heartbeat, it felt like their father was still between them, holding both their shoulders, whispering to keep walking."
        }
      ]
    },
    {
      "id": "chapter-5",
      "number": "Chapter 5",
      "title": "Project Amrit",
      "pageStart": 100,
      "pageEnd": 132,
      "summary": "Arav is attacked on the train and rescued in Trimbakeshwar by Dr. Maya Rai. In Delhi, Vikram and Samar are betrayed by Keshav Bhaduri and captured by Colonel Rudra.",
      "paragraphs": [
        {
          "id": "chapter-5-p1",
          "type": "paragraph",
          "text": "The rhythmic rattle of wheels came first — faint, distant, as if time itself was moving on tracks."
        },
        {
          "id": "chapter-5-p2",
          "type": "paragraph",
          "text": "Arav opened his eyes. He was on the train again. Same maroon seats, same cracked window, same smell of iron and dust. Only this time, he had the ticket. Tucked carefully into his pocket, as if proof that he still existed."
        },
        {
          "id": "chapter-5-p3",
          "type": "paragraph",
          "text": "He couldn’t remember boarding. Just flashes — the corridors of Kashi Vishwanath temple glowing with oil lamps; a sage’s voice murmuring “Energy and matter are the same breath, beta. Only time decides who exhales first.” He remembered asking something — “Then what is decay?”"
        },
        {
          "id": "chapter-5-p4",
          "type": "paragraph",
          "text": "And the sage’s faint smile, “When time forgets the rhythm.”"
        },
        {
          "id": "chapter-5-p5",
          "type": "paragraph",
          "text": "Everything after that — a blur of incense, fatigue, falling asleep near the sanctum, the sound of a conch shell dissolving into dreams. He had been rescued, he vaguely recalled — temple volunteers pulling him from near the steps. One of them saying softly, “He’s Arvind’s boy. We’ve seen that face before.”"
        },
        {
          "id": "chapter-5-p6",
          "type": "paragraph",
          "text": "Now, the train was humming south. Back to Mumbai. Back to what was left of reason."
        },
        {
          "id": "chapter-5-p7",
          "type": "paragraph",
          "text": "Outside the window, fields streaked past like lines in a forgotten notebook. The air was heavy — not with heat, but with questions."
        },
        {
          "id": "chapter-5-p8",
          "type": "paragraph",
          "text": "Arav rubbed his eyes, tried to steady his breath. He looked at the cover of the Shiv Purana resting on his lap. Still damp from river air. Still smelling faintly of sandalwood and dust."
        },
        {
          "id": "chapter-5-p9",
          "type": "paragraph",
          "text": "For a moment, everything felt suspended — motion without meaning. He thought of his father again, the way he’d once said, “Science isn’t the opposite of faith, Arav. It’s the language faith forgot.”"
        },
        {
          "id": "chapter-5-p10",
          "type": "paragraph",
          "text": "He shut the book. The wheels clattered louder — almost like a heartbeat."
        },
        {
          "id": "chapter-5-p11",
          "type": "paragraph",
          "text": "A sudden jolt. The train screeched — brakes biting metal. Someone shouted from another compartment. Arav blinked, trying to see through the aisle."
        },
        {
          "id": "chapter-5-p12",
          "type": "paragraph",
          "text": "Then came the scream — high, sharp, female — somewhere ahead. The train had slowed near a bridge. The noise of chaos filled the air — footsteps running, a baby crying, men shouting orders."
        },
        {
          "id": "chapter-5-p13",
          "type": "dialogue",
          "text": "“Bandits,” someone hissed."
        },
        {
          "id": "chapter-5-p14",
          "type": "paragraph",
          "text": "Arav rose, instinctively — trying to look over the seats. He could see shadows moving between compartments. One of them looked straight at him — cold eyes scanning."
        },
        {
          "id": "chapter-5-p15",
          "type": "paragraph",
          "text": "Before Arav could react, a rough hand clamped over his mouth. A man — his face half-covered with a scarf — whispered, “Chup... time’s not watching right now.” And then, with a single pull, they leapt out of the moving train."
        },
        {
          "id": "chapter-5-p16",
          "type": "paragraph",
          "text": "Wind tore past his face. Steel roared above. Then — water."
        },
        {
          "id": "chapter-5-p17",
          "type": "paragraph",
          "text": "The impact crushed sound into silence. The world turned black."
        },
        {
          "id": "chapter-5-p18",
          "type": "paragraph",
          "text": "He woke to the chill of river mud beneath his hands. Coughing, shivering, he crawled up the bank — soaked to the bone. The train was gone; only the faint hum of its wheels echoed across the bridge. A board nearby read: “Godavari River”."
        },
        {
          "id": "chapter-5-p19",
          "type": "paragraph",
          "text": "His phone was dead. His wallet gone. Only the Shiv Purana lay beside him, waterlogged but intact — as if the river had chosen to return it."
        },
        {
          "id": "chapter-5-p20",
          "type": "paragraph",
          "text": "He sat there, breathing hard, staring at the pale sky."
        },
        {
          "id": "chapter-5-p21",
          "type": "paragraph",
          "text": "Somewhere, miles away, a phone was ringing unanswered. Both the police and the bandits on the train were calling the same unknown person, reporting the exact information about Arav. “Woh ladka nahi mila.”"
        },
        {
          "id": "chapter-5-p22",
          "type": "paragraph",
          "text": "For Vikram, morning cracked open like a tired eye. Vikram blinked at the slanted sunlight cutting through the airplane window."
        },
        {
          "id": "chapter-5-p23",
          "type": "paragraph",
          "text": "Samar’s voice nudged him awake — cheerful, too alive for the hour. “Good morning, young scientist,” Samar grinned, nudging his shoulder. “Welcome to the sky.”"
        },
        {
          "id": "chapter-5-p24",
          "type": "paragraph",
          "text": "Vikram rubbed his eyes, the hum of the engine steady beneath them. Mumbai was already a memory — fogged glass, blinking lights, Meera’s half-smile before he left. Outside, only clouds — endless, white, indifferent."
        },
        {
          "id": "chapter-5-p25",
          "type": "paragraph",
          "text": "He stared at them for a while. The success felt heavy, not light. Ten times the lifespan — a scientific miracle, maybe, but what did it mean?"
        },
        {
          "id": "chapter-5-p26",
          "type": "paragraph",
          "text": "The plane began its descent, the seatbelt light flickered. As the wheels kissed Delhi’s tarmac, his stomach clenched — not from turbulence, but from the thought of who he was meeting next."
        },
        {
          "id": "chapter-5-p27",
          "type": "paragraph",
          "text": "The Government guesthouse smelled of old air-conditioning and disinfectant. Files stacked like towers of quiet authority."
        },
        {
          "id": "chapter-5-p28",
          "type": "paragraph",
          "text": "Inside, at the end of the long teak table, sat Keshav Bhaduri — polished, precise, wearing that bureaucratic calm that could pass for warmth."
        },
        {
          "id": "chapter-5-p29",
          "type": "quote",
          "text": "“Morning, scientist,” Keshav said, rising halfway. “You are a warm energy like your father. Glad you listened to me and joined Ashtak. When Arvind was around, he troubled you with office chores, didn’t he?”"
        },
        {
          "id": "chapter-5-p30",
          "type": "paragraph",
          "text": "Vikram managed a polite smile. “He believed in discipline, sir. Still a long way to learn and grow.”"
        },
        {
          "id": "chapter-5-p31",
          "type": "paragraph",
          "text": "Keshav chuckled softly. “That’s good. That’s how the line continues.” He gestured for them to sit. “So, what brings you to Delhi?”"
        },
        {
          "id": "chapter-5-p32",
          "type": "quote",
          "text": "“An answer,” Vikram said simply. He opened the small transport box he carried like a relic. Inside, a mayfly rested under glass, wings trembling faintly. “She’s three days old.”"
        },
        {
          "id": "chapter-5-p33",
          "type": "paragraph",
          "text": "Keshav leaned in, squinting. “I don’t get it. What does this mayfly imply?”"
        },
        {
          "id": "chapter-5-p34",
          "type": "quote",
          "text": "“We extended its lifespan ten times, sir,” Vikram said, his tone careful, clinical. “We found the decay constant. The one Baba was chasing.”"
        },
        {
          "id": "chapter-5-p35",
          "type": "paragraph",
          "text": "For a fraction of a second, Keshav’s eyes lost focus — something flickered there: awe, fear, or memory. Then he smiled, controlled again."
        },
        {
          "id": "chapter-5-p36",
          "type": "quote",
          "text": "“Brilliant,” he said softly. “Astonishing, even. Is it safe for larger trials?”"
        },
        {
          "id": "chapter-5-p37",
          "type": "paragraph",
          "text": "Vikram hesitated. “Not yet. We’d need better containment, and funding—”"
        },
        {
          "id": "chapter-5-p38",
          "type": "dialogue",
          "text": "“Granted,” Keshav interrupted smoothly. “I’m tripling your budget. You’ll shift to Delhi. Central oversight. Bigger lab, more access. No roadblocks.”"
        },
        {
          "id": "chapter-5-p39",
          "type": "paragraph",
          "text": "Samar frowned, uncertain. “But sir, animal trials will take time. A lot of time—”"
        },
        {
          "id": "chapter-5-p40",
          "type": "paragraph",
          "text": "Keshav’s hand slammed lightly on the desk — not in anger, but in rhythm. “Time, Samar. That’s the very thing we are solving, aren’t we?”"
        },
        {
          "id": "chapter-5-p41",
          "type": "paragraph",
          "text": "Samar looked down. “Yes, sir.”"
        },
        {
          "id": "chapter-5-p42",
          "type": "dialogue",
          "text": "“Good.” Keshav leaned back, his voice soft again, almost fatherly. “Then work. Rest later. I’ll show you your new lab tomorrow. You’ll like it — it’s the same one your father helped design, long ago.”"
        },
        {
          "id": "chapter-5-p43",
          "type": "paragraph",
          "text": "Vikram stiffened — a mix of pride and unease flickering across his face."
        },
        {
          "id": "chapter-5-p44",
          "type": "paragraph",
          "text": "As they left the office, Samar whispered, “Feels like déjà vu, doesn’t it?”"
        },
        {
          "id": "chapter-5-p45",
          "type": "paragraph",
          "text": "Vikram didn’t answer. Outside, Delhi’s winter sun burned pale, thin — a light that revealed everything and warmed nothing."
        },
        {
          "id": "chapter-5-p46",
          "type": "paragraph",
          "text": "Delhi’s winter evening draped the city in a dull amber haze — that half-light between exhaustion and revelation. The flight back to Mumbai had been cancelled, but Vikram didn’t mind. He and Samar had stepped out, walking aimlessly through Connaught Place — past bookstores, chai stalls, and the smell of roasted peanuts that clung to the air like memory."
        },
        {
          "id": "chapter-5-p47",
          "type": "paragraph",
          "text": "For the first time in months, there were no whiteboards, no formulas, no ringing lab alarms. Just the sound of footsteps and a city pretending to be eternal."
        },
        {
          "id": "chapter-5-p48",
          "type": "paragraph",
          "text": "Samar broke the silence first. “So, how does it feel, Doctor Sen Gupta?” he asked with a crooked smile. “The son finally cracked the father’s unsolved theorem.”"
        },
        {
          "id": "chapter-5-p49",
          "type": "paragraph",
          "text": "Vikram looked at him, then up at the circling pigeons near the dome of the old post office. “It feels like stealing from a god,” he said softly. “And realizing the god was only a man who ran out of time.”"
        },
        {
          "id": "chapter-5-p50",
          "type": "paragraph",
          "text": "Samar raised an eyebrow. “That’s poetic for you.”"
        },
        {
          "id": "chapter-5-p51",
          "type": "paragraph",
          "text": "Vikram smiled faintly, eyes far away. “You ever think about death, Samar?”"
        },
        {
          "id": "chapter-5-p52",
          "type": "paragraph",
          "text": "Samar gave a short laugh. “I work with you. Of course I do. Every day we chase it, deny it, rename it.”"
        },
        {
          "id": "chapter-5-p53",
          "type": "paragraph",
          "text": "Vikram’s voice lowered. “Death is an error in design.”"
        },
        {
          "id": "chapter-5-p54",
          "type": "paragraph",
          "text": "Samar slowed his pace. “You mean philosophically?”"
        },
        {
          "id": "chapter-5-p55",
          "type": "dialogue",
          "text": "“I mean mathematically,” Vikram replied, hands buried in his pockets. “Mortality isn’t divine justice — it’s inefficiency. A biological flaw. Entropy consuming what evolution builds. Why let understanding rot with the body that carries it?” He paused at a tea stall, staring into the boiling milk. “Every death is data lost, Samar. Every graveyard — a wasted library. The universe kills what it no longer understands.”"
        },
        {
          "id": "chapter-5-p56",
          "type": "paragraph",
          "text": "Samar watched him quietly. “And what if that’s the point? Maybe the loss is what keeps the system alive. If everything remembered forever, there’d be no space for new thought. Entropy isn’t an error; it’s… breath.”"
        },
        {
          "id": "chapter-5-p57",
          "type": "paragraph",
          "text": "Vikram turned to him, half-smiling, half-sad. “You believe in poetic decay.”"
        },
        {
          "id": "chapter-5-p58",
          "type": "dialogue",
          "text": "“I believe in rhythm,” Samar replied, sipping his chai. “Not all data deserves preservation. Some of it needs to fade, to make room for what’s next. Otherwise, we’ll drown in our own perfection.”"
        },
        {
          "id": "chapter-5-p59",
          "type": "paragraph",
          "text": "Vikram’s gaze hardened. “Or maybe we’re meant to outgrow the need for decay. You think death gives meaning to life. I think it limits it. My father used to say—” he hesitated, voice tightening— “that the universe forgets too easily. Some legacies refuse to be erased by a stupid cosmos.”"
        },
        {
          "id": "chapter-5-p60",
          "type": "paragraph",
          "text": "Samar smiled gently. “And some mistakes keep the cosmos sane.”"
        },
        {
          "id": "chapter-5-p61",
          "type": "paragraph",
          "text": "They stood for a moment, silent, two minds orbiting the same truth from opposite poles. The streetlight flickered above them; the city hummed below — indifferent to gods or scientists."
        },
        {
          "id": "chapter-5-p62",
          "type": "paragraph",
          "text": "Finally, Vikram exhaled. “Maybe,” he said. “But if death is the price of order, I’d still like to know the cost of chaos.”"
        },
        {
          "id": "chapter-5-p63",
          "type": "paragraph",
          "text": "Samar’s reply was soft, almost a whisper. “You’ll find out soon enough, but I hope you don't.”"
        },
        {
          "id": "chapter-5-p64",
          "type": "paragraph",
          "text": "They walked on — two silhouettes dissolving into Delhi’s fog, their footsteps syncing like heartbeat and echo."
        },
        {
          "id": "chapter-5-p65",
          "type": "paragraph",
          "text": "The night had settled like dust — soft, slow, inevitable. Delhi’s fog rolled in, wrapping Connaught Place in a yellow haze. Vikram and Samar were still standing near the circle, paper cups of chai cooling in their hands, when Vikram’s phone began to vibrate."
        },
        {
          "id": "chapter-5-p66",
          "type": "paragraph",
          "text": "The screen read: Keshav — Office Line."
        },
        {
          "id": "chapter-5-p67",
          "type": "paragraph",
          "text": "He answered, expecting a formal follow-up. Instead, it was a young voice, efficient and hurried. “Dr. Sen Gupta? Sir, I’m Mr. Keshav’s PA. Where are you right now?”"
        },
        {
          "id": "chapter-5-p68",
          "type": "dialogue",
          "text": "“Connaught Place,” Vikram replied, glancing at Samar. “Why?”"
        },
        {
          "id": "chapter-5-p69",
          "type": "paragraph",
          "text": "The PA’s tone softened, almost cheerful. “Sir was very eager to show you the new facility. He’s already taken approval from higher authorities — even stayed back in office for it. Please share your live location. A car will reach you in ten to fifteen minutes. It’ll take you both directly to the site.”"
        },
        {
          "id": "chapter-5-p70",
          "type": "paragraph",
          "text": "Vikram looked at Samar, half-amused, half-bewildered. “Now? At this hour?”"
        },
        {
          "id": "chapter-5-p71",
          "type": "quote",
          "text": "“Yes, sir,” the voice said briskly. “Mr. Keshav said, when curiosity is awake, don’t let it sleep. He’ll meet you there himself.”"
        },
        {
          "id": "chapter-5-p72",
          "type": "paragraph",
          "text": "The call clicked off."
        },
        {
          "id": "chapter-5-p73",
          "type": "paragraph",
          "text": "Vikram exhaled through a smile. “Well, looks like the old man doesn’t waste time.”"
        },
        {
          "id": "chapter-5-p74",
          "type": "paragraph",
          "text": "Samar shrugged, rubbing his tired eyes. “Neither do we. Send him the pin.”"
        },
        {
          "id": "chapter-5-p75",
          "type": "paragraph",
          "text": "Fifteen minutes later, through the thinning fog, a black Innova rolled up to the curb. Its headlights cut through the mist like twin blades. No emblem, no government markings — just a plain car with tinted windows."
        },
        {
          "id": "chapter-5-p76",
          "type": "paragraph",
          "text": "Vikram hesitated for a moment. “Strange,” he murmured. “Not an embassy car.”"
        },
        {
          "id": "chapter-5-p77",
          "type": "paragraph",
          "text": "Samar chuckled. “Maybe it’s Keshav’s personal ride. He probably doesn’t want a convoy drawing attention.”"
        },
        {
          "id": "chapter-5-p78",
          "type": "paragraph",
          "text": "They climbed in. The interior smelled faintly of leather and something else — metallic, unfamiliar."
        },
        {
          "id": "chapter-5-p79",
          "type": "paragraph",
          "text": "The driver didn’t speak. Just a silent nod, and the car moved, gliding through Delhi’s veins toward some unknown heart."
        },
        {
          "id": "chapter-5-p80",
          "type": "paragraph",
          "text": "Vikram leaned back, exhausted but content, watching the lights blur past. Samar beside him hummed softly — a tune Vikram’s father once played on the old lab radio."
        },
        {
          "id": "chapter-5-p81",
          "type": "paragraph",
          "text": "Two men — tired, proud, oblivious — carried the warmth of discovery in their veins - Took a Nap without knowing their eyes would open next to see oblivion itself."
        },
        {
          "id": "chapter-5-p82",
          "type": "paragraph",
          "text": "Neither knew that within the hour, the world they had built — equations, pride, and purpose — would collapse into Chaos."
        },
        {
          "id": "chapter-5-p83",
          "type": "paragraph",
          "text": "Darkness hummed softly around him — not empty, but breathing. Vikram floated inside it, weightless, the faint vibration of an engine beneath him. He could not tell if it was a car, or a cradle."
        },
        {
          "id": "chapter-5-p84",
          "type": "paragraph",
          "text": "Then — a voice. Small. Clear. Childish.\n“Dad, I did it.”"
        },
        {
          "id": "chapter-5-p85",
          "type": "paragraph",
          "text": "The air rippled. Light spilled in thin golden threads. He saw himself — years younger — standing in a small school corridor, holding a paper model of a solar system made from thermocol and thread. The planets wobbled, the glue hadn’t dried. Arvind Sen Gupta knelt beside him, the faintest smile touching his face.\n“You did, Vikram. You always will.”"
        },
        {
          "id": "chapter-5-p86",
          "type": "paragraph",
          "text": "The scene bled into another — a boy, sleepless, watching his father’s shadow move against lab glass at 2 a.m. The rhythmic click of chalk, the quiet murmur of Sanskrit equations. The boy pressed his palm to the cold glass, whispering, “One day you’ll look at me the way you look at that board.”"
        },
        {
          "id": "chapter-5-p87",
          "type": "paragraph",
          "text": "Flash — college lab. He’s older now, laughing with Samar over a crackling fuse, eyes burning with curiosity. His first invention fails, explodes, fills the air with smoke. He laughs harder, smoke in his lungs, joy in his eyes. The beginning of Ashtak. The birth of purpose."
        },
        {
          "id": "chapter-5-p88",
          "type": "paragraph",
          "text": "The dream flickers — his father’s funeral pyre. Ash and wind. Arav’s trembling hand in his own. No words. Just that hollow, echoing pride — the kind that comes too late to matter."
        },
        {
          "id": "chapter-5-p89",
          "type": "paragraph",
          "text": "Then the boy’s voice returns — not from memory, but from inside the dream itself, clearer now:\n“Dad… I did it.”"
        },
        {
          "id": "chapter-5-p90",
          "type": "paragraph",
          "text": "He turns — but it isn’t Arvind. It’s himself. A child version of him, smiling, holding the mayfly in his palm. Tiny wings quiver. Alive.\n“See? It’s living longer, Dad.”"
        },
        {
          "id": "chapter-5-p91",
          "type": "paragraph",
          "text": "Tears fall — or maybe chloroform condensate from the car’s air. The boy’s smile fractures into static. The car’s hum becomes the pulse of his heartbeat."
        },
        {
          "id": "chapter-5-p92",
          "type": "paragraph",
          "text": "For a fleeting second, before sleep deepens into the kind of stillness from which there is no waking, Vikram smiles back.\n“You did it, son,” he whispers to no one."
        },
        {
          "id": "chapter-5-p93",
          "type": "paragraph",
          "text": "The mayfly inside the vial glows faintly, its wings brushing against glass — like time trying to touch its own reflection."
        },
        {
          "id": "chapter-5-p94",
          "type": "paragraph",
          "text": "The sea at Bandstand gleamed like molten glass under a bruised moon. Waves came and went with the rhythm of breathing gods."
        },
        {
          "id": "chapter-5-p95",
          "type": "paragraph",
          "text": "I stood by the railings — an old man in a saffron shawl, hair swept by salt wind. To most, I was just another drifting sage. To myself, I was time remembering its own dream."
        },
        {
          "id": "chapter-5-p96",
          "type": "paragraph",
          "text": "The Ganga was far now, but rivers remember each other. From the holy currents of Banaras to this endless sea — water flows, carrying whispers. And tonight, all waters whispered one name: Arvind Sen Gupta."
        },
        {
          "id": "chapter-5-p97",
          "type": "paragraph",
          "text": "His sons had unlatched the doors he once sealed. The wheel of kaal was turning again."
        },
        {
          "id": "chapter-5-p98",
          "type": "paragraph",
          "text": "Below, the city pulsed — sirens, laughter, engines — life unknowing of its undoing. But my eyes were elsewhere. Across the map — in Delhi, in Mumbai, in Nashik — threads of the same storm began to tighten."
        },
        {
          "id": "chapter-5-p99",
          "type": "paragraph",
          "text": "In Delhi… A black car drifted through the night like a hearse made of velvet. Inside it, two men slept — or thought they did. The air smelled of flowers and anesthesia. Vikram clutched a small glass vial, a mayfly fluttering inside — alive, defying its own design. Samar’s head rested back, his breath steady, innocent of what followed."
        },
        {
          "id": "chapter-5-p100",
          "type": "paragraph",
          "text": "The driver glanced once in the mirror, pressed a switch. A hiss sighed through the vents. The air thickened, sweet and silent."
        },
        {
          "id": "chapter-5-p101",
          "type": "quote",
          "text": "“Sleep,” I whispered to them, though they could not hear me. “The makers of stillness should taste their own.”"
        },
        {
          "id": "chapter-5-p102",
          "type": "paragraph",
          "text": "The car turned off the main road, sliding into the unseen lanes where Delhi swallows secrets whole. Above them, the moon flickered behind a passing cloud — as if ashamed to watch."
        },
        {
          "id": "chapter-5-p103",
          "type": "paragraph",
          "text": "While few hours ago, in Mumbai, the city lights blinked like restless eyes. Each member of Ashtak — the five who dared rewrite mortality, still working in the lab — were on their way home. A sudden lurch of fate met them at every corner: a skidding truck, a bike swerving, a shattering windshield, a scream lost in traffic."
        },
        {
          "id": "chapter-5-p104",
          "type": "paragraph",
          "text": "Ambulances arrived — too quickly, too cleanly. Each bore a strange blue emblem: Suryaketu Foundation. Neighbors whispered prayers as the bodies were carried away. But none of those ambulances reached a hospital. They drove into silence."
        },
        {
          "id": "chapter-5-p105",
          "type": "paragraph",
          "text": "And far away, in a modest kitchen in Mumbai, Meera was humming softly, chopping coriander for dinner. She looked at the clock, thinking of Vikram — now in Delhi — and smiled. Her phone rang."
        },
        {
          "id": "chapter-5-p106",
          "type": "quote",
          "text": "“Arav? Finally. I was just thinking of you.”\n“I’ll be home tomorrow,” he said over the crackle of train noise.\n“Good,” she replied. “Your brother won’t be here — he’s gone to Delhi, some big discovery. He sounded... happy, Arav. Happier than I’ve heard him in years.”\n“What kind of discovery?” he asked.\n“Something about decay... and life—”"
        },
        {
          "id": "chapter-5-p107",
          "type": "paragraph",
          "text": "Her words splintered into static. The line shuddered. In the background, Arav heard screams — a woman’s voice, shouts, glass breaking. And then — silence."
        },
        {
          "id": "chapter-5-p108",
          "type": "paragraph",
          "text": "Hours earlier — on that train — the dusk had slipped into purple. The carriages glowed with the faint orange of dying light. Arav leaned by the window, watching fields blur by. He was exhausted — from temples, from questions, from truths half-revealed at Kashi Vishwanath. He had spoken to a sage there — a silent man with river eyes. Perhaps he still heard that voice in the rhythm of the wheels: “Waqt kya hai? Ek thread. It binds the alive, the dead, and all that breathes between.”"
        },
        {
          "id": "chapter-5-p109",
          "type": "paragraph",
          "text": "Then came the scream. Metal screeched. Boots thundered down the aisle. Bandits — searching, calling a name. He never learned whose. A shadow gripped him from behind — not with anger, but urgency — and pulled him out of the door. The wind tore his cry away as they plunged into darkness. And below waited the Godavari, patient and cold."
        },
        {
          "id": "chapter-5-p110",
          "type": "paragraph",
          "text": "He woke coughing, drenched, gasping mud and sky. The stars above were ancient and indifferent. He staggered to the bank, trembling, saw a man smoking under a tree."
        },
        {
          "id": "chapter-5-p111",
          "type": "dialogue",
          "text": "“Bhai, phone milega?”\nThe man nodded, handed him one. Arav dialed.\n“Hello?” — Meera’s voice, soft, alive.\n“Meera—it’s me—”\n“Arav! Thank God—listen—”"
        },
        {
          "id": "chapter-5-p112",
          "type": "paragraph",
          "text": "The crash came again. This time closer, sharper — a window breaking, voices shouting, Meera’s breath cut short. “I’ll—call—back—try Vikram—”\nThe line died."
        },
        {
          "id": "chapter-5-p113",
          "type": "paragraph",
          "text": "The phone slipped from his wet hands into the silt. He stood alone by the river, the moon trembling on the water like an old scar."
        },
        {
          "id": "chapter-5-p114",
          "type": "paragraph",
          "text": "I watched from the far bank — unseen, unblinking. “The boy still doesn’t understand,” I murmured. “Time isn’t chasing him. It’s choosing him.”"
        },
        {
          "id": "chapter-5-p115",
          "type": "paragraph",
          "text": "Meanwhile, far from rivers and prayers, the calls began. Keshav’s voice crackled through a secure line:\n“We’ve found the constant. The prototype works. The idea of planting vikram instead of Arvind worked. Start preparing logistics for expansion — tomorrow, we announce Project Amrit.”"
        },
        {
          "id": "chapter-5-p116",
          "type": "paragraph",
          "text": "A pause. A colder voice replied — Mr. Y, calm as an empty chapel.\n“No announcements, Keshav. Not yet. You forget what this could do to the balance.”\n“The government—”\n“Governments are puppets. We hold the strings.”"
        },
        {
          "id": "chapter-5-p117",
          "type": "paragraph",
          "text": "A click. Another line opened. Mr. Y to Z:\n“The Ashtak is to be contained. Quietly. Their families secured. Delhi facility—ready?”\n“Always ready,” growled Z, his voice scarred like gravel. “Just give me blood to paint with.”\n“Minimal noise, Colonel.”\n“Noise is my language.”"
        },
        {
          "id": "chapter-5-p118",
          "type": "paragraph",
          "text": "And somewhere in the distance, a helicopter’s blades began to turn."
        },
        {
          "id": "chapter-5-p119",
          "type": "paragraph",
          "text": "From the sea wall at Bandstand, I watched the world fold into its next chapter. The city lights looked like funeral lamps drifting across black water. Somewhere in Delhi, two men slept in a car that had no destination. In Mumbai, seven scientists vanished into their own equations. And by the river, a boy stood alone, soaked in fate."
        },
        {
          "id": "chapter-5-p120",
          "type": "paragraph",
          "text": "I lifted my eyes to the moon. It gleamed like the pupil of time itself — watching, remembering."
        },
        {
          "id": "chapter-5-p121",
          "type": "quote",
          "text": "“The hour ripens,” I whispered. “The fire that was lit in Banaras now burns through cities.”"
        },
        {
          "id": "chapter-5-p122",
          "type": "paragraph",
          "text": "The waves broke gently against the rocks, and for a moment — just one — the sea smelled faintly of sandalwood and ghee."
        },
        {
          "id": "chapter-5-p123",
          "type": "paragraph",
          "text": "Night lingered heavy over Trimbakeshwar. The lamps along the ghats flickered like tired eyes, their reflections trembling in the black water."
        },
        {
          "id": "chapter-5-p124",
          "type": "paragraph",
          "text": "Arav sat beside the stone steps, skin bruised, mind blank. The Shiv Purana lay open on his lap — its pages warped by river water. Something had slipped loose when he opened it: a torn parchment, yellowed, ancient, marked with a spiral sigil he didn’t recognize."
        },
        {
          "id": "chapter-5-p125",
          "type": "paragraph",
          "text": "He turned it over in the light of a nearby diya. The script looked half like Sanskrit, half like something older than words."
        },
        {
          "id": "chapter-5-p126",
          "type": "quote",
          "text": "“You shouldn’t open that here,” said a woman’s voice."
        },
        {
          "id": "chapter-5-p127",
          "type": "paragraph",
          "text": "He looked up. A figure stood near the steps — practical boots, khaki shirt, a canvas satchel marked ASI – Deccan Survey. Her presence was sharp, deliberate."
        },
        {
          "id": "chapter-5-p128",
          "type": "quote",
          "text": "“It’s my father’s,” Arav said quietly."
        },
        {
          "id": "chapter-5-p129",
          "type": "dialogue",
          "text": "“I know,” she replied, eyes fixed on the parchment. “You’re Arav Sen Gupta. I’ve been looking for you.”"
        },
        {
          "id": "chapter-5-p130",
          "type": "paragraph",
          "text": "She didn’t wait for questions. She reached down, helped him to his feet. “Come. You shouldn’t stay here.”"
        },
        {
          "id": "chapter-5-p131",
          "type": "paragraph",
          "text": "He followed her through narrow lanes lit by temple oil lamps. At the end of the road, a jeep waited — dust-coated, engine humming. She gestured for him to sit."
        },
        {
          "id": "chapter-5-p132",
          "type": "paragraph",
          "text": "Inside, the dashboard glowed faint blue. The air smelled of old paper and diesel. She placed the parchment on her lap beside a leather-bound notebook, centuries old, etched with the same nine-petaled sigil."
        },
        {
          "id": "chapter-5-p133",
          "type": "quote",
          "text": "“This mark,” she said, tracing the spiral with her finger, “comes from the northern glaciers — from what the scriptures called Himavanta, the realm between men and gods.”"
        },
        {
          "id": "chapter-5-p134",
          "type": "paragraph",
          "text": "Arav watched, silent."
        },
        {
          "id": "chapter-5-p135",
          "type": "dialogue",
          "text": "“Your father was its keeper,” she continued. “The keeper of the Book of Matter. It went missing after his death. And the Book of Time…” she hesitated, “…its keeper is already dead.”"
        },
        {
          "id": "chapter-5-p136",
          "type": "paragraph",
          "text": "The jeep rolled past the temple gates, headlights scattering over the river."
        },
        {
          "id": "chapter-5-p137",
          "type": "quote",
          "text": "“Nine books,” she said softly, almost to herself. “Nine fragments of forbidden science — scattered through ages, each holding what the world wasn’t meant to finish.”"
        },
        {
          "id": "chapter-5-p138",
          "type": "paragraph",
          "text": "Arav looked down at the parchment again, the sigil catching the glow of the dashboard. “Why are you telling me this?”"
        },
        {
          "id": "chapter-5-p139",
          "type": "quote",
          "text": "“Because,” she said, eyes on the road, “you’re holding the missing piece your father died protecting.”"
        },
        {
          "id": "chapter-5-p140",
          "type": "paragraph",
          "text": "The car turned into darkness. Somewhere far away, thunder rolled like metal against stone."
        },
        {
          "id": "chapter-5-p141",
          "type": "paragraph",
          "text": "Delhi outskirts. A black helicopter descends near an underground complex. Wind whips through floodlights. Keshav and Mr. Y wait below, their faces cold with victory."
        },
        {
          "id": "chapter-5-p142",
          "type": "paragraph",
          "text": "The door opens. Colonel Rudra (Z) steps out — his half-scarred face gleaming under the harsh white glare. He surveys the row of unconscious Ashtak scientists and the families bound under armed guard."
        },
        {
          "id": "chapter-5-p143",
          "type": "paragraph",
          "text": "He smiles. “You caught the dreamers,” he says. “Now let’s see what remains when the dream is stripped away.”"
        },
        {
          "id": "chapter-5-p144",
          "type": "paragraph",
          "text": "The steel doors close. Lights dim."
        },
        {
          "id": "chapter-5-p145",
          "type": "dialogue",
          "text": "“And so, under one sky, two wheels turn — one of knowledge, one of hunger. The river keeps its silence. The night remembers everything.”"
        }
      ]
    },
    {
      "id": "chapter-6",
      "number": "Chapter 6",
      "title": "The Dance of Death",
      "pageStart": 133,
      "pageEnd": 156,
      "summary": "In an underground facility beneath Delhi, Colonel Rudra subjects the Ashtak team to horrific torture with Vish 3.0, demanding they synthesize the Amrit cure.",
      "paragraphs": [
        {
          "id": "chapter-6-p1",
          "type": "paragraph",
          "text": "Night hung over the highway like a sentence not yet finished. The car cut through it — two beams and a hum, wheels whispering against old tar. Inside, the world was reduced to the pale blue of the dashboard and the tired faces it lit."
        },
        {
          "id": "chapter-6-p2",
          "type": "paragraph",
          "text": "Arav sat by the window, damp hair clinging to his forehead, staring at the torn page resting on his knee. The ink shimmered faintly under the passing streetlights — ancient, deliberate, alive."
        },
        {
          "id": "chapter-6-p3",
          "type": "paragraph",
          "text": "Maya kept both hands on the wheel, her eyes scanning the dark ribbon of road that stretched from Nashik to Mumbai. The smell of rain lingered between them."
        },
        {
          "id": "chapter-6-p4",
          "type": "quote",
          "text": "“Don’t open it again,” she said quietly. “It’s not the book that’s dangerous. It’s the questions that follow it.”"
        },
        {
          "id": "chapter-6-p5",
          "type": "paragraph",
          "text": "Arav looked up, voice roughened by silence. “You said that mark means something?”"
        },
        {
          "id": "chapter-6-p6",
          "type": "paragraph",
          "text": "Maya exhaled. “It’s the sigil of the Book of Matter. One of the Nine. Each book holds a science that was never meant to be written — the laws behind life itself. Your father guarded that one.”"
        },
        {
          "id": "chapter-6-p7",
          "type": "dialogue",
          "text": "“My father was a physicist, not a myth.”"
        },
        {
          "id": "chapter-6-p8",
          "type": "paragraph",
          "text": "She smiled faintly. “Every myth began as a formula someone was too afraid to explain.”"
        },
        {
          "id": "chapter-6-p9",
          "type": "paragraph",
          "text": "The wipers groaned once, sweeping dust and drizzle from the glass. Outside, the mountains dissolved into silhouettes. Somewhere in the distance, lightning flickered — soundless, like memory."
        },
        {
          "id": "chapter-6-p10",
          "type": "paragraph",
          "text": "Arav touched the page again. “You think he died for this?”"
        },
        {
          "id": "chapter-6-p11",
          "type": "paragraph",
          "text": "Maya hesitated. “No. He died because of this.”"
        },
        {
          "id": "chapter-6-p12",
          "type": "paragraph",
          "text": "The car moved faster now, the hum turning to a low tremor. A sign flashed past — Mumbai, 112 km."
        },
        {
          "id": "chapter-6-p13",
          "type": "paragraph",
          "text": "Between the rhythm of tires and thunder, Markandeya’s voice — faint as the wind — seemed to move through the night:\n“Every road that leads to truth was once paved with denial. And tonight, the child walks the same path his father feared to finish.”"
        },
        {
          "id": "chapter-6-p14",
          "type": "paragraph",
          "text": "The headlights swept across a field of wet grass. A single owl lifted from a fencepost, wings wide, vanishing into darkness. The road stretched on — toward a city that had already started to dream of death."
        },
        {
          "id": "chapter-6-p15",
          "type": "paragraph",
          "text": "Beneath Delhi, time smelled of rust and blood. Pipes hissed like breathing things. A thousand feet above, the city dreamed of rain; down here, the air never changed."
        },
        {
          "id": "chapter-6-p16",
          "type": "paragraph",
          "text": "Mr X stood in the half-light, coat draped across his shoulders, the stolen book open on a steel table. Its pages looked alive, thin as skin, text crawling in a language that refused to stay still."
        },
        {
          "id": "chapter-6-p17",
          "type": "paragraph",
          "text": "Across from him, Mr Y leaned against a pillar, cigar burning slow, the smoke curling in lazy serpents around his face."
        },
        {
          "id": "chapter-6-p18",
          "type": "quote",
          "text": "“So,” Y said, voice slick with amusement. “This is what the good doctor died for?”"
        },
        {
          "id": "chapter-6-p19",
          "type": "paragraph",
          "text": "X didn’t look up. “No, he died for what he couldn’t destroy.” He turned a page — ink bleeding into patterns that almost formed faces. “Arvind called it The Book of Matter. I call it—”"
        },
        {
          "id": "chapter-6-p20",
          "type": "paragraph",
          "text": "Y grinned, cutting in, “—Ten Thousand Ways to Kill Someone.” He flicked ash onto the floor. “Catchy. Marketable. You should trademark it.”"
        },
        {
          "id": "chapter-6-p21",
          "type": "paragraph",
          "text": "Somewhere in the dark, chains scraped against concrete. A moan answered — human, weak, collective."
        },
        {
          "id": "chapter-6-p22",
          "type": "paragraph",
          "text": "Y’s grin widened. “Wake them.”"
        },
        {
          "id": "chapter-6-p23",
          "type": "paragraph",
          "text": "His men obeyed, yanking levers. Floodlights roared to life."
        },
        {
          "id": "chapter-6-p24",
          "type": "paragraph",
          "text": "And there they were — the eight members of Ashtak, slumped in chairs, wrists bound in iron. IV tubes trailed from their arms like pale worms. Their eyes blinked open one by one, confusion dissolving into terror as the light found them."
        },
        {
          "id": "chapter-6-p25",
          "type": "dialogue",
          "text": "“Welcome back, pioneers,” Y drawled. “Delhi’s finest are dying to see your work.” He strolled past them, the cigar ember sketching red arcs in the air. “Dr Vikram Sen’s team — the dreamers of time. Your genius has bought you a one-way ticket to the afterlife of science.”"
        },
        {
          "id": "chapter-6-p26",
          "type": "paragraph",
          "text": "Mr X closed the book with a sound like bone snapping. “Enough theatrics, Y. We wait.”"
        },
        {
          "id": "chapter-6-p27",
          "type": "paragraph",
          "text": "The words had barely left his mouth when the ground began to tremble — a deep rotary hum, like thunder caught inside metal. Dust fell from the ceiling; floodlights flickered."
        },
        {
          "id": "chapter-6-p28",
          "type": "paragraph",
          "text": "Y tilted his head, smirking. “Speak of the devil…”"
        },
        {
          "id": "chapter-6-p29",
          "type": "paragraph",
          "text": "From the open shaft above, a black chopper descended — slow, deliberate, like a beast lowering its head to feed. Dust stormed through the chamber, coating faces in grey. The bound scientists coughed, blinked — one whispered a prayer. The rotor blades stopped."
        },
        {
          "id": "chapter-6-p30",
          "type": "paragraph",
          "text": "And silence hit — so complete it hurt. Then he stepped out."
        },
        {
          "id": "chapter-6-p31",
          "type": "paragraph",
          "text": "Colonel Rudra. They called him Z. Once the finest soldier of the unit. Now the nightmare that even war refused to claim."
        },
        {
          "id": "chapter-6-p32",
          "type": "paragraph",
          "text": "His boots struck the concrete — heavy, rhythmic, like drums of an ancient ritual. Half his face gleamed under the floodlight — the other half, carved by fire, twisted into something that looked more like a snarl than a scar. His uniform was unmarked, his eyes were not. They burned with the kind of hunger that made gods look away."
        },
        {
          "id": "chapter-6-p33",
          "type": "paragraph",
          "text": "The chained men froze. Even Mr Y, with his perpetual smirk, straightened slightly. Mr X simply bowed his head."
        },
        {
          "id": "chapter-6-p34",
          "type": "paragraph",
          "text": "Rudra spoke — low, guttural, carrying the calm of a coming storm. “Open the restraints.”"
        },
        {
          "id": "chapter-6-p35",
          "type": "paragraph",
          "text": "No one moved."
        },
        {
          "id": "chapter-6-p36",
          "type": "paragraph",
          "text": "He smiled — a slow, cracked movement, like stone breaking. “I said… open them.”"
        },
        {
          "id": "chapter-6-p37",
          "type": "paragraph",
          "text": "A guard hesitated; Rudra’s pistol barked once. The man fell, smoke curling from his skull. The rest hurried."
        },
        {
          "id": "chapter-6-p38",
          "type": "paragraph",
          "text": "Z walked between the captives — the smell of metal, chloroform, and fear rising around him. He stopped before Vikram, who hung limp in his chains, half-conscious."
        },
        {
          "id": "chapter-6-p39",
          "type": "paragraph",
          "text": "The Colonel leaned close, whispering almost tenderly:\n“Your father played with time. You’ll learn what time does when it plays back.”"
        },
        {
          "id": "chapter-6-p40",
          "type": "paragraph",
          "text": "He straightened, dropped his gloves to the floor, and spread his arms — a priest before his altar. “Gentlemen,” he said, voice echoing through the chamber. “Let us begin the Tandav.”"
        },
        {
          "id": "chapter-6-p41",
          "type": "paragraph",
          "text": "The floodlights flared blood-red. Somewhere above, the city shivered without knowing why."
        },
        {
          "id": "chapter-6-p42",
          "type": "paragraph",
          "text": "And from the shadows, Markandeya’s voice drifted — timeless, watching:\n“Below the earth, man calls his violence by sacred names. And the dance of death begins again.”"
        },
        {
          "id": "chapter-6-p43",
          "type": "paragraph",
          "text": "The Colonel laughed once — sharp, ecstatic — and the first scream rose to meet him."
        },
        {
          "id": "chapter-6-p44",
          "type": "paragraph",
          "text": "The sound rose, tore the air, and for a heartbeat even the gods recoiled. Markandeya’s gaze faltered; what he had witnessed below the earth was no longer vision but violation. The seer’s eyelids closed — not in mercy, but in exhaustion — as if to shut out what men had made of creation."
        },
        {
          "id": "chapter-6-p45",
          "type": "paragraph",
          "text": "And when his eyes sealed, another pair opened. Flesh, bound and trembling, blinked against the same light the god refused to bear. Thus the telling passed from heaven to the handcuffed — from the witness of eternity to the one condemned to live it."
        },
        {
          "id": "chapter-6-p46",
          "type": "paragraph",
          "text": "I sat with my hands chained, the steel biting into the inside of my wrist, but the pain was a distant punctuation — there was a louder, raw awareness in my chest that felt like someone had taken a file to my insides and left the wound open to watch how I bled on the inside. Light slammed into the room and I blinked against it. For a second everything was geometry: the rows of chairs, the lamps, the glassy, polite faces floating in a drugged stupor."
        },
        {
          "id": "chapter-6-p47",
          "type": "paragraph",
          "text": "Then the sound cut the air: one gunshot, bright and small and final. It made the saliva in my mouth taste like pennies. Some of the men who’d been sunk deep in sedation jerked. Eyes opened like doors someone had thrown wild; others remained lost, eyelids slack. Sterile tile, antiseptic, everything that once promised order now smelled of oil and a clean that pretended there could be no stain."
        },
        {
          "id": "chapter-6-p48",
          "type": "paragraph",
          "text": "He came down the steps like a storm. Rudra — not a man, not a memory, but a force. He carried two pistols that glittered like trophies. I saw letters: one side of a pistol read COLONEL, the other side read RUDRA; the other pistol read ROGUE. The metal winked at me, obscene and ceremonial. He removed his gloves slowly, each movement measured. He had a ruby in his ring that burned red as if it had swallowed some small star."
        },
        {
          "id": "chapter-6-p49",
          "type": "quote",
          "text": "“Hello, scientists and their lab rats,” he said, and the voice was neither warm nor cruel — it was the exact tone someone uses to address an animal whose species they do not see as equal."
        },
        {
          "id": "chapter-6-p50",
          "type": "dialogue",
          "text": "“How is everyone doing? I hope good, because this might be the last time feeling it.”"
        },
        {
          "id": "chapter-6-p51",
          "type": "paragraph",
          "text": "He had that small, practiced politeness that is worse than hatred because it contains intent. The room had gone completely small around that voice. You could hear your own breath, the tick of fluorescent lights, the soft, mechanical clicking of a camera filming the ritual up on a gantry like it was in the business of archiving cruelty."
        },
        {
          "id": "chapter-6-p52",
          "type": "paragraph",
          "text": "They brought the mayfly forward in its glass. I remember thinking — with the animal clarity of shock — of my father’s handwriting, of equations, of the ridiculousness of hubris. I watched the insect’s wings beat like a frightened pulse under the lamp. There was a moment — a thin human moment — when I almost believed Rudra might do nothing, might merely gloat and leave."
        },
        {
          "id": "chapter-6-p53",
          "type": "paragraph",
          "text": "He did not. He smiled as if pleased by a toy that had defied him. “It’s living longer,” he said. “Guard, bring water.”"
        },
        {
          "id": "chapter-6-p54",
          "type": "paragraph",
          "text": "The lid opened. Someone tipped water into the jar like it was a ceremonial libation. Rudra jabbed a cigarette ember into his lips and then, as if in a private demonstration, he shot at the junction of the live wires above a bench. A guard hesitated; a sound like a twig snapped. Rudra fired again at the man who hesitated. The man went down without fanfare. Another guard ran and brought wires with shaking hands. Rudra shoved them into the jar."
        },
        {
          "id": "chapter-6-p55",
          "type": "paragraph",
          "text": "There is a sound that is not a sound — a kind of stopping-of-possibility. The mayfly twitched once and then did not move. Everything else in the room became that absence. If you have ever stood at the edge of a well and dropped a stone, you know the blankness that follows: the ring in the water that grows smaller and the silence that consumes it. The mayfly’s motion ended and the silence in that sealed jar felt like a verdict."
        },
        {
          "id": "chapter-6-p56",
          "type": "paragraph",
          "text": "Rudra turned slowly to the rows of us. “What was the conclusion of the experiment, scientist?” he asked, patient, mocking as an examiner reading out a poor result. He enumerated with a kind of dreadful, trivial clarity:\n1. The mayfly is not immortal.\n2. The mayfly has no miraculous regenerative gift.\n3. Three guards are dead; one spoke in his last gasps, two hesitated.\n4. You can all die in an instant."
        },
        {
          "id": "chapter-6-p57",
          "type": "paragraph",
          "text": "He laughed at the last one as if it were a joke. Keshav and Rajeshvar had promised him entertainment; he seemed to have taken them at their word. The way he said their names — Keshav, Rajeshvar — was almost tender. “Do you know whom I met today?” he asked, as if he were filling a glass. When they replied with fear-clipped reverence, he accepted it and said a new name: Omega."
        },
        {
          "id": "chapter-6-p58",
          "type": "paragraph",
          "text": "Then he showed us the syringe. “It’s special,” he said. “Named VISH 3.0.”"
        },
        {
          "id": "chapter-6-p59",
          "type": "paragraph",
          "text": "When the guards lifted the heavy syringe into the lamp’s glare, I felt something like an animal’s recognition of a trap: we had crossed into a space where science was no longer the curiosity of healing but the instrument of exact harm. Rudra walked the line between us, watching faces, reading reactions, delighting in the small changes that came before panic. He singled me out with his gaze and said, soft as a benediction, “Vikram, you are to lead the team.”"
        },
        {
          "id": "chapter-6-p60",
          "type": "paragraph",
          "text": "The announcement hit like a physical blow. The world narrowed to the shudder in my hands, the flaring of lights, the synchronized breaths of people beside me."
        },
        {
          "id": "chapter-6-p61",
          "type": "paragraph",
          "text": "Rudra’s laughter floated and the room folded into the steady, clinical machinery of preparation. They began to take names, to assign tasks. The dance had started; it would not stop because the men who had started it had no use for stopping. They were experimenting on living calendars, and time, for them, was a resource to be mined."
        },
        {
          "id": "chapter-6-p62",
          "type": "dialogue",
          "text": "“Vikram. Vikram. VIKRAM.”"
        },
        {
          "id": "chapter-6-p63",
          "type": "paragraph",
          "text": "Rudra said it slow, like he was tasting it, like he’d been waiting to put that name in his mouth and marinate it. He held me with those eyes — the ones that loved the sound of panic — and then looked past me to the room, to the families, to the rows of faces that had trusted us with their children and that we had promised to protect."
        },
        {
          "id": "chapter-6-p64",
          "type": "dialogue",
          "text": "“Yes,” I tried to answer, but my voice was a stray thing in a room that had learned to eat words."
        },
        {
          "id": "chapter-6-p65",
          "type": "paragraph",
          "text": "He clicked his tongue. “This can kill you three times in a single death.” The way he said it made the sentence feel like a promise and a lesson. “Your wife,” he said, leaning so close that his breath smelled of tobacco and cold iron, “will be calling your name while you are helpless.”"
        },
        {
          "id": "chapter-6-p66",
          "type": "paragraph",
          "text": "My throat closed. I watched his mouth move, trying to parse the syllables into something rational. That was the thing about Rudra — he did not merely brutalize the body; he rearranged reality so your logic could not find its hairline."
        },
        {
          "id": "chapter-6-p67",
          "type": "paragraph",
          "text": "He turned and looked at the rows of the ‘lab rats’ — the families — and his face went small with a deliberate fury. In the corner, Leena’s grandmother lay still, eyelids slack from the earlier sedation. Rudra’s hands trembled like hands that had practised cruelty until it felt like devotion. He grabbed the cigarette from his mouth and, in a gesture meant to shock, ground the ember into his own forearm as if to show he welcomed pain in the same way a priest embraces ritual."
        },
        {
          "id": "chapter-6-p68",
          "type": "paragraph",
          "text": "Then he threw the still-glowing butt; it scorched the floor and flicked toward me like a splintered omen. For one useless, foolish beat, I wished someone would stop him."
        },
        {
          "id": "chapter-6-p69",
          "type": "paragraph",
          "text": "He picked up the syringe labeled VISH-3.0 with the theatricality of a man unveiling a new toy. The room drew a breath and forgot how to exhale."
        },
        {
          "id": "chapter-6-p70",
          "type": "quote",
          "text": "“Hello, grandmother,” Rudra said, soft and mock-polite. Nothing in his voice had kindness in it. He tapped the needle to the old woman’s skin. “Wake up, please.”"
        },
        {
          "id": "chapter-6-p71",
          "type": "paragraph",
          "text": "She made a small sound — a breath — and for a second I thought we had been given space, some miracle, some reprieve. Then he fired a single round into the floor near her feet — not to kill, but to make the world scream for her. The sound ripped across the room. She started, eyes opening wide in that animal, momentary way people do when they are forced from sleep."
        },
        {
          "id": "chapter-6-p72",
          "type": "paragraph",
          "text": "Her scream was a thin, sharp thing that cut us all into memory. It made me hurt in places I didn’t know I had. Rudra smiled as if that cry had been composed for his pleasure. Then he pressed the syringe to the tender spot at the base of her neck and pushed."
        },
        {
          "id": "chapter-6-p73",
          "type": "paragraph",
          "text": "She convulsed — an immediate, violent seizure that made clothing flail and the stretcher rattle. The monitors tumbled; the readouts began to wobble like a heart learning a new, wrong rhythm. Her body betrayed her in public, very fast and very final. There were sounds that cannot be un-heard: the choking, the gurgle, the wet, undeniable end of a life. She stopped. The quiet that followed was raw and total."
        },
        {
          "id": "chapter-6-p74",
          "type": "paragraph",
          "text": "I remember thinking, with the stupid clarity only shock gives, that we had gone beyond punishment and into demonstration. This was theatre designed not to convert or instruct but to punish the very idea of resistance."
        },
        {
          "id": "chapter-6-p75",
          "type": "paragraph",
          "text": "Rudra did not flinch. He wiped something from his shoe with a cloth someone thrust forward — the cloth that smelled of antiseptic and fear. The guard who complied moved like a man whose choices had been amputated. Rudra watched the guard, then laughed, the sound bright with malice."
        },
        {
          "id": "chapter-6-p76",
          "type": "dialogue",
          "text": "“Can you lick it?” he asked the guard, casually cruel. He watched the man’s face, and the man’s face fell in on itself like someone realizing which corner of the world they now occupied."
        },
        {
          "id": "chapter-6-p77",
          "type": "paragraph",
          "text": "The guard did not lick anything. He knelt instead, hands shaking, and mopped at the floor with the cloth as if a child polishing a trophy. Rudra tossed his ring to the guard, a glittering thing that felt like a bribe or a curse. The guard grabbed it with hands that were not steady enough to hold it without dropping."
        },
        {
          "id": "chapter-6-p78",
          "type": "paragraph",
          "text": "Rudra turned back to face us as if we were a classroom. “See how fragile their bodies are,” he said conversationally. “See how easily order can be reversed.” He lifted the syringe again and tapped it like an instrument. “This is VISH-3.0. It increases decay — accelerates the collapse. Thirty times faster. Faster than any natural law. Fast enough to make the proud frantic.”"
        },
        {
          "id": "chapter-6-p79",
          "type": "paragraph",
          "text": "A technician at a bench prepared more syringes — clinical movements, machine-like. He walked down the aisles and handed VISH-3.0 to the guards. One by one, they injected it into the bodies of the families. Some of those people made a sound and then went rigid. Others stared at the ceiling, mouths forming words no one could catch. Some did not stir at all."
        },
        {
          "id": "chapter-6-p80",
          "type": "paragraph",
          "text": "I remember the scent: the chemical sting of the serum mixing with the metallic tang of adrenaline and the clean, hypocritical smell of the room. I remember watching someone’s hand — a small, delicate thing — tremble, then twitch, as if an unseen hand had plucked one string of their being and then let go. There was a wetness on the floor that I will carry forever, and though I will not describe its mechanics, the memory of the sound of that fall is fixed in me like a photograph."
        },
        {
          "id": "chapter-6-p81",
          "type": "paragraph",
          "text": "Rudra spoke to me again, close enough that I felt the warmth of his breath on my cheek. “You, Vikram. Listen. You will lead the team to cure this. You will create AMRIT-02. If you fail, if your serum does not outpace my poison, these people die in stages. If you cooperate, you might keep them alive between injections.” The calculus of his cruelty was simple and monstrous."
        },
        {
          "id": "chapter-6-p82",
          "type": "paragraph",
          "text": "Chains clanked as men unlocked us and forced us to stand. It was a perverse mercy: they wanted the intellect untethered so it could be worked on. My legs wobbled and Samar steadied me with a hand that was iron and prayer."
        },
        {
          "id": "chapter-6-p83",
          "type": "paragraph",
          "text": "I lunged — I cannot tell you why. Perhaps I had the old stupid idea that one man could stop another by force. Samar intercepted me, a flailing weight that grabbed my shoulders and pushed me back. Rudra did not bother to shoot me; he fired a round into the air so close that the concussive noise stung Samar’s ears and flattened the sound of our breath. The message was precise: fight and you do not die quickly; you die publicly."
        },
        {
          "id": "chapter-6-p84",
          "type": "paragraph",
          "text": "Rudra laughed again, bright as a bell. “Seven days,” he said. “Seven days until I return. Every seven days a new test. Live injections, live reactions. Try to hide, try to run — and you will be cut off from any hope. The lab stays open. The city knows nothing. And if any of you try anything, we will make sure your bodies teach the lesson.”"
        },
        {
          "id": "chapter-6-p85",
          "type": "paragraph",
          "text": "He walked toward the nearest exit like a conqueror and the chopper’s blades began to beat above like a heartbeat expanding into a drum. As he left, he tossed me a small, contemptuous grin and handed the guard the ring — a token that smelled like victory. The rope ladder kissed the helicopter and Rudra rose into the night as if ascending from a ritual."
        },
        {
          "id": "chapter-6-p86",
          "type": "paragraph",
          "text": "We were left with the after-sound — the drip, the ragged breathing, the quiet sobbing of those who had not yet been touched. The room smelled permanently altered: not only of chemicals and fear, but of a knowledge transformed into a threat."
        },
        {
          "id": "chapter-6-p87",
          "type": "paragraph",
          "text": "When they finally dragged me out of the chair, my knees shook not from weakness but from the new architecture inside me: a lattice of fear and calculation. I would later write formulas in the dark, try to tell myself that numbers would redeem the silence. But that night was not redeemed. It taught me a different lesson — that science, when divorced from mercy, becomes a ledger for atrocity."
        },
        {
          "id": "chapter-6-p88",
          "type": "paragraph",
          "text": "As Rudra’s chopper shrank into the sky, Samar pressed his forehead against mine and whispered, “Don’t let them make you him.” I had no idea then what he meant by him. I only knew that something had broken open in me that would never mend in the same way."
        }
      ]
    },
    {
      "id": "chapter-7",
      "number": "Chapter 7",
      "title": "The Order of Kali",
      "pageStart": 157,
      "pageEnd": 192,
      "summary": "Vikram tests Amrit-02 on himself to save the captives. Meanwhile, Arav and Maya unlock Arvind's final video log, discovering the Order of Kali before being framed by the media.",
      "paragraphs": [
        {
          "id": "chapter-7-p1",
          "type": "paragraph",
          "text": "The chopper’s thrum dwindled until it became only a vibration in the bones — a memory of sound more than sound itself. Then there was nothing. No command, no movement. Only the sterile hum of the fluorescent lights, and the stink — burnt antiseptic and copper."
        },
        {
          "id": "chapter-7-p2",
          "type": "paragraph",
          "text": "They came back in, wordless, the men in grey uniforms. Their boots echoed like punctuation marks on a sentence already finished. They unlatched the chains from our wrists but not from our lives. The guards dragged our families away, to a chamber beyond the glass wall. You could see the movement — the flailing, the pleading — but no sound reached us. It was as if the air had been edited to keep mercy out."
        },
        {
          "id": "chapter-7-p3",
          "type": "paragraph",
          "text": "When the door sealed, the silence became a weight. It pressed against the eardrums until even breathing felt intrusive."
        },
        {
          "id": "chapter-7-p4",
          "type": "paragraph",
          "text": "Someone whispered, “He’s gone.”"
        },
        {
          "id": "chapter-7-p5",
          "type": "paragraph",
          "text": "I said nothing. Gone was the wrong word. Rudra hadn’t left — he had saturated the room, soaked into its walls, its instruments, our throats."
        },
        {
          "id": "chapter-7-p6",
          "type": "paragraph",
          "text": "Samar moved first, checking pulses, wiping surfaces, doing the motions of science as if they could reassemble dignity from wreckage. “We need samples,” he said. His voice cracked on the word need."
        },
        {
          "id": "chapter-7-p7",
          "type": "paragraph",
          "text": "We divided ourselves by instinct, not courage. Two teams.\nTeam One — Samar’s group — would study the blood, the decay, the death that moved slower now but still moved.\nTeam Two — mine — would go back to the equations, to Arvind’s notes, to the geometry of impossible salvation."
        },
        {
          "id": "chapter-7-p8",
          "type": "paragraph",
          "text": "The words felt hollow. It wasn’t research anymore. It was ritual.\nIt wasn’t science anymore, I thought. It was countdown."
        },
        {
          "id": "chapter-7-p9",
          "type": "paragraph",
          "text": "Through the glass, my wife moved — barely. Meera. Her eyes followed the motion of my hand against the window, then she smiled. It was small, fractured, the kind of smile that understands futility and still offers itself. I couldn’t hear her, but I knew what she mouthed: You’ll do it."
        },
        {
          "id": "chapter-7-p10",
          "type": "paragraph",
          "text": "I nodded like belief was still an option."
        },
        {
          "id": "chapter-7-p11",
          "type": "paragraph",
          "text": "Hours blurred. The screens displayed vitals that spiked and dipped with mechanical precision, indifferent to meaning. Samar knelt beside one of the tables, filling a syringe with blood from a sedated man — one of our own guards, repurposed for study. The liquid shimmered dark, thick, refusing to settle in the tube."
        },
        {
          "id": "chapter-7-p12",
          "type": "paragraph",
          "text": "He labeled it V-01 in neat handwriting that shook. “We’ll fix this,” he said, and for a second I wanted to believe him."
        },
        {
          "id": "chapter-7-p13",
          "type": "paragraph",
          "text": "But his eyes gave him away. They were the same eyes that looked into open graves before the soil fell."
        },
        {
          "id": "chapter-7-p14",
          "type": "paragraph",
          "text": "He moved between the bodies with the tired tenderness of a priest who’s stopped believing in gods but still knows the prayers. Every time the monitor beeped, he flinched — waiting for the flatline that would mark another experiment gone silent."
        },
        {
          "id": "chapter-7-p15",
          "type": "paragraph",
          "text": "The others tried to speak, small talk pretending to be purpose. Someone joked that Rudra’s “seven days” were biblical — creation inverted. Another whispered, “We’re the seventh day — the rest.”"
        },
        {
          "id": "chapter-7-p16",
          "type": "paragraph",
          "text": "No one laughed."
        },
        {
          "id": "chapter-7-p17",
          "type": "paragraph",
          "text": "We set up new tables. We sanitized tools that no longer deserved cleanliness. I logged numbers I would never forget but could not live by."
        },
        {
          "id": "chapter-7-p18",
          "type": "paragraph",
          "text": "On the surveillance wall, our families slept — or pretended to — under the same cold light. Every now and then, a hand twitched, a face winced. The cameras caught everything except warmth."
        },
        {
          "id": "chapter-7-p19",
          "type": "paragraph",
          "text": "The timer Rudra had left behind blinked red at the corner of the room: 6 Days 23 Hours 47 Minutes."
        },
        {
          "id": "chapter-7-p20",
          "type": "paragraph",
          "text": "Samar sat beside me, recording cellular reactions. His voice was a monotone of exhaustion. “Decay pattern slowed,” he murmured. “We might have a window.”"
        },
        {
          "id": "chapter-7-p21",
          "type": "paragraph",
          "text": "I looked up at the screen again. My wife shifted, her fingers curling inward, small spasms under the skin. Her smile was gone now."
        },
        {
          "id": "chapter-7-p22",
          "type": "paragraph",
          "text": "Samar kept talking, his hand trembling as he capped the vial. “We’ll save them,” he said — but he said it like someone practicing a line for a play that would never open."
        },
        {
          "id": "chapter-7-p23",
          "type": "paragraph",
          "text": "The rest of the team nodded, because hope, like oxygen, was a habit you didn’t stop even when it turned toxic."
        },
        {
          "id": "chapter-7-p24",
          "type": "paragraph",
          "text": "I stared at the glass wall until my reflection blurred into theirs, until I couldn’t tell who was caged and who was free."
        },
        {
          "id": "chapter-7-p25",
          "type": "quote",
          "text": "“He’ll return in seven days,” I whispered. “We have six left to learn how to make time stand still.”"
        },
        {
          "id": "chapter-7-p26",
          "type": "paragraph",
          "text": "By the third day, the smell changed. No sterilizer could mask it now. It was sweet, metallic, faintly floral — the scent of decay trying to mimic life. The guards kept the temperature low, pretending it helped. It didn’t. The cold only slowed death enough to make it visible."
        },
        {
          "id": "chapter-7-p27",
          "type": "paragraph",
          "text": "Samar came to my workstation, his face pale, voice dry. “They’re not dying in sequence,” he said."
        },
        {
          "id": "chapter-7-p28",
          "type": "paragraph",
          "text": "I didn’t answer."
        },
        {
          "id": "chapter-7-p29",
          "type": "dialogue",
          "text": "“They’re not decaying like anything we’ve seen before. It’s… intelligent. Like the matter knows it’s ending.”"
        },
        {
          "id": "chapter-7-p30",
          "type": "paragraph",
          "text": "I turned to the screen again. One of the children — Raina — was tracing circles on the fogged glass wall with her finger. She was humming a tune I couldn’t hear. Her mother’s body beside her had begun to liquefy at the edges. A shape half-solid, half-ghost."
        },
        {
          "id": "chapter-7-p31",
          "type": "paragraph",
          "text": "Samar’s hand gripped my shoulder. “You have to look at this,” he said. He brought me to a microscope feed. Cellular structures — shredded, split, reforming and breaking again, like a looped scream."
        },
        {
          "id": "chapter-7-p32",
          "type": "paragraph",
          "text": "Vish 3.0 wasn’t just killing; it was unmaking. It turned matter into a language that couldn’t be read anymore."
        },
        {
          "id": "chapter-7-p33",
          "type": "paragraph",
          "text": "By night, most of us had stopped talking. Only the machines spoke. Someone cried softly into a pillow. Someone else kept muttering that Rudra was God’s mistake."
        },
        {
          "id": "chapter-7-p34",
          "type": "paragraph",
          "text": "We all knew what we had become: mourners conducting a wake inside a laboratory."
        },
        {
          "id": "chapter-7-p35",
          "type": "paragraph",
          "text": "On the fourth morning, Meera’s hand wouldn’t rise to wave anymore. Her fingers — translucent, gelatinous — quivered like something unsure whether it was still part of her. Her smile had gone, replaced by an expression that was almost peace — or exhaustion."
        },
        {
          "id": "chapter-7-p36",
          "type": "paragraph",
          "text": "I wanted to scream, but there was no sound left that could carry meaning across glass."
        },
        {
          "id": "chapter-7-p37",
          "type": "paragraph",
          "text": "I tried equations, theories, anything to fight the creeping helplessness. But the numbers blurred. Every formula began to look like a prayer I didn’t believe in anymore."
        },
        {
          "id": "chapter-7-p38",
          "type": "paragraph",
          "text": "When I finally looked up, Samar had covered the monitor with a black cloth. “Stop watching,” he said. “She wouldn’t want you to see.”"
        },
        {
          "id": "chapter-7-p39",
          "type": "paragraph",
          "text": "But I did. I watched because I was afraid if I looked away, the world would erase her before I could remember her face properly."
        },
        {
          "id": "chapter-7-p40",
          "type": "paragraph",
          "text": "The chamber lights dimmed as if mourning. The glass screen showed reflections now — our faces layered over the dying. In that mirrored overlap, I couldn’t tell who was living and who was already gone."
        },
        {
          "id": "chapter-7-p41",
          "type": "paragraph",
          "text": "Day 4 ended with the same sound as Day 1 — the low hum of machines. But something had shifted. It wasn’t despair anymore. It was defiance, small and trembling."
        },
        {
          "id": "chapter-7-p42",
          "type": "paragraph",
          "text": "I looked at Samar and said, “We stop counting deaths. We start counting seconds. Every second we steal back is life.”"
        },
        {
          "id": "chapter-7-p43",
          "type": "paragraph",
          "text": "He didn’t answer, but he nodded. And I turned back to Baba’s notebook — the one I hadn’t touched in years — and began to read."
        },
        {
          "id": "chapter-7-p44",
          "type": "paragraph",
          "text": "The fifth day didn’t begin — it simply continued."
        },
        {
          "id": "chapter-7-p45",
          "type": "paragraph",
          "text": "Time had lost edges. The clocks still ticked, but they felt like ghosts of sound."
        },
        {
          "id": "chapter-7-p46",
          "type": "paragraph",
          "text": "We had stopped sleeping; stopped pretending we were still scientists. The lab reeked of sweat, iodine, and that metallic rot that lived in the walls. Every table was chaos — pipettes in blood trays, notebooks streaked with fingerprints, cables tangled like veins."
        },
        {
          "id": "chapter-7-p47",
          "type": "paragraph",
          "text": "The screen still flickered with the living-dead on the other side of the glass. No one watched it anymore, yet everyone could feel it pulsing behind their eyes."
        },
        {
          "id": "chapter-7-p48",
          "type": "paragraph",
          "text": "Someone — maybe Samar — whispered, “They’re running out of skin.”"
        },
        {
          "id": "chapter-7-p49",
          "type": "paragraph",
          "text": "I didn’t want to know who “they” were anymore."
        },
        {
          "id": "chapter-7-p50",
          "type": "paragraph",
          "text": "I had buried myself in equations. My father’s handwriting filled my vision. Faded ink, half-torn pages from his old notebooks that I’d carried like a superstition."
        },
        {
          "id": "chapter-7-p51",
          "type": "paragraph",
          "text": "He had written: “Matter remembers. Time only decays what it cannot understand.”"
        },
        {
          "id": "chapter-7-p52",
          "type": "paragraph",
          "text": "Those words became my fever."
        },
        {
          "id": "chapter-7-p53",
          "type": "paragraph",
          "text": "The samples of Vish lay sealed in containment tubes, pale blue turning violet as the toxin degraded. Every twelve hours, we’d pull a sample of blood from one of the infected — what was left of them — and chart the disintegration. The data no longer made sense."
        },
        {
          "id": "chapter-7-p54",
          "type": "paragraph",
          "text": "I slammed my fist on the console, breaking the slide cover. Glass scattered like glitter on the tiles."
        },
        {
          "id": "chapter-7-p55",
          "type": "quote",
          "text": "“We’re missing something fundamental,” I said. “Something stupid. Something we saw every day and forgot how to see.”"
        },
        {
          "id": "chapter-7-p56",
          "type": "paragraph",
          "text": "Samar didn’t respond. He just kept typing. His eyes were red — not from tears, but from chemicals and sleeplessness. He muttered, “Even Vish has a pattern. But we’re not reading it right.”"
        },
        {
          "id": "chapter-7-p57",
          "type": "paragraph",
          "text": "I turned to the walls where equations had overtaken the plaster — numbers, circles, arrows connecting one madness to another. It looked less like math and more like a constellation of fear."
        },
        {
          "id": "chapter-7-p58",
          "type": "paragraph",
          "text": "Then, the power flickered. The hum died for half a breath — the silence made everyone look up. In that void, something clicked in me."
        },
        {
          "id": "chapter-7-p59",
          "type": "paragraph",
          "text": "The lines of Baba’s old formula — the ones he said were “too dangerous to complete” — began to align with the Vish structure. The rhythm of the decay was the inverse of his Longevity Equation."
        },
        {
          "id": "chapter-7-p60",
          "type": "paragraph",
          "text": "For the first time in days, I smiled."
        },
        {
          "id": "chapter-7-p61",
          "type": "paragraph",
          "text": "I tore through the notes like a lunatic priest searching for scripture. The others watched — too tired to stop me."
        },
        {
          "id": "chapter-7-p62",
          "type": "dialogue",
          "text": "“Get me the V-cell sequence from Day 1,” I barked. “And the third-gen serum sample from the test rack!”"
        },
        {
          "id": "chapter-7-p63",
          "type": "paragraph",
          "text": "Samar moved instantly, almost relieved to have an order again. The others followed, more like reflex than belief."
        },
        {
          "id": "chapter-7-p64",
          "type": "paragraph",
          "text": "Blood hit the centrifuge. The whir filled the room — the first sound that felt alive. I scribbled equations across glass panels with a marker — numbers bleeding into symbols that looked more like mantras."
        },
        {
          "id": "chapter-7-p65",
          "type": "dialogue",
          "text": "“If Vish unmade the structure… then Amrit must rewrite it.”"
        },
        {
          "id": "chapter-7-p66",
          "type": "paragraph",
          "text": "Each breath felt heavier, faster. My heartbeat was a drum inside my skull. The formula began to take shape — a synthesis of Baba’s design and my improvisation. A hybrid born of desperation and defiance."
        },
        {
          "id": "chapter-7-p67",
          "type": "paragraph",
          "text": "Samar looked at the readout. “It’s unstable,” he warned.\n“I know,” I said.\n“Even if it works — it’ll work on you first.”\n“I know.”"
        },
        {
          "id": "chapter-7-p68",
          "type": "paragraph",
          "text": "The centrifuge clicked open. The vial glowed faintly gold under the UV. Not blue like Vish — gold, like the pulse of something remembering light."
        },
        {
          "id": "chapter-7-p69",
          "type": "paragraph",
          "text": "Meera’s face flashed on the blackened monitor — frozen, mid-motion. That was enough."
        },
        {
          "id": "chapter-7-p70",
          "type": "paragraph",
          "text": "I filled the syringe. My hands didn’t shake anymore. There was a calm that only comes when every outcome is death, and you pick the one that looks you in the eye."
        },
        {
          "id": "chapter-7-p71",
          "type": "paragraph",
          "text": "Samar shouted, “Vikram, wait— we need to test!”"
        },
        {
          "id": "chapter-7-p72",
          "type": "quote",
          "text": "“We already did,” I said. “Every failure was a test.”"
        },
        {
          "id": "chapter-7-p73",
          "type": "paragraph",
          "text": "He lunged forward, but I’d already plunged the needle into my arm."
        },
        {
          "id": "chapter-7-p74",
          "type": "paragraph",
          "text": "Cold fire spread instantly — a bloom of liquid lightning under my skin. The world pulsed white, then red, then every color collapsing into one sound — a low, monstrous hum that felt like the inside of a star dying."
        },
        {
          "id": "chapter-7-p75",
          "type": "paragraph",
          "text": "My body convulsed. Instruments crashed off tables. Somewhere, alarms began to scream."
        },
        {
          "id": "chapter-7-p76",
          "type": "paragraph",
          "text": "Samar’s voice broke through the roar, distant, terrified. “Vikram! VIKRAM!”"
        },
        {
          "id": "chapter-7-p77",
          "type": "paragraph",
          "text": "I fell to the floor. My skull hit tile, and for a moment I saw Meera — her eyes open, her smile real, her hand reaching toward me through a field of light."
        },
        {
          "id": "chapter-7-p78",
          "type": "paragraph",
          "text": "Then everything folded inward. There was no pain. No thought. Only one realization before darkness took me —\n“Amrit doesn’t save life… it remakes it.”"
        },
        {
          "id": "chapter-7-p79",
          "type": "paragraph",
          "text": "And the room went still. The monitors beeped once, then flatlined."
        },
        {
          "id": "chapter-7-p80",
          "type": "paragraph",
          "text": "The sound Vikram made when he fell wasn’t human. It was the sound of a body surrendering — not to gravity, but to exhaustion so complete it felt like confession."
        },
        {
          "id": "chapter-7-p81",
          "type": "paragraph",
          "text": "The syringe rolled across the floor and stopped at Samar’s boot. The faint glow of golden serum inside it dimmed, as if it had breathed its last."
        },
        {
          "id": "chapter-7-p82",
          "type": "paragraph",
          "text": "For a second, no one moved. The hum of machines had stopped — as though even the circuits were holding their breath."
        },
        {
          "id": "chapter-7-p83",
          "type": "paragraph",
          "text": "Then panic took shape."
        },
        {
          "id": "chapter-7-p84",
          "type": "dialogue",
          "text": "“Vikram!” Samar dropped to the floor, pressing fingers against his throat. There — a pulse. Rapid, erratic. Not gone yet. “He’s alive,” he gasped. “Get the vitals kit!”"
        },
        {
          "id": "chapter-7-p85",
          "type": "paragraph",
          "text": "The others moved like ghosts revived by command. Electrodes clicked onto skin, wires ran across the tiles like black veins. The screen lit up with chaotic readings — heart rate spiking, temperature dropping. Cellular feedbacks impossible to calculate."
        },
        {
          "id": "chapter-7-p86",
          "type": "paragraph",
          "text": "Samar stared at the data, disbelief widening in his face. “This shouldn’t be happening,” he muttered. “No body survives Vish exposure past forty-eight hours — let alone direct injection.”"
        },
        {
          "id": "chapter-7-p87",
          "type": "paragraph",
          "text": "Behind him, someone whispered, “Is he mutating?”"
        },
        {
          "id": "chapter-7-p88",
          "type": "paragraph",
          "text": "Samar didn’t answer."
        },
        {
          "id": "chapter-7-p89",
          "type": "paragraph",
          "text": "Vikram’s skin shimmered faintly under the lab light — not metallic, not decayed, but alive in some new pattern, like cells trying to remember how to exist."
        },
        {
          "id": "chapter-7-p90",
          "type": "paragraph",
          "text": "It was working. Or it was killing him differently."
        },
        {
          "id": "chapter-7-p91",
          "type": "paragraph",
          "text": "Samar stood, voice cracking with a mix of awe and terror. “Log this,” he ordered. “Label it Amrit-02, Test 1. He’s the subject.”"
        },
        {
          "id": "chapter-7-p92",
          "type": "paragraph",
          "text": "He turned toward the bench where Vikram’s notes sprawled like a battlefield. The equations were half-correct, half-mad, but there — the key he’d missed. A stabilization factor written in shorthand from Baba’s formula: “Bind decay to rhythm, not resistance.”"
        },
        {
          "id": "chapter-7-p93",
          "type": "paragraph",
          "text": "He recalculated. Replaced the Vish solvent with serum-grade plasma. A drop of blood hissed as it hit the compound. The glow steadied."
        },
        {
          "id": "chapter-7-p94",
          "type": "quote",
          "text": "“Sterilize,” he said. “Quickly.”"
        },
        {
          "id": "chapter-7-p95",
          "type": "paragraph",
          "text": "The team moved, trembling but efficient — distillation units roaring back to life, filters spinning, precision returning to their chaos. For the first time in days, they had purpose that wasn’t fear."
        },
        {
          "id": "chapter-7-p96",
          "type": "paragraph",
          "text": "Hours blurred into the slow churn of procedure — centrifuge hum, glass tapping, coded logs scribbled."
        },
        {
          "id": "chapter-7-p97",
          "type": "paragraph",
          "text": "By dawn, a single vial stood under the UV lamp, glowing steady gold. Amrit-02 (Sterile Variant)."
        },
        {
          "id": "chapter-7-p98",
          "type": "paragraph",
          "text": "Samar exhaled, shoulders trembling. “He did it,” he whispered. “He actually did it.”"
        },
        {
          "id": "chapter-7-p99",
          "type": "paragraph",
          "text": "A guard, drawn by the noise, peeked through the glass slit. “What’s going on in there?”"
        },
        {
          "id": "chapter-7-p100",
          "type": "paragraph",
          "text": "Samar turned, eyes wild, exhilarated. “Tell your superiors — we cracked it. We stabilized Amrit.”"
        },
        {
          "id": "chapter-7-p101",
          "type": "paragraph",
          "text": "The guard blinked, uncertain. “You sure?”\n“I watched it happen. Get Keshav. Now.”"
        },
        {
          "id": "chapter-7-p102",
          "type": "paragraph",
          "text": "The guard hesitated only a second before running down the corridor."
        },
        {
          "id": "chapter-7-p103",
          "type": "paragraph",
          "text": "Elsewhere: The Chain of Command. The call hit the network like a drop of mercury — fast, reflective, poisonous.\nGuard → Command Hub → Keshav’s PA → Keshav."
        },
        {
          "id": "chapter-7-p104",
          "type": "paragraph",
          "text": "The message arrived at Keshav’s desk wrapped in static: “Sir, Delhi base reports success. Amrit variant stabilized.”"
        },
        {
          "id": "chapter-7-p105",
          "type": "paragraph",
          "text": "Keshav froze mid-smoke. “Repeat that.”"
        },
        {
          "id": "chapter-7-p106",
          "type": "dialogue",
          "text": "“Confirmed. Dr. Vikram Sen’s team has achieved serum stability.”"
        },
        {
          "id": "chapter-7-p107",
          "type": "paragraph",
          "text": "For a heartbeat, there was silence. Then the sound of a chair scraping tile. Keshav dialed. One number. No hesitation. “Colonel Rudra, sir.”"
        },
        {
          "id": "chapter-7-p108",
          "type": "paragraph",
          "text": "The line crackled, wind and rotor noise roaring on the other side. “Speak,” Rudra’s voice came, gravel and iron."
        },
        {
          "id": "chapter-7-p109",
          "type": "paragraph",
          "text": "Keshav swallowed. “The serum… they cracked it. Amrit-02. Stable version.”"
        },
        {
          "id": "chapter-7-p110",
          "type": "paragraph",
          "text": "There was a pause long enough to make Keshav doubt he was still connected. Then the voice — colder, quieter: “Prepare the lab.”"
        },
        {
          "id": "chapter-7-p111",
          "type": "paragraph",
          "text": "Rudra ended the call. He was sitting on the edge of an old iron bridge outside Jaipur — night wind hissing through steel beams, the river below black and endless. The chopper floated overhead like a silent vulture, its rotors idling."
        },
        {
          "id": "chapter-7-p112",
          "type": "paragraph",
          "text": "Rudra stared at his reflection in the water, the scar across his cheek splitting the image in two. “Immortality,” he murmured. “And at what cost?”"
        },
        {
          "id": "chapter-7-p113",
          "type": "paragraph",
          "text": "The phone light died. He took one last drag from his cigar, flicked it into the river, and stood. “Delhi,” he said into his comm."
        },
        {
          "id": "chapter-7-p114",
          "type": "paragraph",
          "text": "The chopper’s blades began to rise again — slow, deliberate, like the turning of fate’s wheel. The chopper blades faded into the night like fading heartbeats — the sound dissolving into the rhythmic hum of car wheels cutting through the Mumbai highway."
        },
        {
          "id": "chapter-7-p115",
          "type": "paragraph",
          "text": "The world transitioned in one unbroken motion — from Rudra’s steel wings to the spokes of Maya’s car, slicing the misted air."
        },
        {
          "id": "chapter-7-p116",
          "type": "paragraph",
          "text": "Mumbai loomed ahead — half-lit, half-lost in drizzle. The skyline looked like it had been rewritten by regret."
        },
        {
          "id": "chapter-7-p117",
          "type": "paragraph",
          "text": "Inside the car, silence had weight. Maya’s fingers tapped the steering, restless. Arav stared at his phone, screen lighting his face in ghost blue."
        },
        {
          "id": "chapter-7-p118",
          "type": "paragraph",
          "text": "He dialed again. Vikram. Network unreachable. Again. Meera. Same result. Static, then silence."
        },
        {
          "id": "chapter-7-p119",
          "type": "paragraph",
          "text": "Maya finally said, “They might have gone underground too. Rudra wouldn’t—”"
        },
        {
          "id": "chapter-7-p120",
          "type": "paragraph",
          "text": "Arav cut her off, voice hollow. “He promised he’d keep her safe.”"
        },
        {
          "id": "chapter-7-p121",
          "type": "paragraph",
          "text": "The wipers swished once more, clearing nothing but reflections."
        },
        {
          "id": "chapter-7-p122",
          "type": "paragraph",
          "text": "They turned into the old lane — Sen Gupta Villa, crouched between banyan shadows, looked like a mausoleum of memory. No guards. No movement. The iron gate creaked open, metal screaming against stone. Tires screeched against the gravel, echoing in the hollow night."
        },
        {
          "id": "chapter-7-p123",
          "type": "paragraph",
          "text": "Arav stepped out first. The air smelled of salt and rain-soaked dust — the same scent that used to mean home. He fumbled for the keys, hands trembling in impatience. The main door groaned as it opened, like the house itself remembered them but didn’t welcome them."
        },
        {
          "id": "chapter-7-p124",
          "type": "paragraph",
          "text": "Inside — silence. The kind that hums between heartbeats."
        },
        {
          "id": "chapter-7-p125",
          "type": "paragraph",
          "text": "Maya whispered, “Turn on the MCB… let’s get some light.”"
        },
        {
          "id": "chapter-7-p126",
          "type": "paragraph",
          "text": "Arav found the switchboard and flipped it. The house stuttered awake — lights flickering, shadows shifting, a hum through the old wiring. Every painting, every curtain seemed to carry absence. Dust motes drifted like ash."
        },
        {
          "id": "chapter-7-p127",
          "type": "paragraph",
          "text": "Arav’s eyes darted from room to room — the kitchen, empty; the study, untouched; the living hall, still holding his father’s photograph smiling, as if unaware of the blood that would one day follow his name."
        },
        {
          "id": "chapter-7-p128",
          "type": "paragraph",
          "text": "Then — a door. Half-open. The lab. He rushed."
        },
        {
          "id": "chapter-7-p129",
          "type": "paragraph",
          "text": "The home lab was in chaos — files strewn across the floor, a few glass vials shattered. Yet there was order in the mess — as if someone had searched in panic, then left too quickly to cover the trail."
        },
        {
          "id": "chapter-7-p130",
          "type": "paragraph",
          "text": "On the table: Half-burned notes. A microscope still powered, the light blinking in rhythmic death. And a drawer half-pushed in, just barely revealing its secret."
        },
        {
          "id": "chapter-7-p131",
          "type": "paragraph",
          "text": "Arav pulled it open — a laptop, old, his father’s. The corner dented, the logo faded. It hummed weakly when he pressed the power button, as though waking from a long coma."
        },
        {
          "id": "chapter-7-p132",
          "type": "paragraph",
          "text": "The desktop loaded: a few project folders, some family photos. Then — something else. A hidden directory blinking at the bottom: “The New World.” Password protected."
        },
        {
          "id": "chapter-7-p133",
          "type": "paragraph",
          "text": "Maya leaned in. “Try something personal.”"
        },
        {
          "id": "chapter-7-p134",
          "type": "paragraph",
          "text": "Arav’s mind flicked through fragments — birthdays, formulas, project codes, failure dates. Nothing."
        },
        {
          "id": "chapter-7-p135",
          "type": "paragraph",
          "text": "He stared at the photo on the wall — his mother smiling beside his father. His fingers typed slowly: `Akanksha@Arv`"
        },
        {
          "id": "chapter-7-p136",
          "type": "paragraph",
          "text": "The screen blinked. Unlocked."
        },
        {
          "id": "chapter-7-p137",
          "type": "paragraph",
          "text": "Both froze. Inside the folder — a small constellation of files. PDFs. Scans of old manuscripts. A few labeled “PROPAGANDA,” “MATTER,” and “EXPERIMENT-LOGS.”"
        },
        {
          "id": "chapter-7-p138",
          "type": "paragraph",
          "text": "And one video. Just one. `ARVIND_FINAL_LOG.mp4`"
        },
        {
          "id": "chapter-7-p139",
          "type": "paragraph",
          "text": "Maya’s voice was a whisper. “Play it.”"
        },
        {
          "id": "chapter-7-p140",
          "type": "paragraph",
          "text": "Arav hesitated. The hum of rain grew louder against the window, as though the city itself leaned in to listen. He hit enter."
        },
        {
          "id": "chapter-7-p141",
          "type": "paragraph",
          "text": "The laptop’s old fan wheezed once before the video loaded — static flickered like an old television’s breath. Then a face appeared."
        },
        {
          "id": "chapter-7-p142",
          "type": "paragraph",
          "text": "Dr. Arvind Sen Gupta. Unshaven. Eyes sunken with sleeplessness, yet burning with something close to peace. The faint hum of generators echoed behind him, and a dim, sterile light cut through the dark room. He adjusted the camera, leaned closer."
        },
        {
          "id": "chapter-7-p143",
          "type": "quote",
          "text": "“I hope this video will reach you, beta,” he said, voice trembling slightly. “And if it does, it means I didn’t survive to explain this in person.”"
        },
        {
          "id": "chapter-7-p144",
          "type": "paragraph",
          "text": "Arav’s hands trembled. The sound of rain outside felt distant now. Maya stayed frozen beside him — the screen’s glow making her face look carved out of light and fear."
        },
        {
          "id": "chapter-7-p145",
          "type": "dialogue",
          "text": "“There are chances,” Arvind continued, “one of the keepers will lead you back here. They always do. The books find their next bearer… even when the bearer isn’t ready. I was working on matter — bio-matter specifically. I was its author. The keeper of that book. And in the final phase, I had almost decoded what we’ve all feared to admit we sought — immortality.”"
        },
        {
          "id": "chapter-7-p146",
          "type": "paragraph",
          "text": "The words seemed to throb in the air. The rain outside hissed harder, as if the world itself objected."
        },
        {
          "id": "chapter-7-p147",
          "type": "quote",
          "text": "“Then one day,” Arvind’s voice softened, “another keeper found me. He called himself the Keeper of Time.” A faint smile — nostalgic, reverent. “We met at an anonymous location he chose. He gave me his book — said that when the right time occurs, they will come. I knew what he meant. Till then, it was my duty to protect the book.”"
        },
        {
          "id": "chapter-7-p148",
          "type": "paragraph",
          "text": "Arvind’s tone darkened. “He also warned me — The Order of Kali has already taken over the Book of Propaganda. And mine was next. But the book needed to reach its next keeper… through the carrier. Time told me that carrier would be you.”"
        },
        {
          "id": "chapter-7-p149",
          "type": "paragraph",
          "text": "Arav’s throat tightened. His father looked straight into the lens — straight through years, straight into his soul."
        },
        {
          "id": "chapter-7-p150",
          "type": "quote",
          "text": "“I hid the Book of Time somewhere safe,” Arvind whispered. “And in my Book of Matter, I left the equation — the one for longevity, split into three keys — and a clue to find the Book of Time.”"
        },
        {
          "id": "chapter-7-p151",
          "type": "paragraph",
          "text": "He reached off-screen, lifted something — a torn page filled with ancient script and formulae."
        },
        {
          "id": "chapter-7-p152",
          "type": "dialogue",
          "text": "“The code goes by: ‘Time is not a river — it’s a sea we forgot how to swim in.’”"
        },
        {
          "id": "chapter-7-p153",
          "type": "paragraph",
          "text": "Maya’s hand flew to her mouth. Arav whispered, “It’s the same line… the same torn note from Banaras…”"
        },
        {
          "id": "chapter-7-p154",
          "type": "paragraph",
          "text": "On screen, Arvind smiled faintly. “And if you’re hearing this… then I’ve failed to outrun them. Remember the name— Ashoka…”"
        },
        {
          "id": "chapter-7-p155",
          "type": "paragraph",
          "text": "A loud crash behind him. The door burst open. Gunfire. The screen went white. Then — black."
        },
        {
          "id": "chapter-7-p156",
          "type": "paragraph",
          "text": "The first sirens were still distant, weaving through Mumbai’s midnight arteries."
        },
        {
          "id": "chapter-7-p157",
          "type": "quote",
          "text": "“Arav, hurry!” Maya whispered, pulling his hand as they darted across the rain-slick street. Headlights swept the walls — shadows fractured like broken glass."
        },
        {
          "id": "chapter-7-p158",
          "type": "paragraph",
          "text": "They turned a corner — only to find a dead end. Maya froze. The sirens were louder now. Closer."
        },
        {
          "id": "chapter-7-p159",
          "type": "paragraph",
          "text": "Then — a soft metallic clang. Arav looked up. A rusted service ladder hung halfway down the wall — and sitting beside it, motionless in the drizzle, was a small grey monkey. It watched them — calm, almost knowing — before bounding up the ladder and disappearing onto the next terrace."
        },
        {
          "id": "chapter-7-p160",
          "type": "paragraph",
          "text": "Maya stared. “Did it just—”\n“Show us the way,” Arav finished, his voice low, awed."
        },
        {
          "id": "chapter-7-p161",
          "type": "paragraph",
          "text": "They climbed after it. From the rooftop, they saw the maze of lanes below — the police cruisers turning away, misdirected. The monkey sat at the edge of the next building, silhouetted against a lightning flash — then vanished into the rain. Only its faint cry echoed — somewhere between a laugh and a prayer."
        },
        {
          "id": "chapter-7-p162",
          "type": "paragraph",
          "text": "Arav murmured, “Hanuman…?, No it can’t be. It was just a monkey.”\nMaya didn’t answer. But she bowed her head — just once — before pulling him onward."
        },
        {
          "id": "chapter-7-p163",
          "type": "paragraph",
          "text": "Rain clattered on the shutters of a closed electronics store. A dozen television screens flickered inside — casting blue light across the street."
        },
        {
          "id": "chapter-7-p164",
          "type": "paragraph",
          "text": "NEWS24 LIVE — BREAKING BULLETIN:\n“A national manhunt is underway for two fugitives believed to be linked with the Delhi Biogen Research Attack…”"
        },
        {
          "id": "chapter-7-p165",
          "type": "paragraph",
          "text": "Maya’s breath hitched. On the screen — her own ID photo. Beside her, Arav."
        },
        {
          "id": "chapter-7-p166",
          "type": "dialogue",
          "text": "“The suspects, identified as psychologist Dr. Maya Rai and Arav Sen Gupta, son of late government scientist Dr. Arvind Sen Gupta, are accused of stealing and leaking classified research from the National Genome Division.”"
        },
        {
          "id": "chapter-7-p167",
          "type": "paragraph",
          "text": "Arav’s voice trembled. “Stealing? What—what is this?”"
        },
        {
          "id": "chapter-7-p168",
          "type": "paragraph",
          "text": "The anchor continued — every word perfectly measured, like reading from a script rehearsed long before it happened. “Authorities claim the pair triggered the Delhi containment breach that killed multiple researchers. Sources within the ministry state the two may have been part of a radical anti-science movement calling itself ‘The Nine.’”"
        },
        {
          "id": "chapter-7-p169",
          "type": "paragraph",
          "text": "Maya whispered, horrified. “They’re framing us… and twisting his work.”"
        },
        {
          "id": "chapter-7-p170",
          "type": "dialogue",
          "text": "“Interpol and the Central Bureau have issued a red alert. Citizens are advised not to engage if sighted.”"
        },
        {
          "id": "chapter-7-p171",
          "type": "paragraph",
          "text": "The broadcast cut briefly — static, then a government emblem. But in the noise of pixels, for half a second, the pattern of three inverted triangles flashed — unregistered by most eyes. Not a logo. Not an error. A signature."
        },
        {
          "id": "chapter-7-p172",
          "type": "paragraph",
          "text": "Maya caught it. She froze. “That wasn’t a glitch,” she said softly. “That was a mark.”"
        },
        {
          "id": "chapter-7-p173",
          "type": "paragraph",
          "text": "Arav frowned. “A mark of what?”"
        },
        {
          "id": "chapter-7-p174",
          "type": "paragraph",
          "text": "She turned to him, voice lower than a whisper. “The ones who wrote that script. The ones who killed your father. The Order of Kali.”"
        },
        {
          "id": "chapter-7-p175",
          "type": "paragraph",
          "text": "Arav stared at the screen again — just as an image appeared. The lab ruins. The bodies. Then — her."
        },
        {
          "id": "chapter-7-p176",
          "type": "paragraph",
          "text": "Meera. Face distorted, half-decayed, but unmistakable."
        },
        {
          "id": "chapter-7-p177",
          "type": "paragraph",
          "text": "He stumbled forward, knees collapsing to the wet ground as the broadcast droned: “—both suspects are considered mentally unstable and extremely dangerous—”"
        },
        {
          "id": "chapter-7-p178",
          "type": "paragraph",
          "text": "Maya grabbed his arm, trying to lift him. But Arav’s eyes stayed fixed on Meera’s frozen smile."
        },
        {
          "id": "chapter-7-p179",
          "type": "paragraph",
          "text": "The rain swallowed the sound of sirens closing in. Fade to black."
        }
      ]
    },
    {
      "id": "chapter-0",
      "number": "Chapter 0",
      "title": "The Still Point",
      "pageStart": 193,
      "pageEnd": 195,
      "summary": "Sitting on the Mumbai sea wall at Bandstand, Markandeya reflects on the cosmic turning of the wheel as waves chant 'Ram... Ram... Ram...'. End of Book One.",
      "paragraphs": [
        {
          "id": "chapter-0-p1",
          "type": "paragraph",
          "text": "The night over Mumbai was a wound that refused to close. The sea licked at the rocks below Bandstand, each wave carrying the echo of sirens and running feet that had long faded."
        },
        {
          "id": "chapter-0-p2",
          "type": "paragraph",
          "text": "Far along the promenade, where the streetlights gave up to darkness, an old man sat cross-legged — his robes damp with sea mist, his eyes half-open, as if watching something the world had forgotten to see."
        },
        {
          "id": "chapter-0-p3",
          "type": "paragraph",
          "text": "Markandeya."
        },
        {
          "id": "chapter-0-p4",
          "type": "paragraph",
          "text": "He had come walking from the east, following a faint, impossible pull — the same pull that once drew him to the shores of time itself."
        },
        {
          "id": "chapter-0-p5",
          "type": "paragraph",
          "text": "A soft chittering sound broke the silence. A small monkey — the same that had led Arav and Maya through the alleyways — appeared from the shadows and climbed onto his shoulder. It stole a few roasted chanas from the seer’s palm and began to eat, content, like a child at peace."
        },
        {
          "id": "chapter-0-p6",
          "type": "paragraph",
          "text": "Markandeya looked at it and smiled faintly.\n“So the messenger finds his way home,” he said. “Since the Samudra Manthan, no one has come this close to drinking what was meant only for the gods.”"
        },
        {
          "id": "chapter-0-p7",
          "type": "paragraph",
          "text": "The waves struck harder now, as though the sea itself was listening. Somewhere in the salt-laden air came a whisper — a chant, faint and infinite:\n“Ram… Ram… Ram…”"
        },
        {
          "id": "chapter-0-p8",
          "type": "paragraph",
          "text": "Markandeya lifted his gaze toward the unseen horizon — where the sky began to pale, and a new light trembled over the water. He closed his eyes, the chant deepening in his chest, not as prayer, but as memory."
        },
        {
          "id": "chapter-0-p9",
          "type": "dialogue",
          "text": "“Ram… Ram… Ram…”"
        },
        {
          "id": "chapter-0-p10",
          "type": "paragraph",
          "text": "The monkey stopped eating, its small hand resting over the sage’s heart — as if to feel the last echo."
        },
        {
          "id": "chapter-0-p11",
          "type": "paragraph",
          "text": "The wind stilled. The sea held its breath."
        },
        {
          "id": "chapter-0-p12",
          "type": "paragraph",
          "text": "— End of Book One —"
        }
      ]
    },
    {
      "id": "epilogue",
      "number": "Epilogue",
      "title": "Almost",
      "pageStart": 196,
      "pageEnd": 205,
      "summary": "In the quiet stillness of near-death, Vikram reflects on his father Arvind, his brother Arav, his love for Meera, and the merciless weight of the word 'Almost'.",
      "paragraphs": [
        {
          "id": "epilogue-p1",
          "type": "paragraph",
          "text": "I don’t know if this is death. I don’t know if this is sleep. All I know is—everything is silent."
        },
        {
          "id": "epilogue-p2",
          "type": "paragraph",
          "text": "There’s no beeping. No footsteps. No Meera whispering my name with that cracked voice she pretends is still strong."
        },
        {
          "id": "epilogue-p3",
          "type": "paragraph",
          "text": "It’s just… stillness. A kind of quiet that makes your memories louder."
        },
        {
          "id": "epilogue-p4",
          "type": "paragraph",
          "text": "Maybe this is what happens when your body gives up but your mind refuses to leave. Maybe this is where people like me come to negotiate with fate."
        },
        {
          "id": "epilogue-p5",
          "type": "paragraph",
          "text": "And fate is a bad listener."
        },
        {
          "id": "epilogue-p6",
          "type": "paragraph",
          "text": "The first memory that crawls out is my father. Arvind. A man who could fix anything except his own time on this planet."
        },
        {
          "id": "epilogue-p7",
          "type": "paragraph",
          "text": "He’s sitting on the floor fixing a radio, and I’m beside him, holding a screw like it’s sacred. He looks at me and says,\n“Things take time, Vikram. Don’t rush. If you rush, you break more than you fix.”"
        },
        {
          "id": "epilogue-p8",
          "type": "paragraph",
          "text": "Funny. I spent my life rushing. Running. Trying to prove I wasn’t worthless. Trying to save people before they fell."
        },
        {
          "id": "epilogue-p9",
          "type": "paragraph",
          "text": "And in the end, the one person who needed saving… I reached her almost in time. Almost."
        },
        {
          "id": "epilogue-p10",
          "type": "paragraph",
          "text": "That word still scars."
        },
        {
          "id": "epilogue-p11",
          "type": "paragraph",
          "text": "If there’s one person I overdid everything for, it was Arav."
        },
        {
          "id": "epilogue-p12",
          "type": "paragraph",
          "text": "I was eight when I first punched a kid for calling him a crybaby. Arav cried harder because I punched someone. And I—I stood there like an idiot thinking I was a hero."
        },
        {
          "id": "epilogue-p13",
          "type": "paragraph",
          "text": "He never asked for protection. But I gave it anyway."
        },
        {
          "id": "epilogue-p14",
          "type": "paragraph",
          "text": "He used to say, “Dude, stop acting like I’m five.” And I’d tell him, “Stop acting like someone who needs supervision then.”"
        },
        {
          "id": "epilogue-p15",
          "type": "paragraph",
          "text": "But truth is—he kept me sane. He doesn’t know how many nights his voice on call stopped me from quitting life."
        },
        {
          "id": "epilogue-p16",
          "type": "paragraph",
          "text": "Meera…. The name which I could not ever forget in my life."
        },
        {
          "id": "epilogue-p17",
          "type": "paragraph",
          "text": "It was at some boring family function. She was standing there, quiet, arms folded, looking like she’d rather fight a bear than talk to relatives. Daughter of a distant relative. Someone I was technically supposed to call “family.”"
        },
        {
          "id": "epilogue-p18",
          "type": "paragraph",
          "text": "I didn’t know then that she’d become the only home I ever needed."
        },
        {
          "id": "epilogue-p19",
          "type": "paragraph",
          "text": "When she spoke, it wasn’t soft. It wasn’t shy. It was sharp, like she was cutting through the noise. I fell for the way she said my name like she was testing it for flaws."
        },
        {
          "id": "epilogue-p20",
          "type": "paragraph",
          "text": "People romanticize long-distance love. Those people have never lived it."
        },
        {
          "id": "epilogue-p21",
          "type": "paragraph",
          "text": "We built something real in the cracks between exams, jobs, failures, and network issues. We fought over who forgot to text back. We argued about tone. We were kids pretending to be adults."
        },
        {
          "id": "epilogue-p22",
          "type": "paragraph",
          "text": "But Meera — uff, that dumbass never came back because she believed she never left. And I always found my way back to her."
        },
        {
          "id": "epilogue-p23",
          "type": "paragraph",
          "text": "I think that’s when I realized: she wasn’t part of my life. She was the thread tying all my broken pieces together."
        },
        {
          "id": "epilogue-p24",
          "type": "paragraph",
          "text": "Bangalore. My first hackathon. I won. People clapped. Someone hugged me. Someone else took photos. And I felt… finally… like I wasn’t failing at life."
        },
        {
          "id": "epilogue-p25",
          "type": "paragraph",
          "text": "Two days later, I got the call. Meera’s father—gone."
        },
        {
          "id": "epilogue-p26",
          "type": "paragraph",
          "text": "I wasn’t there. I wasn’t with her. I wasn’t holding her hand. I wasn’t even in the same damn city."
        },
        {
          "id": "epilogue-p27",
          "type": "paragraph",
          "text": "Success felt like a joke that day. I broke down in a dingy hostel bathroom, punching the tiles because guilt needed a place to land."
        },
        {
          "id": "epilogue-p28",
          "type": "paragraph",
          "text": "But she deserved better than a man who was late to every tragedy in her life."
        },
        {
          "id": "epilogue-p29",
          "type": "paragraph",
          "text": "Everyone sees the wins. No one sees the nights you stare at the ceiling wondering if the world is laughing behind your back."
        },
        {
          "id": "epilogue-p30",
          "type": "paragraph",
          "text": "I faced rejection like it was a subscription service. Job after job. Idea after idea. Every email that started with “Unfortunately…” cracked me a little more."
        },
        {
          "id": "epilogue-p31",
          "type": "paragraph",
          "text": "But Meera—she didn’t let me crack too far. She bullied me into confidence. Told me to stop sulking. Told me to stop quitting. Told me to stand up straighter even when I felt like collapsing."
        },
        {
          "id": "epilogue-p32",
          "type": "paragraph",
          "text": "She was compassion wrapped in sarcasm. The perfect medicine for a man like me."
        },
        {
          "id": "epilogue-p33",
          "type": "paragraph",
          "text": "I proposed like an idiot. Forgot the speech. Held the box upside down. Dropped the ring. Sweated like someone running a marathon."
        },
        {
          "id": "epilogue-p34",
          "type": "paragraph",
          "text": "She rolled her eyes so dramatically the waiter laughed. Gave me a ten-minute lecture about planning, her tantrums of how I could have made it special. Walked away."
        },
        {
          "id": "epilogue-p35",
          "type": "paragraph",
          "text": "Came back. Whispered “yes” so softly I almost missed it."
        },
        {
          "id": "epilogue-p36",
          "type": "paragraph",
          "text": "I was almost in tears, thinking what the heck have I done and she hit my shoulder like I deserved all of it. Saying, “Dumbo, you could have planned it better, but in the first place there was no reason to propose.”"
        },
        {
          "id": "epilogue-p37",
          "type": "paragraph",
          "text": "That moment—that damn moment—I felt like the world finally made sense."
        },
        {
          "id": "epilogue-p38",
          "type": "paragraph",
          "text": "Our honeymoon was perfect. We laughed, fought, kissed, argued about sunscreen, held hands, got lost, found our way back."
        },
        {
          "id": "epilogue-p39",
          "type": "paragraph",
          "text": "Then my father called. Urgent voice. Something in it felt… final."
        },
        {
          "id": "epilogue-p40",
          "type": "paragraph",
          "text": "We returned. A few days later—he was gone."
        },
        {
          "id": "epilogue-p41",
          "type": "paragraph",
          "text": "Meera held the family together. She became the spine when all of us bent under grief. Arav came home from his hostel, happy, hopeful."
        },
        {
          "id": "epilogue-p42",
          "type": "paragraph",
          "text": "And then life hit us again. Hard. Cruel. Without warning."
        },
        {
          "id": "epilogue-p43",
          "type": "paragraph",
          "text": "I became obsessed. Trying to uncover our father’s last wish, his last truth, the reason behind everything that happened."
        },
        {
          "id": "epilogue-p44",
          "type": "paragraph",
          "text": "I chased ghosts. Meera held the living."
        },
        {
          "id": "epilogue-p45",
          "type": "paragraph",
          "text": "But, Delhi. Now. I don’t know how many days or months have been passed away."
        },
        {
          "id": "epilogue-p46",
          "type": "paragraph",
          "text": "Here, Time does not work in normal way. But there is increasing anger and hatred in me for that bastard Colonel Rudra."
        },
        {
          "id": "epilogue-p47",
          "type": "paragraph",
          "text": "He snatched my only life force, just because somebody wants to live years longer. I could not comprehend her state and what time did to her."
        },
        {
          "id": "epilogue-p48",
          "type": "paragraph",
          "text": "Her cells failed. Slow, painful, unfair."
        },
        {
          "id": "epilogue-p49",
          "type": "paragraph",
          "text": "But she smiled. Every. Damn. Day."
        },
        {
          "id": "epilogue-p50",
          "type": "paragraph",
          "text": "She looked at me like I was still her hero. Like she still believed I’d fix everything. Like time would break for me if I asked hard enough."
        },
        {
          "id": "epilogue-p51",
          "type": "paragraph",
          "text": "But time didn't break nor did it stand still. Not for love. Not for heroes. Not for men who try too hard and lose anyway."
        },
        {
          "id": "epilogue-p52",
          "type": "paragraph",
          "text": "I tried to save her. I fought everything. I even fought death itself."
        },
        {
          "id": "epilogue-p53",
          "type": "paragraph",
          "text": "But I reached her almost in time. Almost."
        },
        {
          "id": "epilogue-p54",
          "type": "paragraph",
          "text": "And almost is the most merciless word in the human language."
        },
        {
          "id": "epilogue-p55",
          "type": "paragraph",
          "text": "Somedays, I wish maybe we shouldn’t have met or been apart forever - but time did both."
        }
      ]
    }
  ]
};
