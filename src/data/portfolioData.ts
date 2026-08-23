import { Project, SkillItem, NavLink, SocialPlatform } from '../types';

export const PERSONAL_INFO = {
  name: "Shafeen Sufian Meead",
  role: "CSE Undergrad & Developer",
  shortBio: "4th-semester computer science student building full-stack platforms, game engines, low-level architecture systems, and interactive applications.",
  fullBio: "I am a Computer Science & Engineering undergraduate currently in my 4th semester at the Islamic University of Technology (IUT). Driven by a passion for learning by creating, I specialize in building resilient backend architectures, scalable database schemas, object-oriented systems in C++ & C#, modern Java Spring Boot & Node.js/React platforms, 2D game engineering with LibGDX, Godot & Raylib, and AI-assisted engineering workflows.",
  university: "Islamic University of Technology (IUT)",
  semester: "4th Semester B.Sc. in CSE",
  email: "shafeensufian@iut-dhaka.edu",
  secondaryEmail: "sufianshafeen@gmail.com",
  github: "https://github.com/shafeen-git",
  linkedin: "https://www.linkedin.com/in/shafeen-sufian-meead-831913336/",
  discord: "https://discord.com/users/shafeen.2004",
  discordUsername: "shafeen.2004",
  itchio: "https://shafeen2004.itch.io/",
  facebook: "https://www.facebook.com/shafeen.sufian",
  facebookUsername: "shafeen.sufian",
  location: "Dhaka, Bangladesh",
  status: "Open for Opportunities & Collaborations",
  stats: [
    { label: "Core Academic Focus", value: "4th Sem CSE" },
    { label: "Primary Backend", value: "Java, Spring & Node" },
    { label: "Systems & Engines", value: "C++, C#, LibGDX, Godot" },
    { label: "Database Layer", value: "PostgreSQL & MySQL" },
  ]
};

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: "email",
    name: "Email",
    handle: "shafeensufian@iut-dhaka.edu",
    url: "mailto:shafeensufian@iut-dhaka.edu",
    badge: "Official & Direct",
    description: "Academic & professional inquiries, project collaborations, or opportunities",
    color: "#EA4335",
    bgGradient: "from-rose-500/10 to-red-500/5",
    hoverColor: "hover:text-rose-600 hover:border-rose-300 hover:bg-rose-50/70",
    borderColor: "border-rose-200/80",
    isEmail: true,
    copyable: true
  },
  {
    id: "discord",
    name: "Discord",
    handle: "shafeen.2004",
    url: "https://discord.com/users/shafeen.2004",
    badge: "Voice & Chat",
    description: "Direct messaging, development discussions & gaming sync",
    color: "#5865F2",
    bgGradient: "from-indigo-500/10 to-violet-500/5",
    hoverColor: "hover:text-[#5865F2] hover:border-indigo-300 hover:bg-indigo-50/70",
    borderColor: "border-indigo-200/80",
    copyable: true
  },
  {
    id: "github",
    name: "GitHub",
    handle: "@shafeen-git",
    url: "https://github.com/shafeen-git",
    badge: "Repositories",
    description: "Open-source backend projects, systems code & student platforms",
    color: "#181717",
    bgGradient: "from-slate-900/10 to-slate-800/5",
    hoverColor: "hover:text-slate-900 hover:border-slate-400 hover:bg-slate-100",
    borderColor: "border-slate-300/80"
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "Shafeen Sufian Meead",
    url: "https://www.linkedin.com/in/shafeen-sufian-meead-831913336/",
    badge: "Professional",
    description: "Professional networking, academic milestones & career updates",
    color: "#0A66C2",
    bgGradient: "from-blue-500/10 to-sky-500/5",
    hoverColor: "hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/70",
    borderColor: "border-blue-200/80"
  },
  {
    id: "itchio",
    name: "Itch.io",
    handle: "shafeen2004.itch.io",
    url: "https://shafeen2004.itch.io/",
    badge: "Indie Games",
    description: "Game mechanics prototypes, Pokémon arcade & interactive playable builds",
    color: "#FA5C5C",
    bgGradient: "from-rose-500/10 to-amber-500/5",
    hoverColor: "hover:text-rose-500 hover:border-rose-300 hover:bg-rose-50/70",
    borderColor: "border-rose-200/80"
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "shafeen.sufian",
    url: "https://www.facebook.com/shafeen.sufian",
    badge: "Social",
    description: "Social connection, student life at IUT & personal updates",
    color: "#1877F2",
    bgGradient: "from-blue-600/10 to-sky-600/5",
    hoverColor: "hover:text-[#1877F2] hover:border-blue-300 hover:bg-blue-50/70",
    borderColor: "border-blue-200/80"
  }
];

export const NAV_LINKS: NavLink[] = [
  { label: "about me", href: "#about" },
  { label: "education", href: "#education" },
  { label: "skills & tech", href: "#tech-stack" },
  { label: "projects & collaborations", href: "#projects" },
  { label: "plans", href: "#plans", badge: "Roadmap" },
  { label: "research", href: "#research", badge: "Papers" },
  { label: "interests", href: "#interests" },
  { label: "contact me", href: "#contact" },
];

export interface SkillCategoryGroup {
  category: string;
  subtitle: string;
  items: { name: string; tag?: string }[];
}

export const SKILL_MATRIX_GROUPS: SkillCategoryGroup[] = [
  {
    category: "Languages",
    subtitle: "Core syntax, systems & compiled languages",
    items: [
      { name: "C" },
      { name: "C++" },
      { name: "C#" },
      { name: "Java" },
      { name: "SQL" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "HTML / CSS" },
    ]
  },
  {
    category: "Databases",
    subtitle: "Relational storage, queries & transactional integrity",
    items: [
      { name: "PostgreSQL" },
      { name: "MySQL" }
    ]
  },
  {
    category: "Frameworks & Engines",
    subtitle: "Backend services, UI ecosystems & game development",
    items: [
      { name: "Spring Boot" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "LibGDX" },
      { name: "Godot" },
      { name: "Raylib" },
      { name: "JavaFX" },
      { name: "Tailwind CSS" },
    ]
  },
  {
    category: "Tools & Ecosystem",
    subtitle: "Build pipelines, version control & level editors",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Tiled" },
      { name: "Scene Builder" },
      { name: "Gradle" },
      { name: "Vite" },
      { name: "Postman" }
    ]
  },
  {
    category: "AI Workflow",
    subtitle: "Modern AI-augmented engineering & acceleration",
    items: [
      { name: "AI-assisted development" },
      { name: "LLM tools" },
      { name: "AI-assisted problem solving" }
    ]
  }
];

