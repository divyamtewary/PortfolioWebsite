import { getImage } from '../lib/images'

const GITHUB = 'https://github.com/divyamtewary'

export const profile = {
  name: 'Divyam Tewary',
  github: GITHUB,
  bio: 'I build practical AI systems, explore how intelligence works, and turn difficult ideas into interactive tools.',
  displayAlt:
    'Divyam at about seven or eight years old, standing with arms folded in a pink shirt, with the words "No Risk, no Story" written across the image.',
}

// Each project maps to one public repository on the profile.
// `theme` colours are sampled from the banner artwork so every section
// feels like it belongs to its own image. `image` names are file names in /images.
export const projects = [
  {
    id: 'side-projects',
    title: 'Side projects',
    headline: 'Small models, sharp questions.',
    question: 'Focused experiments on small language models, each built around one concrete question.',
    repoUrl: `${GITHUB}/side-projects`,
    language: 'Python',
    image: getImage('side_projects_banner'),
    imageAlt: 'Side projects banner: the words "Side Projects" set in cream type over yellow city-map lines on a deep green field.',
    theme: { field: '#0f2107', ink: '#f5e6dc', accent: '#fff200' },
    summary:
      'A collection of deliberately narrow experiments for understanding, evaluating and building with small language models on ordinary hardware. Each project starts with a concrete question, builds the smallest useful instrument and states what the evidence does and does not show.',
    items: [
      {
        name: 'neural-observatory',
        image: 'card_neural_observatory',
        status: 'Available',
        description:
          'An interactive CPU visualiser for a small transformer. Logit lens predictions across layers, attention-head entropy, MLP sparsity, token entropy timelines and KV-cache telemetry.',
        url: `${GITHUB}/side-projects/tree/main/neural-observatory`,
      },
      {
        name: 'slm-evaluation-suite',
        image: 'card_slm_evaluation_suite',
        status: 'Available',
        description:
          'A Tkinter desktop app that runs a six-stage evaluation on a local or Hugging Face model, with live progress, five deterministic charts and PDF or DOCX export.',
        url: `${GITHUB}/side-projects/tree/main/slm-evaluation-suite`,
      },
      {
        name: 'vocabulary-geometry-lab',
        image: 'card_vocabulary_geometry_lab',
        status: 'Planned',
        description:
          'How a model moves through output-vocabulary space before a prediction stabilises, connecting layer-wise traces with information geometry.',
        url: null,
      },
    ],
  },
  {
    id: 'development',
    title: 'Development',
    headline: 'Systems that outlive the notebook.',
    question: 'Engineering local models, tools and control flow into systems that work beyond a demo.',
    repoUrl: `${GITHUB}/development`,
    language: 'Batchfile',
    image: getImage('development_banner'),
    imageAlt: 'Development banner: the word "Development" in pale pink script across a moonlit, lit-window city skyline.',
    theme: { field: '#0a1524', ink: '#fdeef5', accent: '#ffc7de' },
    summary:
      'Engineering projects about the parts of AI work that are easy to underestimate: runtime configuration, orchestration, failure handling, deterministic behaviour, and the boundary between a model and the software around it.',
    items: [
      {
        name: 'llm-local-harness',
        image: 'card_llm_local_harness',
        status: 'Available',
        description:
          'A Windows launcher and tuning record for a local LLM stack: MCP tool server, llama-server and chat-ui. Covers Vulkan inference on an integrated GPU, readiness gates, KV-cache tuning and the flags that made things worse.',
        url: `${GITHUB}/development/tree/main/llm-local-harness`,
      },
      {
        name: 'deterministic-graph-router',
        image: 'card_deterministic_graph_router',
        status: 'Planned',
        description:
          'Explicit routing, bounded failure recovery and local decision agents, without making an LLM responsible for every branch.',
        url: null,
      },
    ],
  },
  {
    id: 'research',
    title: 'Research',
    headline: 'Deriving ideas, then making them explorable.',
    question: 'Machine learning ideas, derived step by step, tested and turned into interactive artifacts.',
    repoUrl: `${GITHUB}/research`,
    language: 'HTML',
    image: getImage('research_banner'),
    imageAlt: 'Research banner: the word "Research" in spaced pale serif capitals above layered blue-grey hills on a deep teal field.',
    theme: { field: '#0b3144', ink: '#fdeef5', accent: '#c9dbe8' },
    summary:
      'A research notebook that is deliberately slower than a demo. The useful output is the chain from question to explanation to an artifact someone else can inspect: notes on difficult papers, self-contained browser visualisers and small experiments.',
    items: [
      {
        name: 'Information Geometry of Softmax',
        image: 'card_information_geometry_of_softmax',
        status: 'Available',
        description:
          'An interactive companion to The Information Geometry of Softmax, from the partition function and the gradient identity to probability coupling, KL divergence and Bregman geometry. Each section runs from big question to key insight.',
        url: `${GITHUB}/research/tree/main/Information%20Geometry%20of%20Softmax`,
      },
    ],
  },
  {
    id: 'blog',
    title: 'Blog',
    headline: 'Writing about the work.',
    question: 'Public writing about the projects and the lessons behind them.',
    repoUrl: `${GITHUB}/blog`,
    language: null,
    image: getImage('blog_banner'),
    imageAlt: 'Blog banner: the word "Blog" built from cream geometric blocks, contour lines and marbled textures on a dark brown honeycomb field.',
    theme: { field: '#230f08', ink: '#fff0f5', accent: '#f3c9b5' },
    summary:
      'The home for public writing about the projects and the lessons behind them. The repository is set up and waiting for its first post, so this section will fill in as the writing arrives.',
    items: [
      {
        name: 'First post',
        image: 'card_first_post',
        status: 'Planned',
        description: 'The repository is set up for public writing. The first post will appear here when it is ready.',
        url: null,
      },
    ],
  },
]

// Journey is written from the personal context profile. The 2025 chapter is
// deliberately left open because that period has not been documented yet.
export const journey = [
  {
    when: 'Early years',
    title: 'Bihar to Delhi-NCR',
    text: 'Born in Bihar and moved to Delhi at about one year old. Grew up across Vaishali near Ghaziabad, Indirapuram and Noida Sector 135, then moved to Gurugram in class 11, where I live now.',
  },
  {
    when: 'KIIT University',
    title: 'B.Tech in Electronics and Telecommunications',
    text: 'Bhubaneswar. Engineering and technical problem-solving gave me the base that my later interests in AI, language models and software were built on.',
  },
  {
    when: '2024',
    title: 'Asking whether AI could remember',
    text: 'Started using AI as a practical assistant and wondered whether a language model could hold memories of me. That question of continuity has stayed with me.',
  },
  {
    when: '2025',
    title: 'A chapter still being written',
    text: 'This part of the story is not filled in yet.',
  },
  {
    when: '2026',
    title: 'From exploring to building',
    text: 'Research notes, runtimes, evaluation tools and documented experiments. Turned 25 in August 2026. The goal is to turn ideas into work people can use and inspect.',
  },
]

export const marqueeWords = [
  'Small language models',
  'Local inference',
  'Evaluation',
  'Observability',
  'Runtimes',
  'Research notes',
  'Interactive tools',
]
