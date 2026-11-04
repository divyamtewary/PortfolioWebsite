import { getImage } from '../lib/images'

const GITHUB = 'https://github.com/divyamtewary'

export const profile = {
  name: 'Divyam Tewary',
  github: GITHUB,
  telegram: '@divyam_tewary',
  telegramUrl: 'https://t.me/divyam_tewary',
  bio: "I'm Divyam. I like taking AI apart to see how it works, then building small tools around what I find.",
  displayAlt: 'A photo of me as a kid with my arms folded, with "No Risk, no Story" written across the top.',
}

// Each project maps to one public repository. `theme` sets the glow colours for its section,
// sampled from the banner artwork. `image` is the banner name in /images, `items[].image` the card name.
export const projects = [
  {
    id: 'side-projects',
    title: 'Side projects',
    headline: 'Small models, one question at a time.',
    question: 'Small experiments with small language models, each trying to answer one thing.',
    repoUrl: `${GITHUB}/side-projects`,
    language: 'Python',
    image: getImage('side_projects_banner'),
    imageAlt: 'Banner for Side projects: cream lettering over yellow city-map lines on dark green.',
    theme: { field: '#0F2107', ink: '#F5E6DC', accent: '#FFF200', glow: '#5B7A14' },
    summary:
      "This is where I try small ideas on ordinary hardware. Each project starts with a question I actually want answered. I build the simplest tool I can to look at it, then write down what it showed and where it fell short.",
    items: [
      {
        name: 'neural-observatory',
        image: 'card_neural_observatory',
        status: 'Available',
        description:
          'A CPU visualiser for a small transformer. I use it to watch what the model is doing layer by layer while it writes a reply.',
        url: `${GITHUB}/side-projects/tree/main/neural-observatory`,
      },
      {
        name: 'slm-evaluation-suite',
        image: 'card_slm_evaluation_suite',
        status: 'Available',
        description:
          'A desktop app for testing a small model on your own machine. It runs a set of checks, draws five charts and exports everything to PDF or DOCX.',
        url: `${GITHUB}/side-projects/tree/main/slm-evaluation-suite`,
      },
      {
        name: 'vocabulary-geometry-lab',
        image: 'card_vocabulary_geometry_lab',
        status: 'Planned',
        description: 'I want to see how a model narrows down its next word before it commits to one. Not started yet.',
        url: null,
      },
    ],
  },
  {
    id: 'development',
    title: 'Development',
    headline: 'Making models behave in real systems.',
    question: 'Notes and tools for running local models without the setup falling over.',
    repoUrl: `${GITHUB}/development`,
    language: 'Batchfile',
    image: getImage('development_banner'),
    imageAlt: 'Banner for Development: pale pink script over a moonlit city skyline.',
    theme: { field: '#0A1524', ink: '#FDEEF5', accent: '#FFC7DE', glow: '#2C4F7A' },
    summary:
      "Most of the hard part of working with AI isn't the model. It's the config, the glue code, and what happens when something breaks at the worst moment. This is where I keep the parts I've actually run, and broken.",
    items: [
      {
        name: 'llm-local-harness',
        image: 'card_llm_local_harness',
        status: 'Available',
        description:
          'A launcher and tuning log for running a quantised model on a laptop GPU. It lists the settings that helped, and the ones that made things worse.',
        url: `${GITHUB}/development/tree/main/llm-local-harness`,
      },
      {
        name: 'deterministic-graph-router',
        image: 'card_deterministic_graph_router',
        status: 'Planned',
        description:
          'A router for local decisions, where plain code picks the branches and the model only gets involved when it has to. Still on paper.',
        url: null,
      },
    ],
  },
  {
    id: 'research',
    title: 'Research',
    headline: 'Working through the maths until it clicks.',
    question: 'Machine learning ideas, worked out by hand and turned into pages you can click through.',
    repoUrl: `${GITHUB}/research`,
    language: 'HTML',
    image: getImage('research_banner'),
    imageAlt: 'Banner for Research: spaced pale serif capitals above layered blue-grey hills.',
    theme: { field: '#0B3144', ink: '#FDEEF5', accent: '#C9DBE8', glow: '#2F6F8F' },
    summary:
      'I read papers slowly and try to rebuild the argument myself. When an idea finally makes sense, I turn it into a small interactive page, so you can poke at it too.',
    items: [
      {
        name: 'Information Geometry of Softmax',
        image: 'card_information_geometry_of_softmax',
        status: 'Available',
        description:
          'An interactive companion to The Information Geometry of Softmax. It starts with what softmax does to a set of scores, then works up to KL divergence and Bregman geometry.',
        url: `${GITHUB}/research/tree/main/Information%20Geometry%20of%20Softmax`,
      },
    ],
  },
  {
    id: 'blog',
    title: 'Blog',
    headline: 'Notes on the work, whenever I get to them.',
    question: 'Short writing about what I build, what broke and what I took from it.',
    repoUrl: `${GITHUB}/blog`,
    language: null,
    image: getImage('blog_banner'),
    imageAlt: 'Banner for Blog: cream geometric blocks, contour lines and marbled textures on dark brown.',
    theme: { field: '#230F08', ink: '#FFF0F5', accent: '#F3C9B5', glow: '#7A4330' },
    summary:
      "I want to write about these projects, including the parts that didn't go to plan. The repository is set up and waiting. The first post is still in my head.",
    items: [
      {
        name: 'First post',
        image: 'card_first_post',
        status: 'Planned',
        description: 'Nothing is published yet. When the first one is ready, it will show up here.',
        url: null,
      },
    ],
  },
]

// Years only, as requested. Entries marked in the review notes need confirming.
export const journey = [
  { year: '2001', text: 'Born in Bihar.' },
  { year: '2002', text: 'Moved to Delhi. Grew up moving between Vaishali, Indirapuram and Noida.' },
  { year: '2017', text: 'Moved to Gurugram for class 11, where I live now.' },
  { year: '2024', text: 'Started wondering whether an AI could remember things about me.' },
  { year: '2026', text: 'Turned 25. Trying to turn more of my ideas into things people can actually use.' },
]

export const marqueeWords = [
  'Small language models',
  'Local inference',
  'Evaluation',
  'Runtimes',
  'Research notes',
  'Interactive tools',
]