export const TECH_STACK: SkillItem[] = [
  {
    name: "Java 21",
    category: "Languages",
    level: "Proficient",
    icon: "Coffee",
    description: "Modern Java features including Virtual Threads, Pattern Matching, Records, and robust OOP design for enterprise-grade backend services.",
    tags: ["Virtual Threads", "Records", "Streams API", "OOP Architecture"],
    codeSnippet: `// Modern Java 21 Record & Pattern Matching
public record StudentAlumniConnection(Long id, String mentorName, String studentRoll) {
    public String getConnectionSummary() {
        return STR."Connection Established: \{mentorName} <-> \{studentRoll}";
    }
}`
  },
  {
    name: "C++ / Systems",
    category: "Languages",
    level: "Proficient",
    icon: "Cpu",
    description: "Low-level system architecture, high-efficiency data structures, Object-Oriented polymorphism, binary file handling, and hardware resource simulation.",
    tags: ["Polymorphism", "Binary File I/O", "Memory Management", "Console CLI"],
    codeSnippet: `// C++ Binary Serialization & Console Slot Management
class ConsoleRentalSlot {
private:
    char consoleModel[16];
    int activeControllers;
    double hourlyRate;
public:
    void writeBinary(std::ofstream &out) const {
        out.write(reinterpret_cast<const char*>(this), sizeof(*this));
    }
};`
  },
  {
    name: "C# & .NET",
    category: "Languages",
    level: "Proficient",
    icon: "Terminal",
    description: "Strong Object-Oriented programming in C#, LINQ data queries, asynchronous tasks, desktop solutions, and game scripting logic.",
    tags: ["LINQ Queries", "Async/Await", "OOP Patterns", "Game Scripting"],
    codeSnippet: `// C# LINQ & Record Pipeline
public record SessionData(string PlayerId, int Score, TimeSpan Duration);

var topPlayers = sessions
    .Where(s => s.Score > 1000)
    .OrderByDescending(s => s.Score)
    .Select(s => $"{s.PlayerId}: {s.Score} pts")
    .ToList();`
  },
  {
    name: "Spring Boot 3",
    category: "Frameworks & Engines",
    level: "Advanced",
    icon: "Server",
    description: "Production-ready enterprise backends, REST APIs, Spring Security authentication, Data JPA persistence, and HTMX reactive SSR integration.",
    tags: ["Spring Security", "Spring Data JPA", "RESTful APIs", "HTMX / Thymeleaf"],
    codeSnippet: `@RestController
@RequestMapping("/api/v1/network")
public class AlumniNetworkController {
    private final NetworkService networkService;
    
    @GetMapping("/mentors")
    public ResponseEntity<List<MentorDTO>> getMentors() {
        return ResponseEntity.ok(networkService.getActiveMentors());
    }
}`
  },
  {
    name: "React & Node.js",
    category: "Frameworks & Engines",
    level: "Proficient",
    icon: "Layout",
    description: "Building responsive single-page interfaces with modern React, hooks, state management, paired with Node.js/Express REST micro-backends.",
    tags: ["React Hooks", "Node.js REST", "Tailwind CSS", "Vite Bundling"],
    codeSnippet: `// React Custom Hook + Node.js API Consumer
export function useRealtimeData<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    fetch(\`/api/\${endpoint}\`)
      .then(res => res.json())
      .then(setData);
  }, [endpoint]);
  return data;
}`
  },
  {
    name: "LibGDX & Raylib",
    category: "Frameworks & Engines",
    level: "Proficient",
    icon: "Gamepad2",
    description: "Cross-platform 2D/3D game frameworks in Java and C. Managing rendering pipelines, sprite batches, collision physics, and audio playback.",
    tags: ["SpriteBatch", "Game Loops", "Raylib C", "LibGDX Audio"],
    codeSnippet: `// Raylib C 60FPS Game Loop
#include "raylib.h"

int main(void) {
    InitWindow(800, 450, "Game Engine Demo");
    SetTargetFPS(60);
    while (!WindowShouldClose()) {
        BeginDrawing();
        ClearBackground(RAYWHITE);
        DrawText("Raylib Hardware Acceleration", 190, 200, 20, LIGHTGRAY);
        EndDrawing();
    }
    CloseWindow();
    return 0;
}`
  },
  {
    name: "Godot & JavaFX",
    category: "Frameworks & Engines",
    level: "Proficient",
    icon: "Layers",
    description: "2D Scene tree architectures in Godot Engine and desktop GUI development using JavaFX with Scene Builder FXML bindings.",
    tags: ["Godot Nodes", "Scene Builder", "FXML UI", "Signals / Events"],
    codeSnippet: `# Godot GDScript Character Controller
extends CharacterBody2D

const SPEED = 300.0
func _physics_process(delta):
    var direction = Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
    velocity = direction * SPEED
    move_and_slide()`
  },
  {
    name: "PostgreSQL & MySQL",
    category: "Databases",
    level: "Proficient",
    icon: "Database",
    description: "Relational schema design, complex query optimization, indexed foreign key relations, ACID compliance, and transactional database integrity across PostgreSQL & MySQL.",
    tags: ["Schema Modeling", "ACID Compliance", "MySQL & Postgres", "Indexing"],
    codeSnippet: `CREATE TABLE alumni_profiles (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id) ON DELETE CASCADE,
    graduation_year INT NOT NULL,
    current_company VARCHAR(150),
    designation VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`
  },
  {
    name: "Git, Tiled & Gradle",
    category: "Tools & Ecosystem",
    level: "Proficient",
    icon: "Code2",
    description: "Branching workflows with Git/GitHub, level design with Tiled Map Editor, dependency resolution via Gradle/Maven, and API debugging with Postman.",
    tags: ["Git Gitflow", "Tiled Map Editor", "Gradle Builds", "Postman APIs"],
    codeSnippet: `// build.gradle.kts - Spring & Game Engine Configuration
dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    runtimeOnly("org.postgresql:postgresql")
}`
  },
  {
    name: "AI Workflow",
    category: "AI Workflow",
    level: "Advanced",
    icon: "Sparkles",
    description: "Leveraging state-of-the-art LLM tools, agentic workflows, prompt-engineered pipelines, and automated debugging for rapid 10x engineering execution.",
    tags: ["AI-Assisted Dev", "LLM Acceleration", "Prompt Architecture", "AI Debugging"],
    codeSnippet: `// AI-Augmented Development Workflow
1. Automated Architecture Prototyping & Spec Generation
2. LLM-Assisted Edge-Case & Algorithmic Problem Solving
3. Continuous Test Case Synthesis & Code Optimization`
  }
];

