const mongoose = require('mongoose')
require('dotenv').config()

const CatFact = require('./models/CatFact')

const facts = [
    {
        title: 'The sweet taste mystery',
        fact: 'Cats lack a functioning sweet taste receptor, meaning they cannot detect sweetness in the way humans do.',
        more: `The reason lies in their genes. One part of the receptor normally responsible for detecting sweet tastes is non-functional in cats. But cats haven't lost their sense of taste altogether: research suggests they are particularly responsive to savoury, meat-associated flavours called umami.`,
        category: 'Biology and Nutrition'
    },
    {
        title: 'The importance of taurine',
        fact: 'Cats cannot produce enough taurine themselves, so they must obtain this essential nutrient through their diet.',
        more: `Taurine is important for several bodily functions, including normal heart function, vision and reproduction. Cats also lose some taurine through their normal digestive processes, which contributes to their dietary requirement.`,
        category: 'Biology and Nutrition'
    },
    {
        title: 'Why carrots aren’t enough',
        fact: 'Cats cannot convert plant-based beta-carotene into enough vitamin A to meet their nutritional needs.',
        more: `Many animals can convert beta-carotene, the pigment found in foods such as carrots, into vitamin A. Cats have very limited ability to do this because they lack sufficient activity of an important enzyme in that process. They therefore need preformed vitamin A in their diet.`,
        category: 'Biology and Nutrition'
    },
    {
        title: 'A metabolism that stays switched on',
        fact: 'A cat’s body doesn’t adjust its protein-processing machinery to lower protein intake as readily as many other animals do.',
        more: `Cats maintain relatively high activity of certain enzymes involved in breaking down amino acids and processing nitrogen. This metabolic adaptation is thought to contribute to their relatively high dietary protein requirements.`,
        category: 'Biology and Nutrition'
    },
    {
        title: 'Why most calico cats are female',
        fact: 'Most calico cats are female because the genes responsible for orange and black fur are located on the X chromosome.',
        more: `Female cats usually have two X chromosomes. When one carries the orange-colour version and the other carries the non-orange version, different groups of skin cells switch off different X chromosomes. This creates the characteristic patches of orange and black. The white areas are controlled by separate genes. Male calico cats are rare, often because they have an unusual chromosome arrangement.`,
        category: 'Genetics and Appearance'
    },
    {
        title: 'The secret behind tabby stripes',
        fact: 'Tabby isn’t a breed of cat. It’s a coat pattern controlled by genes that influence how pigment is distributed in the fur.',
        more: `There are several familiar tabby patterns, including mackerel stripes, broad classic swirls and ticked coats. Different genetic variations influence these patterns, which is why tabby cats can look so different from one another.`,
        category: 'Genetics and Appearance'
    },
    {
        title: 'When white fur and hearing are connected',
        fact: 'The genes responsible for some white coat patterns in cats are also associated with congenital deafness.',
        more: `Certain genetic changes affecting pigmentation can also influence the development of the inner ear. White cats with blue eyes have a higher likelihood of congenital deafness, although not every white or blue-eyed cat is affected.`,
        category: 'Genetics and Appearance'
    },
    {
        title: 'The colour-changing secret of pointed cats',
        fact: 'In colourpoint cats, such as Siamese cats, a temperature-sensitive enzyme affects where dark pigment develops in the fur.',
        more: `The enzyme involved in producing melanin works more effectively in cooler areas of the body. This is why the ears, face, paws and tail tend to develop darker colouring, while the warmer central body remains lighter.`,
        category: 'Genetics and Appearance'
    },
    {
        title: 'The wild ancestor of domestic cats',
        fact: 'Every domestic cat traces its ancestry to the African wildcat, Felis lybica.',
        more: `This small wild feline lives across parts of Africa and the Near East. Genetic research has identified it as the ancestor of today's domestic cats. Exactly where and when the domestication process began is still being investigated, but the African wildcat is the starting point of the story.`,
        category: 'History and Evolution'
    },
    {
        title: 'The farming connection',
        fact: 'Cats began living alongside human communities thousands of years ago, long before they became the familiar household companions we know today.',
        more: `Early farming communities stored grain, which attracted rodents. Wildcats were drawn to these settlements because they offered opportunities to hunt. Archaeological discoveries in China have also revealed cats living near farming communities around 5,000 years ago, with evidence that they had been eating food from human settlements.`,
        category: 'History and Evolution'
    },
    {
        title: 'A cat on the Silk Road',
        fact: 'A domestic cat found at an ancient trading settlement in Kazakhstan lived approximately 1,100–1,250 years ago.',
        more: `Its remains were discovered at Dzhankent, a settlement along a northern Silk Road route. The cat had suffered several serious injuries and dental problems but survived for a considerable time. Researchers believe human care probably helped it survive, offering an unusual glimpse into the relationship between people and cats in medieval Central Asia.`,
        category: 'History and Evolution'
    },
    {
        title: 'Cats’ journey into Europe',
        fact: 'A major 2025 genetic study found evidence that domestic cats spread into Europe from North Africa around 2,000 years ago.',
        more: `Researchers analysed ancient cat genomes and found that the domestic cats that became established across Europe arrived much later than previously thought. Their spread was probably helped by maritime trade and Roman-era travel, as cats accompanied people and their goods. This research challenges the older theory that domestic cats spread into Europe alongside Neolithic farmers.`,
        category: 'History and Evolution'
    },
    {
        title: 'Remembering a single experience',
        fact: `Cats have demonstrated that they can remember details about an experience even when they weren't expecting to be tested on it.`,
        more: `In a scientific experiment, cats explored several containers containing food. After a 15-minute break, researchers tested what they remembered. The cats were able to use information about which containers had contained uneaten food, even though they hadn't been told to remember it. This suggests cats can form memories of individual experiences without deliberately trying to learn them.`,
        category: 'Neurology and the Brain'
    },
    {
        title: 'A brain with two sides',
        fact: 'Cats can develop a preference for using one front paw more than the other, a behaviour linked to differences in how the two sides of the brain function.',
        more: `This is known as lateralisation. The left and right brain hemispheres have some specialised functions, and research has found that individual cats can show consistent preferences for one paw. Interestingly, there isn't one universal preferred paw across all cats.`,
        category: 'Neurology and the Brain'
    },
    {
        title: 'The brain’s balance system',
        fact: 'Cats have a specialised balance system inside their inner ears that helps their brains keep track of movement and orientation.',
        more: `This system is called the vestibular system. It contains fluid-filled canals and tiny sensory structures that detect changes in head movement and position. Information travels to the brain, helping coordinate posture, balance and eye movements.`,
        category: 'Neurology and the Brain'
    },
    {
        title: 'The automatic mid-air adjustment',
        fact: 'Cats have an automatic righting reflex that helps them turn their bodies towards a feet-down position when they fall.',
        more: `Their nervous system combines information about body position and movement, then coordinates adjustments of the head, spine and limbs. The inner ear's balance system contributes to this remarkable response. However, the reflex doesn't guarantee a safe landing, and falls can still cause serious injuries.`,
        category: 'Neurology and the Brain'
    },
    {
        title: 'The mystery of disappearing objects',
        fact: 'Cats can understand that an object may still exist even when it disappears from view.',
        more: `This ability is called object permanence. In experiments, cats have been tested by watching toys being hidden inside containers and then searching for them. Research suggests cats can manage some hidden-object tasks, although more complex tests have produced mixed results. Scientists are still investigating just how far this ability extends.`,
        category: 'Psychology and Cognition'
    },
    {
        title: 'A sense for more',
        fact: 'Cats can distinguish between different quantities of food, particularly when the difference between the amounts is large enough.',
        more: `In experiments, cats have shown a preference for a larger amount of food when the difference was substantial. However, researchers found that cats may rely partly on the overall amount or size of the food rather than counting individual pieces. So cats appear capable of judging quantities, but that doesn't necessarily mean they count in the way humans do.`,
        category: 'Psychology and Cognition'
    },
    {
        title: 'Your cat knows its name',
        fact: 'Cats can distinguish the sound of their own names from other spoken words, even when an unfamiliar person says them.',
        more: `In a 2019 study, researchers played recordings of people saying different words and names to cats. The cats showed a stronger response when they heard their own names than when they heard general nouns or, in some cases, the names of other cats. This suggests they learn to recognise the particular sound of their names, although it doesn't necessarily mean they understand names as humans do.`,
        category: 'Psychology and Cognition'
    },
    {
        title: 'Following a human’s pointing finger',
        fact: 'Cats can use human pointing gestures to help locate something they cannot see directly.',
        more: `In experiments, cats have been presented with two possible hiding places for food. Researchers used pointing gestures to indicate the correct location, and cats were able to use these cues to make their choice. A 2023 study with rescue cats found that they performed above chance when following different types of pointing gestures. This suggests cats can interpret at least some of our visual signals to find information.`,
        category: 'Psychology and Cognition'
    },
    {
        title: 'The floating collarbone',
        fact: `Cats have tiny collarbones that aren't connected to the rest of their skeleton by joints.`,
        more: `A cat's collarbones, also called clavicles, are small and rudimentary compared with human collarbones. They sit within the muscles near the shoulders rather than forming a rigid connection between the shoulder blades and the chest. This arrangement allows the shoulders to move freely as cats walk, run and squeeze through narrow spaces.`,
        category: 'Anatomy and Physiology'
    },
    {
        title: 'A tongue covered in tiny hooks',
        fact: 'A cat’s tongue is covered in hundreds of tiny, backward-facing hooks made of keratin, the same tough material found in claws and hair.',
        more: `These structures are called filiform papillae. Their rough, hook-like shape helps cats comb through their fur while grooming. Research has also revealed that the papillae have tiny hollow tips that draw up saliva and transfer it deep into the coat. It's a remarkably specialised grooming tool!`,
        category: 'Anatomy and Physiology'
    },
    {
        title: 'Cats have different blood types',
        fact: 'Cats have three main blood types in the AB blood group system: A, B and AB.',
        more: `Just like humans, cats have different blood group markers on their red blood cells. Type A is the most common, while type B is more frequent in certain breeds and type AB is rare. These differences matter enormously during blood transfusions: incompatible blood can trigger a serious immune reaction, so cats need blood typing and compatibility checks before receiving a transfusion.`,
        category: 'Anatomy and Physiology'
    },
    {
        title: 'How cats keep cool',
        fact: 'Cats have sweat glands mainly on their paw pads, so sweating plays only a minor role in regulating their body temperature.',
        more: `Unlike humans, cats cannot cool themselves by sweating across most of their skin. They primarily rely on other methods, including spreading saliva over their fur through grooming and panting when necessary. You might even notice damp paw prints when a cat is warm or excited!`,
        category: 'Anatomy and Physiology'
    }
]

const seedFacts = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)

        await CatFact.deleteMany({})
        await CatFact.insertMany(facts)

        console.log('24 cat facts inserted successfully!')

    } catch (error) {
        console.error('Error seeding cat facts:', error)
    } finally {
        await mongoose.connection.close()
    }
}

seedFacts()