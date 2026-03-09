const TEXTS = [
  {
    theme: "loneliness",
    text: `The station was empty at this hour, its fluorescent lights humming a tuneless song to nobody. Marcus sat on the cold bench, his luggage piled beside him like a small, faithful city. Outside, rain pressed itself against the windows, desperate to get in. The departure board clicked and shuffled — destination after destination — but none of them were his. He had been waiting so long he had forgotten what he was waiting for. The last train left without him, and the silence that followed was absolute.`,
    question: "How does the composer use language techniques to convey ideas about loneliness? (4 marks)"
  },
  {
    theme: "belonging",
    text: `Every Sunday morning the kitchen smelled of cardamom and burnt sugar, and Priya knew exactly where she was. Her grandmother's hands moved through the steam like they had always known the way — pinching, folding, pressing the dough into shapes that carried names Priya had never learned to pronounce. She watched from the doorway, half in, half out. The language she had lost lived in those hands. One day, she stepped forward and placed her own hands beside her grandmother's, and the old woman smiled without turning around, as if she had always known this moment was coming.`,
    question: "How does the composer use language techniques to convey ideas about belonging? (4 marks)"
  },
  {
    theme: "change",
    text: `The old fig tree was gone by morning. Nothing remained but a pale scar of earth and the ghost of its shadow on the grass. For thirty years it had stood at the edge of the yard, dropping fruit nobody ate, sheltering birds nobody named. The children who had climbed its branches were adults now, scattered across cities that had no room for trees like that. The new owners wanted light. They got it. But the yard felt exposed now, blinking in the sun like something that had never meant to be seen.`,
    question: "How does the composer use language techniques to convey ideas about change? (4 marks)"
  },
  {
    theme: "hope",
    text: `The seeds arrived in a small brown envelope with no return address, only a handwritten note: plant these in spring. Elena had lost the garden to frost two winters running, had watched the soil turn grey and indifferent beneath her hands. But she opened the envelope anyway, held the seeds up to the light — small, dark, unremarkable things that had no idea what they were supposed to become. She pressed them into the earth on a Tuesday morning, covered them with her palms, and waited. By April the first green thread had pushed through the surface, reaching blindly toward the sun.`,
    question: "How does the composer use language techniques to convey ideas about hope? (4 marks)"
  },
  {
    theme: "memory",
    text: `She found the photographs in a shoebox under the stairs, wrapped in a plastic bag that crinkled like old skin. They were faded at the edges, the colours retreating from the corners as if trying to disappear. She recognised the faces — younger, sharper, unfamiliar in their happiness. There she was at seven, squinting into a sun that no longer existed. There was the house before the renovation, the car before the accident, the dog they never talked about anymore. Memory, she thought, is just light that hasn't finished dying yet. She put the photographs back and taped the box shut.`,
    question: "How does the composer use language techniques to convey ideas about memory? (4 marks)"
  },
  {
    theme: "identity",
    text: `Between languages, Mia lived in a place that had no name. At school she was one person — clipped, careful, her sentences ironed flat. At home she was another — loose, laughing, tumbling through words that English couldn't hold. Her teachers called her quiet. Her family called her wild. She called herself both and neither, standing at the border of two worlds, fluent in the crossing. Some days she looked in the mirror and saw only the space where a single self should be. Other days she saw something more interesting: the capacity to be everyone they needed her to be, and still come home to herself.`,
    question: "How does the composer use language techniques to convey ideas about identity? (4 marks)"
  },
  {
    theme: "resilience",
    text: `After the flood, the town came back the only way it knew how — slowly, and together. The mud was still thick in the streets when the first hammers rang out. Mrs Delano, who had lost everything on the ground floor, was already sweeping. The Nguyen family opened their garage and handed out soup to strangers. Children drew pictures of the river on the sides of ruined fences, taming it with crayon. Nobody used the word resilience. They were too busy for words like that. By winter the main street had lights again, and they were the brightest lights anyone could remember.`,
    question: "How does the composer use language techniques to convey ideas about resilience? (4 marks)"
  },
  {
    theme: "isolation",
    text: `The lighthouse keeper wound the mechanism each night without fail, sending light out across a sea that rarely answered. Ships passed — distant, blinking — but never stopped. His logbook recorded everything: wind speed, weather, vessels observed. What it did not record was the particular quality of the silence at three in the morning, when even the gulls had given up, and the lamp threw its yellow arm across the water like a question nobody was answering. He had chosen this life, or so he told himself. The choice looked different from the inside than it had from the shore.`,
    question: "How does the composer use language techniques to convey ideas about isolation? (4 marks)"
  },
  {
    theme: "connection",
    text: `They had not spoken in eleven years when the phone rang at six in the morning. David heard his brother's voice and knew immediately — not from the words, but from the breath before them. That pause that meant something had broken in the world. He was in the car before the sentence finished, driving through streets that were still half-asleep, past traffic lights blinking amber in the thin morning dark. When he arrived at the hospital, his brother was in the corridor, and they stood together without speaking, their silence carrying everything the years between them had made too heavy for words.`,
    question: "How does the composer use language techniques to convey ideas about connection? (4 marks)"
  },
  {
    theme: "time",
    text: `The clockmaker's shop had no clocks that agreed with each other. On the hour, chaos broke out — ticking, chiming, cuckooing at slightly different intervals, as if each clock kept time with a different world. Mr Petrova did not mind. He had spent forty years inside other people's seconds, learning that time was less a river than a conversation — something that changed depending on who was listening. His hands, trembling now at the fine work, had once moved with the precision of a surgeon. He kept working. The clocks kept disagreeing. Outside, the afternoon did whatever it liked.`,
    question: "How does the composer use language techniques to convey ideas about time? (4 marks)"
  },
  {
    theme: "grief",
    text: `The coat was still on the hook by the door. Nobody had moved it. Three months had passed, and still it hung there — navy blue, the collar slightly turned up on one side the way he always wore it. His wife passed it every morning on the way to the kettle, and every morning she almost touched it and then didn't. The house had learned to hold its breath around her grief. The dog still waited by the door at five o'clock. The chair at the table still faced the television. Some absences, she had discovered, take up more space than the person ever did.`,
    question: "How does the composer use language techniques to convey ideas about grief? (4 marks)"
  },
  {
    theme: "freedom",
    text: `The gate had been unlocked for years before she noticed. She had walked past it every day, hands in pockets, eyes down, never thinking to test it. The morning she finally pushed it open she stood very still on the other side, as if the ground might be different there. It wasn't. Same dirt, same light, same distant sound of traffic. But she felt something shift in her chest — a small, stubborn thing unclenching. She walked until the town disappeared behind the hill, until there was only paddock and sky and the long warm silence of a world that had no idea she was missing.`,
    question: "How does the composer use language techniques to convey ideas about freedom? (4 marks)"
  },
  {
    theme: "courage",
    text: `The speech was three hundred words long, and she had practised it until the words had lost all meaning. Standing at the microphone, looking out at the assembly hall — two hundred faces arranged in careful rows — she felt the familiar tide of fear begin to rise. Then she thought of her sister, who could not be here to speak for herself. The silence stretched. She opened her mouth. What came out was not the prepared speech — it was something older and rougher and more true, and the room went very quiet in the way rooms do when they recognise honesty. She did not stop until she was finished.`,
    question: "How does the composer use language techniques to convey ideas about courage? (4 marks)"
  },
  {
    theme: "silence",
    text: `After the argument, the house filled with a silence so dense it had weight. They moved through separate rooms, making sounds that were careful and deliberate — the click of a cup, the soft close of a door, footsteps that asked nothing and said nothing. The television stayed off. Even the dog seemed to understand, lying flat in the hallway, watching them pass with eyes that held a question neither of them was ready to answer. Silence, she thought, was not the absence of sound but a language with its own grammar — and tonight, they were both speaking it fluently.`,
    question: "How does the composer use language techniques to convey ideas about silence? (4 marks)"
  },
  {
    theme: "loss",
    text: `She had memorised the smell of her father's workshop — turpentine, sawdust, old coffee in a tin mug that was never quite clean. Now the workshop was a spare room, the tools given away to neighbours who promised to use them. She stood in the empty space, breathing air that had forgotten him. The window still held the same view — backyard, lemon tree, the back fence with its missing paling — and she realised that loss was not the disappearance of a person but the continuation of everything else. The world was devastatingly unchanged. She was the only thing that knew something was missing.`,
    question: "How does the composer use language techniques to convey ideas about loss? (4 marks)"
  },
  {
    theme: "loneliness",
    text: `At the dinner party she laughed at all the right moments, refilled glasses, asked questions she already knew the answers to. She was good at this — the performance of presence. On the train home she let her face go slack, staring at her own reflection in the dark window. A woman who looked like her stared back, equally tired, equally unconvinced. The city scrolled past behind them both — lit windows, other lives, other people doing their own versions of pretending. She got off at her stop, walked home through streets that were busy and indifferent, and let herself in to the particular silence of an apartment that knew her too well.`,
    question: "How does the composer use language techniques to convey ideas about loneliness? (4 marks)"
  },
  {
    theme: "belonging",
    text: `The football oval on a Saturday morning was the closest thing to a home he had found since arriving. He did not know the rules well, but he knew effort, and effort translated. By the second week they were calling him by a nickname he didn't understand but liked the sound of. The coach slapped him on the back after a good play and it was the first time in months someone had touched him without it being clinical or obligatory. He ran the oval at training until his lungs burned, because burning felt like belonging, and he had been cold for a very long time.`,
    question: "How does the composer use language techniques to convey ideas about belonging? (4 marks)"
  },
  {
    theme: "change",
    text: `The town had changed while she was away at university, and the change was worse for being incremental — a cafe where the hardware store was, a gym where the bakery used to be, the old cinema boarded up with a FOR LEASE sign that had been there so long it was fading. She walked the main street on her first afternoon back, searching for something recognisable. At the end of the block, the newsagency still had the same faded lotto display in the window, the same handwritten OPEN sign. She went in and bought a chocolate bar she hadn't thought about in three years and ate it on the step, tasting the last unchanged thing in town.`,
    question: "How does the composer use language techniques to convey ideas about change? (4 marks)"
  },
  {
    theme: "hope",
    text: `The letter came on the day she had decided to stop expecting one. She almost didn't open it — left it on the kitchen bench while she made tea, moved around it, treated it with the careful indifference of someone who had been disappointed before. When she finally slit the envelope and read the first line, she had to sit down. Not because the news was extraordinary, but because hope, when it finally arrives, is heavier than despair — it carries the full weight of everything you had almost given up wanting. She sat at the table for a long time, very still, letting the good news find its way into her bones.`,
    question: "How does the composer use language techniques to convey ideas about hope? (4 marks)"
  },
  {
    theme: "memory",
    text: `The recipe had been written on the back of an envelope in her mother's handwriting — large, looping letters that leaned forward as if always in a hurry. She had found it between the pages of a cookbook she hadn't opened in years. She stood in the kitchen reading it, and the words did something that surprised her — they brought back not the dish itself but the kitchen it had come from, the sound of a wooden spoon against the side of a pot, summer afternoons with the back door open. Memory, she thought, lives in the most ordinary objects, waiting patiently to be disturbed.`,
    question: "How does the composer use language techniques to convey ideas about memory? (4 marks)"
  },
  {
    theme: "identity",
    text: `He had worn the same kind of clothes for twenty years — plain shirts, dark trousers, nothing that announced anything. Safe clothes. Invisible clothes. The morning he walked past the shop window and stopped to look at the yellow jacket on the mannequin, he stood there for four full minutes. It was the colour of something he had put away a long time ago — the version of himself that had opinions about colour. He went in. He tried it on. The shop assistant said nothing, just nodded once, and something in that nod felt like permission he hadn't known he was waiting for.`,
    question: "How does the composer use language techniques to convey ideas about identity? (4 marks)"
  },
  {
    theme: "resilience",
    text: `She had failed the exam twice already, and the third attempt sat on the calendar like a stone. But she kept her routine — up at six, notes spread on the kitchen table, coffee while it was still hot enough to mean something. Some mornings the material made sense and some mornings it was fog. She had learned to study through the fog, to trust that the words were going in somewhere even when nothing lit up. The morning of the exam she sat in the car park for ten minutes, breathing deliberately, then went in. She passed by two marks. They were the two marks she had earned in the fog.`,
    question: "How does the composer use language techniques to convey ideas about resilience? (4 marks)"
  },
  {
    theme: "isolation",
    text: `The research station sat at the edge of the world, or what felt like it — white in every direction, the wind pressing against the walls like it had a personal grievance. Dr Yuen recorded her observations with the precision her training demanded, but the margins of her notebooks had started to fill with drawings of things she missed: the particular green of the park near her apartment, the sound of a tram. Human warmth, she had discovered, was not metaphorical. She kept herself busy. The data was important. She told herself this every morning and most evenings, and on the days it worked, she was grateful.`,
    question: "How does the composer use language techniques to convey ideas about isolation? (4 marks)"
  },
  {
    theme: "connection",
    text: `They met every Tuesday in the community hall — twelve people who had nothing in common except that they had all lost someone, and someone had pointed them toward this room. At first the silences were uncomfortable, the tea too strong, the chairs arranged in a circle that felt performative. By the sixth week something had shifted. They had learned each other's names and then, slowly, the names behind the names — the people who were gone. The hall was draughty and the biscuits were always plain. Nobody minded. They had found something rarer than comfort: the knowledge that grief, witnessed, becomes something more bearable than grief alone.`,
    question: "How does the composer use language techniques to convey ideas about connection? (4 marks)"
  },
  {
    theme: "time",
    text: `His daughter was taller than he remembered, and the realisation hit him quietly, the way important things often do. He had been working. He had always been working. She sat across from him at the table, a teenager now, with opinions about things he hadn't known she'd discovered. She talked and he listened, actually listened, and thought: this is what time does — it moves while you're looking somewhere else, and then it shows you what you missed. He made himself a promise as they ate, the kind of promise that is easy to make and hard to keep. He kept it anyway.`,
    question: "How does the composer use language techniques to convey ideas about time? (4 marks)"
  },
  {
    theme: "grief",
    text: `The sympathy cards had stopped coming, and everyone had gone back to their own lives — which was right, she knew, which was how it was supposed to work. She had returned to hers too, on the surface: work, shopping, the routines that hold a person upright. But grief had moved in without her permission, rearranging the furniture of her days. Songs were ambushes. Certain words — ordinary words — had become dangerous. She learned to navigate them the way you navigate a room in the dark: slowly, hands out, ready for something to catch you. Some days she made it through without incident. Those days felt like a kind of victory.`,
    question: "How does the composer use language techniques to convey ideas about grief? (4 marks)"
  },
  {
    theme: "freedom",
    text: `She handed in her resignation on a Thursday, which felt like the wrong day for it — too quiet, too ordinary for what she was doing. The lift doors closed behind her and she stood in the lobby with her box of desk things and a feeling she couldn't immediately name. Outside, the afternoon was warm and directionless. She walked to the park and sat on the grass, which was slightly damp, and looked at the sky, which was very wide. She was terrified. She was also, underneath the terror, something that might eventually become free. The pigeons around her were entirely indifferent to her crisis, which helped.`,
    question: "How does the composer use language techniques to convey ideas about freedom? (4 marks)"
  },
  {
    theme: "courage",
    text: `He had rehearsed coming out to his parents in his head for four years, running through every version — the gentle approach, the direct approach, the approach where he left a note and went to a friend's house. None of them felt right. In the end it happened on a Sunday afternoon while they were washing up, his father rinsing, his mother drying, and he just said it — plainly, quietly, without performance. The pause that followed lasted three seconds and felt like a decade. Then his father turned off the tap and his mother put down the cloth, and they both turned toward him, and everything that happened next was different from any version he had imagined.`,
    question: "How does the composer use language techniques to convey ideas about courage? (4 marks)"
  },
  {
    theme: "silence",
    text: `The bush at dawn made a sound that was almost silence — the creak of cooling bark, the first cautious bird, the wind in the grass that was less a sound than a breath. Tom sat outside the tent and let it happen around him. The city had trained him to fill quiet with something — music, screens, the low hum of other people's presence. Out here, silence was not empty but full, textured, alive with things he couldn't name. He stopped trying to name them. He sat for an hour without moving, and by the end of it something in him that had been clenched for months had begun, slowly, to open.`,
    question: "How does the composer use language techniques to convey ideas about silence? (4 marks)"
  },
  {
    theme: "loss",
    text: `The number was still in her phone — she had never deleted it. Sometimes late at night she would scroll to it without meaning to, and there it was: his name, the photo she'd taken at Christmas, the last message from three years ago that she'd read so many times she had memorised it. She never called. She wasn't sure what she expected — that he would answer, that somewhere the signal was still travelling, that grief had a loophole she hadn't found yet. She kept the number. Loss, she had learned, was not one event but a thousand small decisions not to let go.`,
    question: "How does the composer use language techniques to convey ideas about loss? (4 marks)"
  },
  {
    theme: "belonging",
    text: `The community garden was divided into plots, each one a different philosophy of growing. Mr Okafor's beds were military in their precision; Rosa's were wild and fragrant, spilling past their borders. Ling had arrived with no experience and was given the worst plot — too much shade, too much clay. She dug it over twice, amended the soil with her own compost, asked questions of her neighbours without embarrassment. By summer her tomatoes were the best on the row. Nobody made a ceremony of it. But when she arrived each morning to water, hands went up all down the garden, and she waved back, and it was enough.`,
    question: "How does the composer use language techniques to convey ideas about belonging? (4 marks)"
  },
  {
    theme: "change",
    text: `The photograph on the mantelpiece showed a man she recognised but could not quite claim — younger, less careful about his posture, standing in front of a car that no longer existed with an expression of easy confidence she had slowly misplaced. James studied it most mornings, brief inventory, before heading out to a job that was not what he had planned. He was not unhappy. He was something more complex than happy or unhappy — he was altered, remade by years that had insisted on him in ways he hadn't predicted. The man in the photograph had no idea. James no longer envied him.`,
    question: "How does the composer use language techniques to convey ideas about change? (4 marks)"
  },
  {
    theme: "hope",
    text: `The hospital corridor smelled of antiseptic and institutional coffee, and she had been walking it for three days. At the far end, a window let in a rectangle of afternoon light that moved slowly along the floor as the hours passed. She found herself watching it — this small, reliable migration. The doctor's words were still sharp in her mind, the ones she was not yet ready to repeat. But the light kept moving, indifferent and consistent, and there was something in its consistency that she held onto, something that said: the world continues. It is still doing its quiet work. And so can you.`,
    question: "How does the composer use language techniques to convey ideas about hope? (4 marks)"
  },
  {
    theme: "memory",
    text: `The old house had new owners and a fresh coat of paint that covered the pencil marks on the doorframe — heights and dates going back twenty-three years. She drove past on impulse and pulled over, looking at the blank white surface where the record of her childhood had been. She was surprised by the force of her feeling, which was not grief exactly but something adjacent to it: the sense of a document erased. She sat in the car for several minutes. Then she drove home, found the kitchen doorframe of her own house, and made a new mark — her daughter's height, today's date — pressing the pencil in firmly.`,
    question: "How does the composer use language techniques to convey ideas about memory? (4 marks)"
  },
  {
    theme: "identity",
    text: `At forty-three she returned to her childhood name, the one her parents had given her before the country gave her another. She had gone by the anglicised version for so long that it had grown over her like a second skin. But lately it sat wrong. She practised the original name in the mornings, alone, saying it the way her grandmother had — the specific weight of each syllable, the way it rose at the end like a question asking if she was still there. She was still there. She had always been there. She was simply coming back to herself, which it turned out was not a short journey.`,
    question: "How does the composer use language techniques to convey ideas about identity? (4 marks)"
  },
  {
    theme: "resilience",
    text: `The drought had lasted four years, and the paddocks wore it openly — cracked earth, dead grass, the dam reduced to a muddy bowl. But Elena kept the kitchen garden going by hauling grey water from the house in buckets, a ritual so repetitive it had become almost meditative. Her neighbour called it stubbornness. She called it hope with calloused hands. The day the rain finally came she stood in it without moving, face tilted up, letting it soak through her clothes and into the ground and into the future she had been tending toward all along. Stubbornness had another name, she thought. It was called not yet.`,
    question: "How does the composer use language techniques to convey ideas about resilience? (4 marks)"
  },
  {
    theme: "isolation",
    text: `She had stopped answering messages not out of cruelty but out of exhaustion — the particular exhaustion of performing wellness when you are not well. The phone still lit up on the bedside table, names she loved appearing and fading like signals from a world she had stepped back from. She watched them. She wrote responses in her head — warm, reassuring, vague about the specifics of how she was spending her days. She sent none of them. The room around her was familiar and suffocating. Outside, she could hear the suburb going about its ordinary life. She had never felt more alone and more in need of the space to be so.`,
    question: "How does the composer use language techniques to convey ideas about isolation? (4 marks)"
  },
  {
    theme: "connection",
    text: `The old man sat in the corner booth every Friday morning with a newspaper he never quite finished reading. The new waitress learned this about him on her first week, and also learned his order — flat white, no sugar, toast with the crusts on — before he had to say it. On the third Friday she brought it without being asked and he looked up at her with an expression she recognised as surprise at being seen. They did not speak much. But each Friday, the small ritual repeated, and she thought that this was the most underrated thing a person could do for another: simply to remember who they were.`,
    question: "How does the composer use language techniques to convey ideas about connection? (4 marks)"
  },
  {
    theme: "time",
    text: `She kept her mother's watch even though it ran three minutes fast and she'd never had it fixed. Three minutes, she had decided, was the right amount of time to live in — slightly ahead of the present, always approaching the next moment with a little extra space. She wore it every day, and when people commented on the time she told them it was three minutes fast with a matter-of-factness that suggested this was correct. Her mother had also lived slightly ahead of herself — always planning, always anticipating — and wearing the watch felt like a way of carrying that particular quality forward into a future her mother would not see.`,
    question: "How does the composer use language techniques to convey ideas about time? (4 marks)"
  },
  {
    theme: "grief",
    text: `The garden had been her husband's project, and after he died she sat at the kitchen window and watched it proceed without him — the roses coming in spring as if they hadn't noticed, the lawn requiring mowing, the vegetable beds filling with weeds that didn't care about the circumstances. She hired a boy from the street to help, and then she found herself out there with him, pulling things up, learning the names of plants she had always left to him. Grief, she was finding, had a practical dimension nobody warned you about. The garden needed tending. She tended it. By autumn she had started to love it on her own terms.`,
    question: "How does the composer use language techniques to convey ideas about grief? (4 marks)"
  },
  {
    theme: "freedom",
    text: `The backpack held everything she had decided to keep. The decision about what to leave had taken longer than she expected — not the objects themselves but what they represented, the version of herself that had accumulated them. In the end she left most of it. The flat looked shocked by its own emptiness when she locked the door for the last time. The taxi was already waiting. She had a flight and an address and a city she had never been to, and behind her was everything she had outgrown. She did not look back through the taxi window, because the view in front was wider and she wanted to watch it open.`,
    question: "How does the composer use language techniques to convey ideas about freedom? (4 marks)"
  },
  {
    theme: "courage",
    text: `The first painting she showed anyone had been in her drawer for eleven months. She had made dozens of reasons not to show it: it wasn't ready, she wasn't ready, the light in the room was wrong, nobody would understand. The night she finally propped it against the wall and let her friend look at it, she stood with her arms crossed and her face turned slightly away, braced for the verdict. Her friend was quiet for a long time. Then she said: this is what I always thought you were like, inside. She had not known how much she needed to be seen until she was.`,
    question: "How does the composer use language techniques to convey ideas about courage? (4 marks)"
  },
  {
    theme: "silence",
    text: `The library at midnight held a particular quality of quiet that she had learned to find nourishing. Everyone else had left hours ago — the readers, the students, the man who came daily and fell asleep over the same book. She stayed to finish the shelving, and when it was done she walked the aisles in the low emergency lighting, trailing her fingers along spines. All these voices, waiting. All these thoughts that someone had thought carefully enough to write down. She sat on the floor in the history section and read one paragraph by the light of her phone, and the silence pressed gently around her like something alive and patient.`,
    question: "How does the composer use language techniques to convey ideas about silence? (4 marks)"
  },
  {
    theme: "loss",
    text: `The café they had always gone to had closed while she wasn't paying attention, and she found out only when she walked toward it on a Tuesday afternoon and found a different kind of business in its place. She stood on the pavement for a moment, recalculating. It was such a small loss — a table, a ritual, bad coffee that she had always complained about and always ordered. But small losses have their own gravity. She thought of everything else she hadn't noticed disappearing: the corner shop, the tree at the end of the street, the version of herself who had assumed things would stay roughly the same. She walked home a different way.`,
    question: "How does the composer use language techniques to convey ideas about loss? (4 marks)"
  },
  {
    theme: "loneliness",
    text: `The birthday cake had three candles on it even though she was turning thirty-one, because three was all the shop had, and she had bought it for herself on the way home from work. She set it on the kitchen bench, lit it with the stove lighter, and sang herself happy birthday in a voice that was almost steady. The wax dripped onto the icing. She blew out the candles and made a wish she was too old to believe in and ate two slices standing at the bench, looking out at the dark street, and then wrapped the rest in cling film and put it in the fridge for tomorrow.`,
    question: "How does the composer use language techniques to convey ideas about loneliness? (4 marks)"
  },
  {
    theme: "belonging",
    text: `She had not expected to cry at her citizenship ceremony. She had prepared herself for the procedural: the pledge, the handshake, the certificate. But when the moment came and she stood with forty-three others from twenty-one different countries and they said the words together, something opened in her chest that she had been keeping carefully shut. She had spent five years being from somewhere else. She had learned to hold herself at a slight remove, ready to leave. Now she was here, officially, irrevocably — and the relief of it was bigger than she had understood belonging could be.`,
    question: "How does the composer use language techniques to convey ideas about belonging? (4 marks)"
  },
  {
    theme: "hope",
    text: `The doctor said the word remission and she made him say it again. The second time she heard it differently — not just the word itself but what it left room for: Tuesday mornings, the garden in October, the possibility of being bored. She had forgotten about boredom, the luxury of it, the way ordinary time stretches ahead when you stop counting it. She drove home slowly, through streets that had become slightly more solid, more insistent, more hers. She sat in the driveway for a while before going inside. The wisteria was coming into flower on the back fence. She had planted it the month after diagnosis. It had made it.`,
    question: "How does the composer use language techniques to convey ideas about hope? (4 marks)"
  },
  {
    theme: "memory",
    text: `The first winter without him, she cooked all his meals. Not for any purpose — she lived alone, ate less, had no need for lamb stew in large quantities. But her hands needed the familiar motions: the particular way he had taught her to brown the meat, the amount of thyme that was always slightly too much. She cooked and let the flat fill with the smell of it, and for one hour every week she was not a woman whose husband had died but a woman whose husband would be home soon, and hungry, and glad of the warmth.`,
    question: "How does the composer use language techniques to convey ideas about memory? (4 marks)"
  },
  {
    theme: "identity",
    text: `The diagnosis changed what she called herself long before it changed anything else. She had been walking around unnamed for years — exhausted in ways that didn't add up, struggling in ways she'd been taught were character flaws. Now there was a word. It was not a comfortable word, but it was a word that fit, and she held it up like a key, turning it over. So many doors. So many things suddenly explicable. She was not becoming someone new. She was finally becoming the name for someone who had always been there, squinting in the dark, trying to read a map written in the wrong language.`,
    question: "How does the composer use language techniques to convey ideas about identity? (4 marks)"
  },
  {
    theme: "resilience",
    text: `The business had failed in March, the marriage had ended in June, and by August she was living in her sister's spare room surrounded by the things she'd managed to keep. She made a list one night, sitting on the edge of the fold-out bed, of what remained: her health, her daughter on weekends, her sister's dark humour, her ability to make a decent meal out of almost nothing. It was not an impressive list by any external measure. But she kept it folded in her wallet, and on the days when nothing seemed to hold she would take it out and read it like a compass pointing toward the only direction available: forward.`,
    question: "How does the composer use language techniques to convey ideas about resilience? (4 marks)"
  },
  {
    theme: "isolation",
    text: `He attended every function he was invited to and left early from all of them. He was good at parties in the way that some people are good at a foreign language — fluent on the surface, aware of the distance between speaking and thinking. In the taxi home, face turned to the window, he would feel the gap between performance and self like a cold thing in the chest. It wasn't that he disliked people. He liked them enormously. It was that liking them from the inside of his particular silence felt like pressing his face against glass — so close, and so far away.`,
    question: "How does the composer use language techniques to convey ideas about isolation? (4 marks)"
  },
  {
    theme: "connection",
    text: `They had grown up in the same house and had taken completely different roads away from it, and for years there was not much between them but Christmas and the occasional awkward call. Then their mother got sick and they were in the same city again, in the same waiting rooms, drinking the same terrible coffee. Proximity did something that intention never had — it wore down the distance between them until they were simply two people who had shared a childhood, and that, it turned out, was enough to build on. By the time their mother recovered they had become something they hadn't been in twenty years: friends.`,
    question: "How does the composer use language techniques to convey ideas about connection? (4 marks)"
  },
  {
    theme: "time",
    text: `The school photo on her mother's mantelpiece showed a child of seven with a gap in her smile and hair that had never sat flat. She was forty now, sitting across from it at Christmas, still with hair that refused to cooperate. Time had done its usual work — the gap filled, the face settled, the world accumulated — and yet something in her posture, even now, was recognisably that same child: slightly uncertain, hoping to be liked, trying not to show it. She thought: we do not leave our younger selves behind. We carry them forward, the way a river carries everything it has passed through.`,
    question: "How does the composer use language techniques to convey ideas about time? (4 marks)"
  },
  {
    theme: "grief",
    text: `Nobody told her that grief had a smell — the particular combination of old flowers and fresh air that hit her when she opened the door of her grandmother's flat for the last time. The plants were still alive. The kettle was full. The television had been left on the news, volume low, reporting a world that had not noticed it had lost one of its better inhabitants. She moved through the rooms collecting what she'd been asked to collect, touching things lightly, not yet ready to decide what each of them meant. At the door she turned back once. The flat held its breath. She let it.`,
    question: "How does the composer use language techniques to convey ideas about grief? (4 marks)"
  },
  {
    theme: "freedom",
    text: `After twenty-two years of school pickups and packed lunches and being needed in the particular, relentless way of children, the youngest had left for university and she stood in the kitchen on a Tuesday morning with nowhere to be. The silence was enormous. She made coffee slowly, experimentally, as if trying out a new body. By Thursday she had booked a flight. By Saturday she was in a city she had always meant to visit, in a small hotel room with a view of the water, eating dinner alone at a restaurant she had chosen entirely for herself. She was surprised by how light she felt. She had not known she was carrying all that weight.`,
    question: "How does the composer use language techniques to convey ideas about freedom? (4 marks)"
  },
  {
    theme: "courage",
    text: `She had been sober for eleven months when she walked into the reunion. The room was full of people she had last seen drunk, most of them holding drinks, and for the first ten minutes she stood near the door and ran the arithmetic of exit. Then someone called her name — genuinely pleased, not performing it — and she walked toward that voice instead. She drank sparkling water all night. She was the most present she had ever been in a room full of people. Courage, she had learned, was not the absence of the urge to run. It was going toward the voice anyway.`,
    question: "How does the composer use language techniques to convey ideas about courage? (4 marks)"
  },
  {
    theme: "silence",
    text: `He had been a talker his whole life — first to fill the silence, then from habit. After the stroke took his speech, he sat in his chair and let the world come to him in a new way. He heard things he'd talked over for sixty years: the specific note of his wife's footsteps approaching, the difference between rain on the roof and rain on the windows. His grandchildren sat with him differently now, no longer waiting for a pause in his stories but simply being still, which was something they had not known how to do. He found that silence was not what he had feared. It was a language he was only beginning to learn.`,
    question: "How does the composer use language techniques to convey ideas about silence? (4 marks)"
  },
  {
    theme: "loss",
    text: `The country she had grown up in had changed its name, redrawn its borders, replaced its currency. When she returned after forty years, she found a place that remembered her geography but not her history — the roads were familiar, the hills were familiar, but the signs read differently and the shops were different shops and the people she had known were either gone or old in ways that she recognised with a jolt as her own age reflected back at her. She had thought she was returning. She found instead that the place she had carried inside her all these years existed only there, in the interior, unchanged and irretrievable.`,
    question: "How does the composer use language techniques to convey ideas about loss? (4 marks)"
  },
  {
    theme: "belonging",
    text: `The choir rehearsed on Wednesday nights in a church hall that smelled of damp hymnbooks and old varnish. Leo had joined because his therapist suggested it, not because he could sing, which he could not do particularly well. But there was something in the act of opening your mouth alongside thirty other mouths and making a sound that was bigger than any one of you — something that felt, briefly, like being part of the same body. He stood in the tenor section each week and sang slightly flat and nobody minded, and for two hours he was not a man who had been struggling. He was simply someone who showed up, and that was enough.`,
    question: "How does the composer use language techniques to convey ideas about belonging? (4 marks)"
  },
  {
    theme: "change",
    text: `The river had been different every time she'd come back — wider one year, narrower another, once so low after the drought that you could see the old ford stones her grandfather had pointed out when she was a girl. This year it was high and fast, the colour of tea, eating at the bank on the far side. She stood on the bridge and watched it do what it had always done: ignore her, ignore the town, carry its own concerns south toward the sea. She had thought of the river as permanent, the way children think of geography. It had been changing the whole time, indifferent to her impressions of it.`,
    question: "How does the composer use language techniques to convey ideas about change? (4 marks)"
  },
  {
    theme: "hope",
    text: `The classroom had twenty-seven students and one working heater and textbooks that were older than some of the children using them. Ms Torres had been teaching here for eight years and had learned to work with what she had, which included the particular genius of children who had been told to expect less. She watched them every day — their hunger for information, their delight at being surprised by facts — and thought: this is where it starts. Not in the buildings or the budgets but here, in the space between a question and its answer, in the moment a child's face changes because the world has just become slightly bigger than it was.`,
    question: "How does the composer use language techniques to convey ideas about hope? (4 marks)"
  },
  {
    theme: "memory",
    text: `The town where she grew up was underwater now, flooded by the dam they had built when she was twelve, the year she had also discovered that adults made decisions that rearranged childhoods without asking the children. She thought of it sometimes — not with bitterness but with a strange kind of tenderness for the streets that no longer existed, the school that had been dismantled brick by brick, the river that had become a lake. The town existed intact in her memory, perfectly preserved, never aging. Underwater, she imagined it, still and green and dim — a childhood in amber, kept safe in the only way possible.`,
    question: "How does the composer use language techniques to convey ideas about memory? (4 marks)"
  },
  {
    theme: "resilience",
    text: `The cyclone had taken the roof and the car and a tree through the side of the shed. It had left behind the walls, the family, and a neighbour's trampoline wedged in the mango tree. In the days after, they worked in the way that disaster teaches you — without discussion, dividing tasks by whoever had energy and skill for them. The children were very good at sorting. Her husband was methodical with insurance forms. She kept everyone fed. It was not elegant. It was not brave. It was just the ordinary mechanism of people who have no other option but to keep going, and who keep going anyway.`,
    question: "How does the composer use language techniques to convey ideas about resilience? (4 marks)"
  },
  {
    theme: "isolation",
    text: `The city she had moved to for the job was large enough that she could go a full week without making eye contact with anyone who knew her name. She had thought she wanted this — the anonymity, the freedom of being nobody's anything. By winter she understood that invisible and free were not the same thing. She stood in queues and walked through crowds and sat in cafes among the noise of other people's connections, and was aware of herself as a figure in a painting that had been completed without her — placed there as atmosphere, not story. She signed up for a pottery class on a Thursday and made a bowl that looked like nothing in particular.`,
    question: "How does the composer use language techniques to convey ideas about isolation? (4 marks)"
  },
  {
    theme: "connection",
    text: `She had lived next to Mrs Papadopoulos for six years without knowing her first name. They exchanged the nodding kind of friendliness, the brief weather remarks, the occasional taking in of parcels. It was her daughter who broke the pattern, befriending the old woman's cat, then the old woman, then dragging them all into a kind of accidental community. By summer there were Sunday afternoon teas in the shared driveway — small sandwiches, strong coffee, the cat asleep on a warm brick. She learned that her neighbour's name was Dimitra, that she had been a nurse, that she missed her husband every single day. Six years. Nodding distance. What else were they missing?`,
    question: "How does the composer use language techniques to convey ideas about connection? (4 marks)"
  },
  {
    theme: "grief",
    text: `She had not believed in ghosts until the first anniversary, when she smelled his aftershave in the hallway at seven in the morning and stood very still, holding her breath, not wanting to disturb it. The smell faded after a moment. She stood a while longer. She was not a superstitious woman and she did not revise her beliefs, but she kept the moment — held it carefully in a part of her that did not require explanation. Grief, she was learning, did not resolve itself into reason. It simply became something you carried more gracefully, the way a river carries its silt — bearing it forward without letting it settle.`,
    question: "How does the composer use language techniques to convey ideas about grief? (4 marks)"
  },
  {
    theme: "identity",
    text: `At the border, the officer held her passport and looked at her face and looked at the passport and looked at her face again. The photograph was twelve years old. She understood the problem. She was a different person now in the ways that photographs reveal — the haircut, the weight, the expression a decade of living had settled into. But also in the ways photographs cannot show: the language she had added, the country she had claimed, the children who had changed the geometry of her body and her heart. She was and was not the woman in the photograph. Both of them were her. She explained this, and the officer stamped the passport, and she walked through.`,
    question: "How does the composer use language techniques to convey ideas about identity? (4 marks)"
  },
  {
    theme: "time",
    text: `The old cemetery at the edge of town was her favourite walking route, which she had stopped apologising for. The headstones mapped out the long argument of years — the brief lives and the long ones, the children and the centenarians, the dates that spanned wars and pestilences. She read them the way others read history books, with the specific interest of someone who understood she was also moving through time, also heading somewhere. She found it clarifying rather than frightening. There was comfort in the company of the long dead: they had worried and hoped and argued and loved, and the world had continued regardless, and she was part of that continuance.`,
    question: "How does the composer use language techniques to convey ideas about time? (4 marks)"
  },
  {
    theme: "freedom",
    text: `He had been retired for three weeks when he started running. Not jogging — running, badly, in the direction of no particular goal. At sixty-two his knees had opinions, and he listened to some of them and overruled the rest. The first morning he made it to the end of the street. By the fourth week he was making it to the park and back. Nobody was timing him. Nobody was grading him. He ran at whatever pace his body suggested, through whatever weather arrived, and discovered that movement without a destination was its own kind of destination. He had spent forty years arriving at things. It turned out he had missed the going.`,
    question: "How does the composer use language techniques to convey ideas about freedom? (4 marks)"
  },
  {
    theme: "loneliness",
    text: `The online booking said table for two and she almost changed it but didn't, and the restaurant almost said something but didn't, and she sat at the table that was slightly too wide for one and ordered for herself and ate a good meal slowly and watched the room fill and empty around her. A couple at the next table had run out of things to say and were looking at their phones. She thought: everyone is alone in the way that matters, and then she thought: that's the kind of thing you think when you're alone at a table for two, and it's not quite true. She ordered dessert. It was good. She would come back.`,
    question: "How does the composer use language techniques to convey ideas about loneliness? (4 marks)"
  },
  {
    theme: "courage",
    text: `The asylum interview lasted two hours. He answered every question in a room with strip lighting and a table between him and the official and a translator who was tired. He spoke of things he had never spoken of, in a language he had been learning for nine months, through another person's voice. He had prepared for this. He had rehearsed the words. But the words, spoken aloud in this room, became more than rehearsal — they became witness. When it was over he sat in the waiting room and his hands shook and he let them shake. He had told the truth. He could not control what happened next. He had told the truth.`,
    question: "How does the composer use language techniques to convey ideas about courage? (4 marks)"
  },
  {
    theme: "silence",
    text: `After the diagnosis, her children spoke to her carefully, selecting words like fruit — only the good ones, nothing bruised. She appreciated the intention and found it exhausting. What she wanted was ordinary conversation: complaints about the weather, arguments about dinner, the thoughtless, ordinary music of a family that has forgotten to be careful. One evening her youngest forgot and started an argument about something trivial — television, dishes — and she felt such relief she could have wept. This. The ordinary noise of being alive together. The silence around her illness was its own kind of isolating, and she was grateful to be briefly, noisily, ordinarily normal.`,
    question: "How does the composer use language techniques to convey ideas about silence? (4 marks)"
  },
  {
    theme: "belonging",
    text: `She had moved fourteen times in thirty years — cities, countries, hemispheres — and had become very good at arriving. She knew the choreography: the temporary housing, the local supermarket, the café where the wifi was reliable. What she had not become good at was the thing that comes after arriving, the slow work of letting a place become yours. This time she stayed. She planted bulbs in autumn that she would not see flower until spring, which was a kind of promise to herself and to the ground. When spring came and the flowers came with it, she stood at the kitchen window and thought: there. I live here now. And meant it.`,
    question: "How does the composer use language techniques to convey ideas about belonging? (4 marks)"
  },
  {
    theme: "loss",
    text: `The piano in the front room had not been played since his daughter left for university, and that had been three years ago. It sat with the lid down, acquiring a thin film of respectful dust, the sheet music still open on the stand at the last piece she had practised. He passed it every day without touching it. Not because he was sad — or not only that — but because the piano belonged to a version of the house that had a teenager in it, and opening the lid felt like admitting that version was over. One Saturday morning he sat down, opened it, pressed a single key, and let the note ring out into the changed house until it faded.`,
    question: "How does the composer use language techniques to convey ideas about loss? (4 marks)"
  },
  {
    theme: "memory",
    text: `The illness was stealing his mother's past in no particular order, which was the strangest part — not a steady retreat but a random one, whole decades intact while yesterday vanished. She would speak with perfect clarity about her wedding, about her parents' house, about a dog she'd had at seven, and then ask him twice in the same hour what his name was. He answered each time without impatience, because each time she asked she did not know she had asked before, and she deserved the same son each time, patient and present, as if the question were always new.`,
    question: "How does the composer use language techniques to convey ideas about memory? (4 marks)"
  },
  {
    theme: "change",
    text: `Her handwriting had changed — she noticed it looking back through old journals, the shift gradual but unmistakeable, the looping cursive of her twenties giving way to something more angular, more deliberate. She wondered what had changed in her that her hand had recorded without her knowing. Handwriting, she had read once, reveals the self. She looked at both versions side by side: the old one reaching forward eagerly, the new one careful, choosing where it put itself on the page. She was not sure which version she preferred. She was not sure the preference was hers to have. The hand knew things the mind was still working out.`,
    question: "How does the composer use language techniques to convey ideas about change? (4 marks)"
  },
  {
    theme: "hope",
    text: `The bee arrived in the garden on a morning in early October, the first she had seen all season. She stopped weeding and watched it work the lavender — methodical, intent, entirely without awareness of her watching. Last year there had been none. She had read the articles, planted the things the articles recommended, and waited. This bee was not an answer to the crisis. It was one bee. But it was one bee more than yesterday, and she counted it with the careful attention of someone who has learned to treat small signs with large respect. More would come, or they wouldn't. She planted another row of lavender.`,
    question: "How does the composer use language techniques to convey ideas about hope? (4 marks)"
  },
  {
    theme: "resilience",
    text: `He had learned English at fifty-three, which was harder than anyone who had not done it could imagine. The letters behaved differently than the ones he had grown up with, and the words refused to sit still in his memory the way they had in his first language. He studied at the kitchen table every night after his shift, his reading glasses on, the dictionary open, correcting his exercises in red pen like his own stern teacher. Three years later he was reading the newspaper without looking up words. He never read it without thinking of the man at the kitchen table who had decided: I will do this. This is a thing that I will do.`,
    question: "How does the composer use language techniques to convey ideas about resilience? (4 marks)"
  },
  {
    theme: "isolation",
    text: `The new suburb had footpaths and streetlights and houses with double garages, and she had not met a single neighbour in four months. People arrived in cars and disappeared inside their houses and appeared again in cars. The street had the quality of a stage set between scenes — present but unoccupied, waiting for something to happen. She baked a cake on a Sunday and carried it three doors down on a plate she was prepared to lose, knocked, and waited. The door opened a cautious amount. A woman about her age looked out. She held up the cake. The door opened wider. This was, she thought, an act of some small courage. It was worth it.`,
    question: "How does the composer use language techniques to convey ideas about isolation? (4 marks)"
  },
  {
    theme: "connection",
    text: `The pen pal letters had started as a school project and continued long after school ended, across thirty-seven years and seven countries between them. They had never met. They had attended each other's weddings by post, mourned each other's losses in handwriting, celebrated children and grandchildren through photographs sent in padded envelopes. Some years the letters came monthly, some years only at Christmas. But they came. The particular consistency of that — the ongoing fact of being known by someone across such distances — was something neither of them could quite name, but both of them understood to be among the most important things in their lives.`,
    question: "How does the composer use language techniques to convey ideas about connection? (4 marks)"
  },
  {
    theme: "identity",
    text: `She had been playing the same character for so long that some mornings she woke up uncertain of the distance between herself and it. The role asked for confidence she synthesised, warmth she manufactured, certainty she did not possess. She was good at it. The applause said so. But backstage, between scenes, she sat very still and tried to locate the part of herself that existed when no one was watching. It was there — she could feel it, quiet and consistent, the unchanged thing at the centre of all the performance. She had not lost herself. She had simply learned to carry herself lightly through all the versions the world required.`,
    question: "How does the composer use language techniques to convey ideas about identity? (4 marks)"
  },
  {
    theme: "time",
    text: `The summer she was sixteen lasted longer than all the summers since. She knew this was physics — the relativity of boredom and saturation — but it didn't feel like physics. It felt like that summer had been granted extra hours, like the days had been more generous with themselves, like the light had stayed longer out of kindness. At thirty-eight she went back to the beach where she had spent it and stood at the water's edge and tried to feel sixteen. The water was the same. The sky was the same. The time was entirely different. She swam anyway, and the cold water was at least the same cold water, and that was something.`,
    question: "How does the composer use language techniques to convey ideas about time? (4 marks)"
  },
  {
    theme: "freedom",
    text: `The diagnosis had expected to be a door closing, and instead it was a door opening — sideways, to a room she had not known existed. She had been told she might not walk long distances again, and in the grief of that she found, strangely, relief: permission to stop trying to be everything she had been told to be. She bought a garden. She learned to paint. She sat in the mornings without the particular guilt of someone who is not being productive enough. The life she was living now was smaller by some measures and by others immeasurably larger, and she was learning to love its different proportions.`,
    question: "How does the composer use language techniques to convey ideas about freedom? (4 marks)"
  },
  {
    theme: "loneliness",
    text: `He had seventeen thousand followers and could not name a single person he would call at midnight if something went wrong. He had thought about this recently, in the way you think about things at three in the morning when the metrics are good and the room is quiet. The number kept climbing. He kept responding to comments in the voice of the version of himself that was easy to like. Somewhere between the posting and the responding he had misplaced the person who had nothing to broadcast — the person who was just a person, requiring nothing from the audience, responsible to no one but himself. He was not sure where to look for him.`,
    question: "How does the composer use language techniques to convey ideas about loneliness? (4 marks)"
  },
  {
    theme: "courage",
    text: `The manuscript had been in the drawer for two years. She took it out on a Saturday morning with the deliberateness of someone who has made a decision and is trying to honour it before the resolve fades. She read the first chapter. It was better than she remembered and worse than she needed it to be. She sent it anyway — to one agent, with a letter she had rewritten fourteen times. The rejection came in six weeks. She sent it to another. Courage was not the belief that it would work. It was the sending of the thing regardless. She learned this slowly. The sending kept happening. Eventually something answered.`,
    question: "How does the composer use language techniques to convey ideas about courage? (4 marks)"
  },
  {
    theme: "silence",
    text: `The mountain demanded silence, and she gave it. For three days she hiked without speaking to anyone, which was easier than she had expected and harder in the ways that mattered. The mind, deprived of conversation, turns inward, and the inward was where she had been avoiding going. By the second day she had run out of distractions and was simply walking, simply breathing, simply present in the particular way that silence insists on. Things she had been outrunning caught up with her on the second afternoon and she sat on a rock and let them. The mountains were indifferent and very old and they had seen this before. She was grateful for their indifference.`,
    question: "How does the composer use language techniques to convey ideas about silence? (4 marks)"
  },
  {
    theme: "loss",
    text: `The city they had both loved had changed beyond recognition in ten years, and she walked it with a map that no longer matched the territory. The bookshop was a gym. The cinema was flats. The park where they had eaten sandwiches on summer lunches was intact but occupied by strangers living their own versions of that afternoon. She had come back thinking she could retrieve something, and she was retrieving only the evidence of its absence. This was loss operating at a different scale than she was used to: not a person but a time, not a thing but the world those things had existed inside. She took a photograph of the gym and went home.`,
    question: "How does the composer use language techniques to convey ideas about loss? (4 marks)"
  },
  {
    theme: "belonging",
    text: `He had spent his whole career moving between teams — always the new one, always proving himself, always reading the room before risking a joke. When he was transferred for the seventh time he arrived at the new office with his usual careful neutrality, ready to start again. But on his third day, someone left a coffee on his desk with a note that said: flat white, right? He had mentioned it once, in passing, to someone whose name he barely knew. He sat and looked at the coffee and thought: someone noticed. Someone kept it. He drank it while it was hot and felt, for the first time in a long time, like someone who might stay.`,
    question: "How does the composer use language techniques to convey ideas about belonging? (4 marks)"
  },
  {
    theme: "change",
    text: `The baby had not asked to change everything, but she had, which was the nature of the arrangement. The person Elena had been before — the one with opinions about restaurants and eight hours of sleep and plans that stretched past next week — had not disappeared but had been folded up and put somewhere safe, to be retrieved in pieces over the coming years. She was someone's mother now, which turned out to be both smaller and larger than she had imagined. Smaller because it was so immediate, so physical, so particular. Larger because it had relocated her centre of gravity to somewhere outside herself, and that, she was finding, changed everything else.`,
    question: "How does the composer use language techniques to convey ideas about change? (4 marks)"
  },
  {
    theme: "hope",
    text: `The refugee camp had been temporary for five years. In the fifth year a teacher arrived and turned a storage shed into a classroom and the children came, because children come to learning the way plants come to light — not because they decide to but because they are made for it. He taught mathematics and whatever else was needed. He brought books and then more books. One of his students, who had not spoken for eight months when he arrived, began to solve equations on the whiteboard with a concentration that seemed almost defiant. Education, he thought, watching her work, is the argument that tomorrow exists. She was making it loudly, in numbers.`,
    question: "How does the composer use language techniques to convey ideas about hope? (4 marks)"
  },
  {
    theme: "resilience",
    text: `The farm had been in the family for four generations and had survived drought and fire and a market that had done its best to make small farms impossible. Her grandmother had kept it through the Depression by growing what they could eat and bartering the rest. Her mother had diversified into tourism in the nineties when the wool price collapsed. Now it was her turn, and the new problem had a different name but the same basic shape: change or vanish. She had been up since four, reading about carbon sequestration. She had her grandmother's stubbornness and her mother's adaptability. The land was still good. So was she.`,
    question: "How does the composer use language techniques to convey ideas about resilience? (4 marks)"
  },
  {
    theme: "isolation",
    text: `The island was beautiful and she had been here by choice and by the end of the second month she would have traded all of its beauty for a conversation that didn't require a satellite connection. The sea was extraordinary. She photographed it constantly, having no one to show the photographs to in real time. The silence was the silence of a place that did not know her, did not care about her particular noise, had been doing this — waves, wind, tides — for longer than her species had been lonely. She wrote in her journal every night. She talked to the birds, who were interested in her food and otherwise declined engagement.`,
    question: "How does the composer use language techniques to convey ideas about isolation? (4 marks)"
  },
  {
    theme: "connection",
    text: `The sign-language class had twenty students and a teacher who communicated entirely in the language she was teaching, which was either brave or impossible and turned out to be both. In the second lesson, a woman across the room made a sign and smiled, and something in the awkwardness of the exchange — both of them uncertain, both of them reaching — felt more genuine than a year's worth of polished conversation. They went for coffee after class and fumbled between written notes and phones and tentative signs, and laughed at how much effort ordinary communication could take. By the end of the term they had built something. They had built it word by careful word.`,
    question: "How does the composer use language techniques to convey ideas about connection? (4 marks)"
  },
  {
    theme: "grief",
    text: `The first Christmas without her felt like a play they were all performing badly, everyone in costume, no one knowing their lines. They had agreed to keep the traditions — the same meal, the same table, the same bad crackers — and the familiarity of the ritual was both comforting and devastating. Her chair was there. Nobody sat in it and nobody said why. Her name appeared and was retrieved by the person who'd said it, quick apology, a pause. They ate the meal. They pulled the crackers. Somebody cried in the kitchen and somebody else followed them in, and the door closed quietly, and outside the table held the fact of her absence like a kept promise.`,
    question: "How does the composer use language techniques to convey ideas about grief? (4 marks)"
  },
  {
    theme: "identity",
    text: `The interview asked who she was and she had never been less sure. The question on the application form — describe yourself in three words — had stopped her for fifteen minutes, not because she didn't know the answers but because the answers kept changing depending on which room she was standing in. Daughter. Scientist. Immigrant. Amateur baker of adequate bread. Person who cries at films nobody else finds sad. She wrote three professional words and submitted the form and was offered the job and accepted it, and on the first day she walked in carrying all her unofficial adjectives inside her like luggage she hadn't declared at customs.`,
    question: "How does the composer use language techniques to convey ideas about identity? (4 marks)"
  },
  {
    theme: "time",
    text: `She visited the street she had grown up on once every ten years, which was frequent enough to track the changes and infrequent enough to be shocked by them. The oak tree at the corner was enormous now — she had climbed it as a child. The houses had been repainted in colours that were different but rhymed with the colours she remembered. The families inside were entirely different families. She stood on the pavement with the particular vertigo of someone who is in two times simultaneously — the past and the present overlapping, the child she had been walking through a street that was and was not the same street. She was and was not the same person. She walked on.`,
    question: "How does the composer use language techniques to convey ideas about time? (4 marks)"
  },
  {
    theme: "freedom",
    text: `Prison had taught her what she had not known she needed to learn: that the self is not the same as the circumstances, that freedom is interior before it is exterior, that a person can maintain something incorruptible at the centre even when everything surrounding it is taken away. Walking out through the gates she had not run. She had stood for a moment and breathed the open air, which tasted different from the air inside, which had the particular taste of contingent things. She had a bag and an address and a plan and a self that had survived. That last one was the most important. She walked toward the bus stop with it intact.`,
    question: "How does the composer use language techniques to convey ideas about freedom? (4 marks)"
  },
  {
    theme: "loneliness",
    text: `She had not told anyone about the test results, not yet. She carried them in her pocket like a stone, moving through her day — the supermarket, the dry cleaner, a conversation about nothing with the woman at the desk — and nobody knew. The knowing was enormous and she was the only one inside it. She sat on a bench in the park in the afternoon and watched dogs and their owners and children and their parents and couples and solitary runners, and thought about how each of them was also inside something that nobody around them knew. Loneliness, she thought, was not the absence of people. It was having something too large for the available containers.`,
    question: "How does the composer use language techniques to convey ideas about loneliness? (4 marks)"
  },
  {
    theme: "courage",
    text: `She had been invisible her whole life by choice — the quiet one, the agreeable one, the one who made herself easy to overlook. At the council meeting, when they voted on the development that would destroy the wetlands her daughter had grown up exploring, she had raised her hand and then, when called upon, had stood and spoken for seven minutes without notes, clearly, specifically, and at volume. Her voice had shaken at the start and steadied. The vote still went the wrong way. But she had stood and spoken, and on the way home her daughter, who was eleven, had held her hand and said: I didn't know you could do that. She hadn't either. Now she did.`,
    question: "How does the composer use language techniques to convey ideas about courage? (4 marks)"
  }
  ,{
    theme: "silence",
    text: `The surgery waiting room had a television mounted high on the wall, the volume muted, subtitles rolling beneath images of weather and politics. Nobody watched it. They were all watching their own interior screens — replaying the morning's events, rehearsing the afternoon's possibilities. The room held its collective breath in a way that had nothing to do with sound and everything to do with suspension: twelve people paused between one version of their life and the next, waiting to find out which story they were in. A child in the corner coloured in a book without looking up, indifferent to the stakes, and her crayon on the paper was the only sound that anyone noticed.`,
    question: "How does the composer use language techniques to convey ideas about silence? (4 marks)"
  }
];