export const PROJECTS: Project[] = [
  {
    id: "linkiut",
    title: "LinkIUT",
    subtitle: "Alumni-Student Networking & Mentorship Platform",
    category: "Full-Stack",
    description: "An alumni-student networking platform built for Islamic University of Technology (IUT) featuring professional networking, mentorship matching, job board postings, and real-time direct messaging.",
    longDescription: "LinkIUT bridges the gap between current students and alumni of Islamic University of Technology. It provides an intuitive networking ecosystem featuring role-based Spring Security auth, curated mentorship request pipelines, verified job postings by alumni in global tech companies, and interactive HTMX-powered real-time updates.",
    highlights: [
      "Role-based authentication & profile verification for IUT students & alumni",
      "Mentorship appointment scheduling and direct messaging workflow",
      "Curated Job & Internship Portal with alumni referral tags",
      "High-performance reactive frontend using Thymeleaf and HTMX without heavy SPA overhead",
      "Relational PostgreSQL persistence with indexed queries and ACID transaction guarantees"
    ],
    techStack: ["Java 21", "Spring Boot 3", "Spring Security", "Thymeleaf", "HTMX", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/jvvhid/VP-LinkIUT",
    badge: "Full-Stack Web Platform",
    iconName: "Network",
    illustrationType: "linkiut",
    metrics: [
      { label: "Architecture", value: "MVC + HTMX" },
      { label: "Backend", value: "Spring Boot 3" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Security", value: "Spring Sec 6" }
    ]
  },
  {
    id: "xor-gaming-cafe",
    title: "XOR Gaming Cafe & Restaurant Management",
    subtitle: "Systems & OOP Console Architecture",
    category: "Systems & OOP",
    description: "A complete C++ console application simulating real-world gaming café operations, kitchen workflow, binary file inventory tracking, and console game rentals (PS1–PS4 with dynamic controller pricing slots).",
    longDescription: "Engineered from scratch using pure C++ and robust Object-Oriented Principles. The system features a custom binary file serialization engine for instant, persistent storage of gaming session times, player records, cafeteria inventory, and console hardware slots (PS1 through PS4) with variable hourly controller calculations and kitchen order dispatching.",
    highlights: [
      "Dynamic console booth rental engine supporting PS1, PS2, PS3, and PS4 with multi-controller billing slots",
      "Direct binary file serialization (.dat / .bin) ensuring zero data loss on abrupt shutdown",
      "Full kitchen & cafeteria inventory management with automated stock deduction upon order completion",
      "Robust OOP architecture adhering to Polymorphism, Encapsulation, and Operator Overloading",
      "High-speed console menu with automated invoice generation and session receipt exports"
    ],
    techStack: ["C++", "OOP Concepts", "File Handling", "Binary Storage", "Systems Design"],
    githubUrl: "https://github.com/Rez-06/Team-OOPs-",
    badge: "Systems & OOP Application",
    iconName: "Gamepad2",
    illustrationType: "xor",
    metrics: [
      { label: "Language", value: "C++ 20" },
      { label: "Storage", value: "Binary Files" },
      { label: "Console Rigs", value: "PS1 to PS4" },
      { label: "Billing", value: "Per-Minute/Slot" }
    ]
  },
  {
    id: "cache-controller-fsm",
    title: "Cache Controller FSM Simulation",
    subtitle: "Computer Organization & Architecture Finite State Machine",
    category: "Architecture & Systems",
    description: "A simulation of direct-mapped and multi-way set-associative cache controllers using Finite State Machines (FSM), modeling Read/Write hits, misses, line replacements (LRU), write-back/write-through policies, and memory bus latency.",
    longDescription: "Designed for Computer Organization & Architecture (CoA), this simulation models the core hardware logic of modern microarchitectural cache controllers. Using rigorous Finite State Machine (FSM) state transitions (IDLE, COMPARE_TAG, ALLOCATE, WRITE_BACK), it tracks Tag, Index, and Offset address decoding, simulates dirty-bit consistency, and benchmarks cache hit/miss latency across varying block and associativity configurations.",
    highlights: [
      "Finite State Machine (FSM) controller modeling IDLE, TAG_CHECK, ALLOCATE, and WRITE_BACK cycles",
      "Address decomposition engine into Tag, Set Index, and Block Offset bits with dynamic bitmasks",
      "Configurable mapping architectures: Direct-Mapped, 2-Way / 4-Way Set Associative, and Fully Associative",
      "Replacement & write policy engines: LRU (Least Recently Used), FIFO, Write-Back & Write-Through with Dirty-bit tracking",
      "Trace execution analyzer with visual step-by-step memory hierarchy diagnostics & cache hit-rate telemetry"
    ],
    techStack: ["C++", "Computer Architecture", "Finite State Machines", "Memory Hierarchy", "Cache Simulation", "LRU Cache"],
    githubUrl: "https://github.com/shafeen-git/FSM-cachemachine",
    badge: "CoA Architecture Simulation",
    iconName: "Cpu",
    illustrationType: "cache_fsm",
    metrics: [
      { label: "FSM States", value: "4-Stage Cycle" },
      { label: "Associativity", value: "Direct / N-Way" },
      { label: "Write Policy", value: "WB & WT + Dirty" },
      { label: "Analysis", value: "Trace Hits/Misses" }
    ]
  },
  {
    id: "pokemon-dodge-buff",
    title: "Pokémon Dodge & Buff",
    subtitle: "Interactive Arcade Game",
    category: "Interactive Game",
    description: "An interactive web minigame where players maneuver to dodge incoming pokeballs, collect special buffs (speed boosts, shields, score multipliers), and rack up high scores.",
    longDescription: "A custom 2D canvas arcade minigame crafted with vanilla JavaScript and HTML5 Canvas API. Features responsive keyboard / touch steering, dynamic collision physics, randomized pokeball projectile trajectories, timed power-up buffs (Potion Shield, Thunder Speed, Master Berry 2x), and a retro arcade soundtrack & particle explosion engine.",
    highlights: [
      "60 FPS smooth rendering loop using requestAnimationFrame and vector math",
      "Dynamic obstacle generation with escalating difficulty curves and speed ramps",
      "Collectible power-ups: Shield Invincibility, Thunder Speed Boost, and Rare Candy Multipliers",
      "Real-time collision detection via bounding-circle algorithms and particle sparks",
      "Interactive playable simulator embedded right inside the portfolio"
    ],
    techStack: ["JavaScript (ES6+)", "HTML5 Canvas", "CSS Animations", "Game Physics"],
    githubUrl: "https://github.com/shafeen-git/First-C-game-",
    badge: "Interactive Web Game",
    iconName: "Sparkles",
    illustrationType: "pokemon",
    metrics: [
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Engine", value: "HTML5 Canvas" },
      { label: "Controls", value: "Keys / Touch" },
      { label: "Mode", value: "Playable Live" }
    ]
  }
];

export const WORKFLOW_CARDS = [
  {
    title: "System Architecture",
    subtitle: "Clean OOP & Micro-Layers",
    description: "Designing structured class hierarchies, clean separation of concerns, and resilient data flows from database to UI.",
    icon: "Layers",
    color: "blue"
  },
  {
    title: "REST & API Services",
    subtitle: "Fast & Secure Endpoints",
    description: "Architecting standardized endpoints with Spring Boot, validated DTOs, and Spring Security authorization.",
    icon: "Workflow",
    color: "amber"
  },
  {
    title: "Database Engineering",
    subtitle: "ACID & Schema Optimization",
    description: "Structuring relational databases in PostgreSQL with indexed relationships, constraints, and data integrity.",
    icon: "Database",
    color: "cyan"
  },
  {
    title: "Interactive Experiences",
    subtitle: "Canvas, HTMX & Modern UI",
    description: "Crafting fluid animations, vector aesthetics, and responsive micro-interactions with Tailwind and Canvas.",
    icon: "Code",
    color: "indigo"
  }
];

export const RESEARCH_PAPERS: import('../types').ResearchPaper[] = [
  {
    id: "data-to-diagnosis",
    title: "From Data to Diagnosis: AI Detecting Diseases Before Symptoms Appear",
    subtitle: "Deep Learning, CNN Medical Imaging & Multimodal LLM Clinical Decision Support",
    authors: ["Shafeen Sufian Meead"],
    department: "Department of Computer Science & Engineering",
    university: "Islamic University of Technology (IUT)",
    studentId: "230041206",
    date: "2026",
    readTime: "8 min read",
    featured: true,
    abstract: "Early diagnosis of diseases like cancer and Alzheimer's can save millions of lives by intervening before clinical symptoms manifest. This paper examines the role of Convolutional Neural Networks (CNNs) in radiological screening (mammography and CT pulmonary nodule detection), Graph Neural Networks (GNNs) for multi-omic biomarker mapping, wearable non-invasive AI sweat sensors, and Large Language Models (LLMs such as Med-Gemini & GPT-4) in fusing electronic health records, acoustic speech markers, and genomic profiles into actionable clinical decision support workflows.",
    keyHighlights: [
      "Convolutional Neural Networks (CNNs) detecting subtle microcalcifications in mammograms and pulmonary nodules in Stage I lung CT scans",
      "Graph Neural Networks (GNNs) modeling genomic, proteomic, and histopathological biomarker relationships",
      "Non-invasive wearable AI sweat analysis patches (WearDOXX by Dr. Razieh Salahandish) for hospital-free early cancer detection",
      "Alzheimer's detection via hippocampal/cortical MRI analysis, RNN temporal evolution, and EEG amyloid-beta biomarker tracking",
      "Multimodal clinical decision support combining pre-trained transformer embeddings with acoustic & handcrafted linguistic features for zero-shot and fine-tuned LLM inference",
      "Critical analysis of clinical dataset diversity, genetic generalization challenges, and human-in-the-loop validation frameworks"
    ],
    topics: ["Deep Learning in Oncology", "Early Alzheimer's Detection", "Convolutional Neural Networks", "Med-Gemini & Clinical LLMs", "Multimodal Fusion Architecture", "Wearable AI Sensors"],
    fullContent: [
      {
        sectionTitle: "1. Introduction & The Paradigm of Pre-Symptomatic Detection",
        paragraphs: [
          "Early diagnosis of disease can save the lives of patients which would be impossible if diagnosed late. This reality applies critically to millions of deaths globally due to cancer and neurodegenerative disorders. Recently, artificial intelligence (AI) has emerged as an unprecedented tool capable of high-dimensional pattern recognition.",
          "Among the branches of modern AI, deep learning architectures and Large Language Models (LLMs) are specifically enabling clinicians to detect pathological disease signatures early before clinical symptoms even appear in the patient."
        ]
      },
      {
        sectionTitle: "2. Deep Learning in Early Cancer Detection (CNNs & Multi-Omics)",
        paragraphs: [
          "Deep learning has fundamentally transformed medical image analysis. Convolutional Neural Networks (CNNs) specialize in visual feature extraction, assisting professional radiologists in detecting malignant tumors with heightened sensitivity.",
          "In breast cancer screening, CNN systems trained on mammography datasets identify subtle microcalcifications that routinely escape standard visual inspection. Similar breakthroughs are achieved in lung cancer diagnosis through automated identification of tiny pulmonary nodules in chest CT scans, where Stage I detection drastically increases survival rates.",
          "Modern deep learning pipelines integrate genomic, proteomic, and histopathological data to identify specific cancer subtypes. Graph Neural Networks (GNNs) further enhance biomarker relationship discovery. Crucially, non-invasive wearable AI sweat analysis patches (such as WearDOXX developed by Dr. Razieh Salahandish and team) demonstrate that biochemical sweat analysis can enable continuous hospital-free cancer surveillance."
        ]
      },
      {
        sectionTitle: "3. AI for Early Alzheimer’s Disease Diagnosis (MRI, EEG & EHR)",
        paragraphs: [
          "Alzheimer’s disease typically develops silently over decades before overt memory loss and cognitive decline surface. Deep learning models analyze MRI scans to detect subtle hippocampal atrophy and cortical thinning, while Recurrent Neural Networks (RNNs) examine the longitudinal evolution of these neuroanatomical shifts.",
          "Electroencephalography (EEG) coupled with deep learning algorithms can identify subtle abnormalities in brain electrical activity correlated with amyloid-beta accumulation. Furthermore, NLP algorithms developed by research teams (such as Dr. Malaz Boustani's group) parse Electronic Health Records (EHR) to flag cognitive decline patterns when fused with PET and MRI imaging."
        ]
      },
      {
        sectionTitle: "4. LLMs in Clinical Decision Support & Acoustic Fusion Workflows",
        paragraphs: [
          "Large Language Models contribute significantly by synthesizing vast corpora of medical literature, pathology reports, and patient histories. Specialized clinical foundation models like Med-Gemini and GPT-4 evaluate multimodal inputs combining diagnostic imagery and unstructured clinical notes simultaneously.",
          "In neurology and oncology, LLMs perform acoustic and linguistic analysis on patient speech recordings during standard consultations. Research reveals that micro-hesitations, syntactic shifts, and memory recall latency serve as measurable linguistic biomarkers of neurodegeneration. A multimodal fusion pipeline combining pre-trained transformer embeddings with handcrafted linguistic features enables both zero-shot and fine-tuned LLM classification of cognitive impairment."
        ]
      },
      {
        sectionTitle: "5. Clinical Challenges & Ethical AI Deployment",
        paragraphs: [
          "AI diagnostic systems encounter significant real-world challenges. Medical datasets frequently lack demographic, environmental, and genetic diversity, risking algorithmic bias across underrepresented populations.",
          "Additionally, generative LLMs can produce inaccurate conclusions when supplied with incomplete or ambiguous clinical notes. Consequently, AI must never operate as an unverified black-box; it must function strictly as an augmentative decision-support tool under rigorous human-in-the-loop physician supervision."
        ]
      },
      {
        sectionTitle: "6. Conclusion",
        paragraphs: [
          "By identifying subtle multi-omic, radiological, and linguistic symptoms before physical manifestation, AI and LLMs have the proven potential to improve patient survival outcomes dramatically. As future software engineers and computer scientists, mastering these medical AI paradigms is vital for building the next generation of life-saving healthcare software."
        ]
      }
    ],
    references: [
      "McKinney, S.M. (2020). International evaluation of an AI system for breast cancer screening. Nature, 577, 89–94. DOI: 10.1038/s41586-019-1799-6",
      "Ardila, D. (2019). End-to-end lung cancer detection on chest CT using deep learning. Nature Medicine, 25, 954–961. DOI: 10.1038/s41591-019-0447-x",
      "Wen, J. (2020). Convolutional neural networks for classification of Alzheimer's disease: Overview and reproducible evaluation. Medical Image Analysis, 63, 101694.",
      "Singhal, K. (2023). Large language models encode clinical knowledge. Nature, 620, 172–180. DOI: 10.1038/s41586-023-06291-2",
      "Salahandish, R. IP Innovation Clinic (2025). WearDOXX: Smart wearable devices for early disease detection and personalized healthcare. Osgoode Hall Law School.",
      "Fishman, E.K., Horton, K.M., Urban, B.A., et al. (2020). Deep learning for pancreatic cancer detection: Current challenges and future strategies.",
      "Trafton, A. (2026). AI-generated sensors open new paths for early cancer detection. MIT News.",
      "Boustani, M.A., Galvin, J.E., Kleiman, M.J., et al. (2025). Digital Detection of Dementia in Primary Care. JAMA Network Open.",
      "Hamdard, J., et al. (2024). AI and Machine Learning Approaches for Early Detection of Alzheimer's Disease Using Neuroimaging Biomarkers. Diagnostics (MDPI)."
    ],
    figures: [
      {
        title: "CNN Nodule Detection from CT Scans",
        caption: "Figure 1: Early lung cancer CNN nodule detection comparing normal vs cancerous CT scans with localized bounding confidence.",
        description: "Convolutional Neural Networks scan 3D axial CT slices to isolate micro-nodules before metastasis occurs.",
        badgeText: "Radiological Computer Vision",
        type: "ct_scan"
      },
      {
        title: "LLM-Integrated Clinical Decision Workflow",
        caption: "Figure 2: Multimodal clinical classification pipeline combining Audio ASR, Synthetic Data Generation, Pre-trained Transformer embeddings, Handcrafted Linguistic Features & Multi-Modal LLM Fine-Tuning.",
        description: "End-to-end fusion architecture extracting speech acoustic vectors and clinical text to classify cognitive impairment vs healthy states.",
        badgeText: "Multi-Modal LLM Fusion",
        type: "workflow"
      }
    ]
  },
  {
    id: "ai-shaper-of-tomorrow",
    title: "AI, Shaper of Tomorrow & Promise of Today",
    subtitle: "From Turing & ELIZA to LLMs, AGI Horizons, Cloud IoT, and the Ethical Engineer's Oath",
    authors: ["Shafeen Sufian Meead"],
    department: "Department of Computer Science & Engineering",
    university: "Islamic University of Technology (IUT)",
    studentId: "230041206",
    date: "2026",
    readTime: "7 min read",
    featured: true,
    abstract: "A comprehensive exploration of the philosophical, technical, and societal trajectory of Artificial Intelligence. Tracing foundational milestones from Alan Turing's 1950 imitation game, Joseph Weizenbaum's 1966 ELIZA, and symbolic logic in LISP/Prolog to Deep Blue's historical chess triumph. The paper assesses modern deep learning, transformer-based foundation LLMs, the path toward Artificial General Intelligence (AGI) and Artificial Super Intelligence (ASI), cloud-edge IoT synergy, and concludes with a definitive ethical treatise on preventing cognitive dependency while channeling AI for societal advancement.",
    keyHighlights: [
      "Evolutionary lineage from the 1950 Turing Test, 1966 ELIZA chatbot, and LISP/Prolog symbolic computation to modern Stockfish & Deep Blue",
      "Formal distinction between Machine Learning, Deep Neural Networks, and Generative AI Foundation Models",
      "Analysis of modern Transformer architectures powering ChatGPT, Gemini, Claude, and DeepSeek",
      "Conceptual framework for Artificial General Intelligence (AGI) and cosmic-scale Artificial Super Intelligence (ASI)",
      "Cloud computing integration with edge IoT and autonomous gesture-driven control systems",
      "The Ethical Oath: Preventing cognitive atrophy, maintaining first-principles engineering mastery, and using AI as an accelerator for societal betterment"
    ],
    topics: ["History of AI & Turing Test", "Symbolic Computing (LISP/Prolog)", "Transformer Foundation Models", "AGI & Super Intelligence", "Cloud & IoT Systems", "Ethical AI & Engineering Responsibility"],
    fullContent: [
      {
        sectionTitle: "1. Introduction & The Pervasive Scope of AI",
        paragraphs: [
          "In today's modern world, it is impossible to ignore the impact, effect, and influence of artificial intelligence. As defined by IBM, Artificial Intelligence is technology that enables computers and machines to simulate human learning, comprehension, problem solving, decision making, creativity, and autonomy.",
          "Applications and devices equipped with modern AI can perceive, identify, and reason about the world in ways remarkably analogous to human cognition. For computer science students and engineers of all disciplines, mastering AI is not merely an academic exercise, but a foundational responsibility."
        ]
      },
      {
        sectionTitle: "2. The Advent of AI: Historical Foundations & Symbolic Computing",
        paragraphs: [
          "The quest for synthetic cognition formally began with Alan Turing's landmark 1950 proposal—the Turing Test—evaluating whether an interrogator could distinguish between human and machine responses in natural language conversation.",
          "In 1966, Joseph Weizenbaum developed ELIZA at MIT, demonstrating that rule-based pattern matching and keyword substitution could simulate therapeutic conversation, pioneering natural language processing.",
          "This era also gave rise to Prolog and LISP—the forefathers of symbolic intelligence—introducing dynamic data structures, recursive logic programming, and symbolic expression trees.",
          "In 1996, the competitive chess benchmark fell when IBM's Deep Blue secured a historic victory against World Grandmaster Garry Kasparov. Today, advanced chess engines like Stockfish calculate millions of positions per second, establishing superhuman tactical dominance."
        ]
      },
      {
        sectionTitle: "3. Machine Learning, Deep Neural Networks & Generative Foundation Models",
        paragraphs: [
          "Machine Learning represents the paradigm where algorithms iteratively optimize objective functions from empirical data rather than manual rule codification. Deep Learning scales this through multi-layered artificial neural networks capable of hierarchical feature representation across vision, speech, and text.",
          "Generative AI, enabled by the revolutionary Transformer architecture, has unlocked foundational capabilities across massive corpora. Models such as GPT-4, Gemini, Claude, and DeepSeek process contextual embeddings at scale, democratizing code generation, creative reasoning, and natural language synthesis."
        ]
      },
      {
        sectionTitle: "4. Theoretical Horizons: AGI, ASI & Cloud-IoT Ecosystems",
        paragraphs: [
          "The horizon of computer science points toward Artificial General Intelligence (AGI)—systems exhibiting versatile, cross-domain problem solving matching or surpassing human capabilities. Beyond lies Artificial Super Intelligence (ASI), transcending biological cognitive limits to address complex cosmic, physical, and scientific frontiers.",
          "Concurrently, cloud computing provides elastically scalable compute clusters that distribute model inference to low-power edge IoT devices, enabling real-time gesture interpretation, smart telemetry, and distributed autonomy."
        ]
      },
      {
        sectionTitle: "5. The Ethical Imperative & The Engineer's Final Promise",
        paragraphs: [
          "With immediate access to AI-generated answers, a dangerous societal risk emerges: cognitive atrophy. When students and developers passively prompt AI without understanding underlying mechanics, conceptual mastery diminishes.",
          "As engineers, our duty is clear: we must never become passive consumers or over-glorify automation. We must master the fundamental principles of data structures, algorithms, and systems first, employing AI as an empowering accelerator rather than a cognitive substitute.",
          "Let us make a resolute commitment to develop our core skills with sincerity, deploying artificial intelligence in an ethical, moral, safe, and efficient manner for the genuine betterment of society and humanity."
        ]
      }
    ],
    references: [
      "Stryker, C. (2024). What is artificial intelligence (AI)? IBM Think.",
      "Kavlakoglu, E. (2024). What are foundation models? IBM Research.",
      "Google Cloud (2024). Foundation models and enterprise generative AI architecture.",
      "Cloudflare, Inc. (2024). Workers AI: Global serverless GPU inference and foundation model systems.",
      "Turing, A.M. (1950). Computing Machinery and Intelligence. Mind, 59(236), 433-460.",
      "Weizenbaum, J. (1966). ELIZA—a computer program for the study of natural language communication between man and machine. Communications of the ACM, 9(1), 36-45."
    ]
  }
];

export const INTERESTS_LIST: import('../types').InterestItem[] = [
  {
    id: "gaming",
    title: "Gaming & Game Engines",
    category: "Interactive Tech",
    tagline: "Gameplay mechanics, 2D physics & indie game loops",
    description: "Passionate about game engineering with LibGDX, Godot & Raylib. Exploring arcade mechanics, retro console hardware, and publishing interactive web games on itch.io.",
    iconName: "Gamepad2",
    color: "#FA5C5C",
    badge: "Indie Creator",
    tags: ["LibGDX", "Godot 2D", "Raylib C", "Game Physics", "Itch.io"],
    accentGradient: "from-rose-500/10 to-amber-500/10"
  },
  {
    id: "vibecoding",
    title: "Vibecoding & Rapid Prototyping",
    category: "Engineering Flow",
    tagline: "Flow-state building with AI copilot synergy",
    description: "Mastering the art of intuitive, high-velocity coding. Leveraging LLM copilots, prompt engineering, and instant feedback loops to transform ideas into live software in minutes.",
    iconName: "Sparkles",
    color: "#6366F1",
    badge: "10x Velocity",
    tags: ["Flow State", "LLM Acceleration", "Rapid UI/UX", "Prompt Engineering"],
    accentGradient: "from-indigo-500/10 to-violet-500/10"
  },
  {
    id: "ai",
    title: "Artificial Intelligence & LLMs",
    category: "Core Tech",
    tagline: "Deep learning, foundation models & multimodal agents",
    description: "Deeply curious about neural network architectures, transformer embeddings, medical AI diagnosis, clinical decision support pipelines, and autonomous agent orchestration.",
    iconName: "BrainCircuit",
    color: "#2563EB",
    badge: "Research & Dev",
    tags: ["Deep Learning", "CNNs & GNNs", "Med-Gemini", "Multimodality"],
    accentGradient: "from-blue-600/10 to-indigo-600/10"
  },
  {
    id: "chess",
    title: "Chess & Strategic Play",
    category: "Mental Strategy",
    tagline: "Tactical calculations, positional depth & geometry",
    description: "Appreciating the mathematical beauty of chess. Analyzing tactical combinations, positional maneuvering, opening theory, and engine evaluation algorithms like Stockfish.",
    iconName: "Crown",
    color: "#D97706",
    badge: "Tactics & Logic",
    tags: ["Positional Play", "Opening Prep", "Endgame Geometry", "Stockfish Analysis"],
    accentGradient: "from-amber-500/10 to-yellow-500/10"
  },
  {
    id: "meta-learning",
    title: "Meta Learning",
    category: "Cognitive Mastery",
    tagline: "Learning how to learn & first-principles thinking",
    description: "Optimizing the acquisition of complex technical skills through Feynman techniques, active recall, spaced repetition, mental models, and cross-domain synthesis.",
    iconName: "Lightbulb",
    color: "#059669",
    badge: "Self-Optimization",
    tags: ["First Principles", "Feynman Technique", "Active Recall", "Skill Acceleration"],
    accentGradient: "from-emerald-500/10 to-teal-500/10"
  },
  {
    id: "hackathons",
    title: "Hackathons & Sprints",
    category: "Competitive Building",
    tagline: "24-48h intense building & team synergy under pressure",
    description: "Thriving in high-energy collaborative build sprints. Turning rough problem statements into working, scalable prototypes with tight execution and clear presentations.",
    iconName: "Trophy",
    color: "#EA580C",
    badge: "Sprint Builder",
    tags: ["Rapid Sprints", "Team Synergy", "Pitch Decks", "End-to-End MVPs"],
    accentGradient: "from-orange-500/10 to-amber-500/10"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Defense",
    category: "Systems Security",
    tagline: "System hardening, threat analysis & secure protocols",
    description: "Fascinated by defensive engineering, secure authentication mechanisms, binary reverse engineering, encryption protocols, and preventing vulnerabilities in web architectures.",
    iconName: "ShieldCheck",
    color: "#0284C7",
    badge: "System Hardening",
    tags: ["Spring Security", "Threat Modeling", "Auth Protocols", "Safe Coding"],
    accentGradient: "from-cyan-500/10 to-blue-500/10"
  },
  {
    id: "motivational-talks",
    title: "Motivational Talks & Mindset",
    category: "Personal Growth",
    tagline: "Resilience, grit, stoicism & continuous elevation",
    description: "Drawing energy from inspiring talks, stoic philosophy, and mindset coaching. Believing that consistency, humility, and disciplined effort conquer any technical mountain.",
    iconName: "Flame",
    color: "#DC2626",
    badge: "Grit & Vision",
    tags: ["Growth Mindset", "Discipline", "Leadership", "Resilience"],
    accentGradient: "from-red-500/10 to-rose-500/10"
  },
  {
    id: "sports",
    title: "Sports & Athletics",
    category: "Active Lifestyle",
    tagline: "Football, fitness, stamina & team coordination",
    description: "Maintaining peak physical and mental energy through regular sports, football matches, badminton, and outdoor workouts. Balancing intense terminal sessions with active recreation.",
    iconName: "Activity",
    color: "#16A34A",
    badge: "Peak Energy",
    tags: ["Football", "Badminton", "Physical Stamina", "Outdoor Energy"],
    accentGradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    id: "anime",
    title: "Anime & Visual Storytelling",
    category: "Creative Arts",
    tagline: "World-building, art direction & epic character arcs",
    description: "Enthusiast of compelling narrative arcs, imaginative world-building, high-octane animation sequences, and creative art directions that spark inventive design ideas.",
    iconName: "Film",
    color: "#9333EA",
    badge: "Art & Lore",
    tags: ["World Building", "Narrative Arcs", "Visual Direction", "Soundtracks"],
    accentGradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    id: "eating",
    title: "Foodie & Culinary Exploration",
    category: "Culinary Lifestyle",
    tagline: "Dhaka delicacies, authentic street food & cozy cafes",
    description: "Passionate foodie who loves exploring authentic culinary gems across Dhaka, savoring mouthwatering biryanis, kebabs, street food snacks, and discovering specialty coffee roasters.",
    iconName: "Utensils",
    color: "#F59E0B",
    badge: "Foodie Explorer",
    tags: ["Dhaka Food Spots", "Biryani & Kebabs", "Coffee Culture", "Street Food"],
    accentGradient: "from-amber-500/10 to-orange-500/10"
  }
];

export const EDUCATION_HISTORY: import('../types').EducationItem[] = [
  {
    id: "iut-bsc",
    period: "2024 — 2028 (Expected)",
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Islamic University of Technology",
    result: "In Progress (2nd Year, 2nd Semester)",
    statusBadge: "Current Degree",
    accentColor: "#2563EB",
    highlights: [
      "Department of Computer Science & Engineering (CSE)",
      "Student ID: 230041206",
      "Core Courses: Data Structures & Algorithms, Object-Oriented Programming (C++ & Java), Computer Organization & Architecture, Database Systems, Discrete Mathematics",
      "Focus: High-Performance Systems, Backend Microservices, Computer Architecture & Applied AI"
    ]
  },
  {
    id: "ndc-hsc",
    period: "2021 — 2023",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Notre Dame College",
    result: "GPA 5.00",
    statusBadge: "Graduated with Distinction",
    accentColor: "#DC2626",
    highlights: [
      "Science Group (Physics, Chemistry, Higher Mathematics, Biology, ICT)",
      "Academic Excellence in Advanced Mathematics and Physics",
      "Active participation in science seminars and logic/analytical workshops"
    ]
  },
  {
    id: "st-joseph-ssc",
    period: "2011 — 2021",
    degree: "Secondary School Certificate (SSC)",
    institution: "St Joseph Higher Secondary School",
    result: "GPA 5.00",
    statusBadge: "Graduated with Distinction",
    accentColor: "#16A34A",
    highlights: [
      "Science Group (Mathematics, Higher Math, Physics, Chemistry, Biology)",
      "Foundational analytical reasoning, STEM problem solving, and science fairs",
      "Leadership in school clubs, extracurriculars, and team initiatives"
    ]
  }
];

export const PLANS_LIST: import('../types').PlanItem[] = [
  {
    id: "machine-learning",
    title: "Machine Learning (ML)",
    shortCode: "ML",
    tagline: "Statistical Learning, Predictive Modeling & Production Pipelines",
    category: "AI & Data Science",
    description: "Mastering applied statistical learning theory, rigorous exploratory data analysis (EDA), feature engineering pipelines, ensemble algorithms (XGBoost, LightGBM, Random Forests), and Scikit-learn model deployment.",
    status: "Active Exploration",
    targetQuarter: "Q1 - Q2 2026",
    skills: ["Scikit-Learn", "Feature Engineering", "XGBoost", "Statistical Inference", "EDA & Pandas", "Model Evaluation"],
    objectives: [
      "Implement core learning algorithms from first principles (gradient descent, SVM kernels, decision trees)",
      "Build automated data preprocessing and cross-validation pipelines with Scikit-learn",
      "Deploy scalable ML inference microservices using FastAPI and containerized model artifacts",
      "Analyze bias-variance tradeoffs and hyperparameter optimization using Optuna / GridSearch"
    ],
    iconName: "BrainCircuit",
    color: "#2563EB",
    bgGradient: "from-blue-500/10 to-indigo-500/10"
  },
  {
    id: "rust-systems",
    title: "Rust Systems Programming",
    shortCode: "RUST",
    tagline: "Zero-Cost Abstractions, Fearless Concurrency & Memory Safety",
    category: "Systems & Low-Level",
    description: "Deep-diving into Rust's ownership model, borrow checker mechanics, memory-safe low-level systems programming, lock-free concurrency, asynchronous runtimes (Tokio), and WebAssembly (WASM) performance modules.",
    status: "In Progress",
    targetQuarter: "Q2 - Q3 2026",
    skills: ["Rust Lang", "Ownership & Lifetimes", "Tokio Async", "Memory Safety", "WASM", "Systems Concurrency"],
    objectives: [
      "Build high-throughput network proxies and custom TCP/HTTP servers using Tokio & hyper",
      "Implement memory-efficient data structures and lock-free concurrent queues in Rust",
      "Compile compute-heavy simulations (game physics and cache models) to WebAssembly",
      "Master idiomatic error handling, trait-based polymorphism, and zero-cost abstractions"
    ],
    iconName: "Shield",
    color: "#EA580C",
    bgGradient: "from-orange-500/10 to-amber-500/10"
  },
  {
    id: "datathons",
    title: "Datathons & Competitive ML",
    shortCode: "DATA",
    tagline: "High-Pressure Analytical Sprints, Kaggle Competitions & Feature Engineering",
    category: "Competitive Analytics",
    description: "Actively participating in university, national, and Kaggle datathons. Rapidly wrangling messy real-world datasets, extracting predictive signals, formulating hypothesis tests, and building winning ensemble models under tight time constraints.",
    status: "Upcoming Sprint",
    targetQuarter: "2026 Active Circuit",
    skills: ["Kaggle Competitions", "Feature Selection", "Cross-Validation", "Ensemble Blending", "Data Storytelling", "Fast Baseline Modeling"],
    objectives: [
      "Participate in top national university datathons and global Kaggle tabular/NLP competitions",
      "Develop rapid EDA templates and automated feature engineering toolkits for 24-48h sprints",
      "Master advanced ensemble blending, stacking, and metric-specific post-processing strategies",
      "Deliver actionable data storytelling with clear executive visual insights and slide pitch decks"
    ],
    iconName: "Trophy",
    color: "#EAB308",
    bgGradient: "from-amber-500/10 to-yellow-500/10"
  },
  {
    id: "deep-learning",
    title: "Deep Learning (DL)",
    shortCode: "DL",
    tagline: "Neural Architectures, Transformers, CNNs & Healthcare AI",
    category: "Advanced Deep AI",
    description: "Researching modern deep neural architectures in PyTorch: Convolutional Neural Networks (CNNs) for radiological imaging, Transformers & Attention mechanisms, Graph Neural Networks (GNNs) for biomedical multi-omics, and multimodal clinical LLM fine-tuning.",
    status: "Active Exploration",
    targetQuarter: "Q3 - Q4 2026",
    skills: ["PyTorch", "CNNs in Radiology", "Transformers & Attention", "Graph Neural Nets", "Med-AI Models", "Model Quantization"],
    objectives: [
      "Train and fine-tune CNN / Vision Transformer architectures for medical nodule segmentation",
      "Implement self-attention, multi-head transformer blocks, and positional encodings from scratch",
      "Explore parameter-efficient fine-tuning (LoRA / QLoRA) on open-weights LLMs for specialized domain QA",
      "Publish peer-reviewed academic research on pre-symptomatic disease detection pipelines"
    ],
    iconName: "Sparkles",
    color: "#9333EA",
    bgGradient: "from-purple-500/10 to-pink-500/10"
  }
];

