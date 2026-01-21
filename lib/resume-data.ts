/** 버전 정보 */
export const VERSION = '1.0.0';
export const LAST_UPDATED = '2026. 1. 22.';

/** SEO 및 메타데이터 정보 */
export const METADATA = {
  title: 'Hyunki - Resume',
  description:
    '프론트엔드 엔지니어 Hyunki의 이력서입니다. 많은 사용자들에게 오래 사랑받는 서비스를 만들고 싶습니다.',
  keywords: [
    '프론트엔드',
    '백엔드',
    '개발자',
    '이력서',
    'React',
    'Next.js',
    'TypeScript',
  ],
  author: 'Hyunki',
  url: 'https://nextjs-resume-kohl.vercel.app', // TODO 도메인 구매
  ogImage: '/og-image.png',
};

/** ---UI 렌더링 데이터--- */
/** 개인 정보 */
export const PERSONAL_INFO = {
  name: '홍현기',
  title: 'Front-end Engineer',
  location: 'Seoul, Korea',
  experience: '2년차',
  description:
    '빠르게 실행하고 끝까지 개선하는 프론트엔드 엔지니어입니다. 2년간 13개의 프로젝트를 경험하며 MVP 개발부터 레거시 코드 리팩터링, 운영 환경 안정화, 개발자 경험 개선까지 폭넓은 역할을 수행했습니다. 사용자와 팀 모두에게 오래 사랑받는 제품을 만드는 것을 목표로 합니다.',
};

/** 기술 스택 */
export const TECH_STACK = [
  {
    category: 'Frontend',
    skills: [
      'Next.js',
      'React',
      'React Native',
      'TypeScript',
      'Tailwind CSS',
      'Webpack',
      'MUI',
      'Emotion',
      'SWR',
      'Zustand',
    ],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Nest.js'],
  },
  {
    category: 'Database & ORM',
    skills: ['MySQL', 'TypeORM'],
  },
  {
    category: 'Infra / Cloud',
    skills: ['AWS (EC2, S3, RSD)'],
  },
  {
    category: 'Tooling & Collaboration',
    skills: ['Git', 'GitHub', 'Figma', 'Notion', 'IntelliJ IDEA'],
  },
];

/** 연락처 */
export const CONTACT = {
  email: {
    href: 'mailto:dev.hyunki@gmail.com',
    label: 'dev.hyunki@gmail.com',
  },
  github: {
    href: 'https://github.com/HongHyunKi',
    label: '깃허브',
  },
  blog: {
    href: 'https://hyunki99.tistory.com',
    label: '개발 블로그',
  },
  portfolio: {
    href: 'https://shorthaired-silicon-601.notion.site/8fe69553d263438fae472504726f9cdf?pvs=74',
    label: '노션 포트폴리오',
  },
  // TODO 링크드인 프로필 꾸미기
  // linkedin: {
  //   href: 'https://www.linkedin.com/in/hyunki-hong-965194395/',
  //   label: 'LinkedIn',
  // },
};

/** 경력 */
export const WORK_EXPERIENCES = [
  {
    company: '(주)엠버스',
    position: 'Frontend Engineer',
    period: '2024. 01. 02. ~ 재직 중',
    description:
      '블록체인 스타트업 초기 멤버로 합류하여 4인 개발랩에서 2년간 13개 프로젝트 신규 개발 및 유지보수 수행',
    projects: [
      {
        title: '암호화폐 데이터 분석 및 커뮤니티 플랫폼',
        period: '2024. 01. ~',
        description:
          '글로벌 암호화폐 AI 인텔리전스 플랫폼으로, 암호화폐 지갑, AI 분석, 암호화폐 시장 데이터, 뉴스, 차트, 커뮤니티 게시판 등을 제공',
        tasks: [
          '외주 개발사의 수만 줄 규모 레거시 코드 리팩터링 및 컴포넌트·커스텀 훅 공통화',
          'MUI 커스텀 테마 기반 디자인 시스템 구축으로 중복 스타일 코드 대폭 감소, 확장 가능한 테마 구조를 통해 다크/라이트 테마 및 4차례의 대규모 리스킨을 안정적으로 대응',
          'next-intl 기반 다국어 지원 구조 구축으로 하드코딩된 UI 텍스트 제거, 번역 파일 구조화 및 locale 라우팅·통화(USD·JPY) 전환을 포함한 글로벌 UX 지원',
          'Core Web Vitals 개선 및 SEO 최적화를 통한 검색 엔진 노출 환경 개선',
          'env-cmd 도입으로 환경별 빌드 프로세스 분리 및 배포 스크립트 구축',
          '플러터 모바일앱 웹뷰 연동 및 브릿지 통신 로직 구현',
        ],
        techStack: [
          'Next.js',
          'JavaScript',
          'MUI',
          'Emotion',
          'SWR',
          'Zustand',
          'next-intl',
        ],
      },
      {
        title: 'LLM 기반 주식 투자 전략 보고서 및 AI 챗봇 서비스',
        period: '2025. 11. ~ 2026. 01.',
        description:
          'LLM(OpenAI/Claude/Gemini) API 기반 서비스 Next.js/Nest.js 풀스택 개발',
        tasks: [
          'SSE(Server-Sent Events) 기반 실시간 응답 스트리밍 기능 구현',
          'Cheerio를 활용한 주식 뉴스 크롤링 및 데이터 정제 파이프라인 구축',
          '투자 전략 보고서 생성 모듈 설계 및 구현',
          '보고서 생성 로직 병렬화 처리로 응답 속도 개선',
        ],
        techStack: [
          'Next.js',
          'Tailwind CSS',
          'TypeScript',
          'Nest.js',
          'TypeORM',
          'cheerio',
        ],
      },
      {
        title: 'ERC20 토큰 스테이킹 서비스',
        period: '2025. 09. ~ 2025. 11.',
        description:
          'MetaMask 연동 및 Avalanche C-Chain(EVM) 기반 ERC20 토큰 스테이킹 웹 서비스',
        tasks: [
          'MetaMask 지갑 연동 로그인 및 토큰 입금 로직 구현',
          '스마트 컨트랙트 호출 및 트랜잭션 상태 관리 구현',
          '글로벌 투자자가 주도한 740만 달러 규모의 전략적 투자 유치에 활용된 스테이킹 서비스 프론트엔드 구현',
        ],
        techStack: [
          'Next.js',
          'TypeScript',
          'ethers.js',
          'MUI',
          'Emotion',
          'SWR',
          'Zustand',
        ],
      },
      // {
      //   title: '블록체인 & 암호화폐 아카데미 플랫폼',
      //   period: '2025. 09. ~ 2026. 01.',
      //   description:
      //     '복잡한 블록체인 생태계의 진입 장벽을 낮추는 전문 용어 사전 및 단계별 학습 가이드 서비스',
      //   tasks: [
      //     '서브도메인 쿠키 공유 기반 SSO(Single Sign-On) 인증 기능 구현',
      //     '동영상 교육 콘텐츠 시청 및 학습 관리를 위한 UI/UX 구현',
      //     '교육 콘텐츠 관리 및 수강 현황 모니터링을 위한 통합 어드민 대시보드 구축',
      //   ],
      //   techStack: [
      //     'Next.js',
      //     'TypeScript',
      //     'Vimeo Player SDK',
      //     'MUI',
      //     'Emotion',
      //     'SWR',
      //   ],
      // },
      {
        title: '사내 프론트엔드 보일러플레이트 구축',
        period: '2025. 03.',
        description:
          '신규 프로젝트 착수 비용 절감을 목표로 한 프론트엔드 표준 템플릿 설계 및 구현. 총 7개의 신규 서비스에 공통 기반으로 적용됨',
        tasks: [
          '운영 환경에서 빈번히 발생하던 JavaScript 런타임 에러를 원인 분석 후 TypeScript 전환을 주도하여, null/undefined 접근 등 런타임 오류를 컴파일 타임에서 사전 차단하는 구조로 개선',
          '서비스 유형에 따라 사이드바/메인 레이아웃을 분리한 공통 레이아웃 구조를 설계하고, 반복 UI 패턴을 컴포넌트화하여 신규 프로젝트 착수 소요 기간을 3일에서 0일로 단축',
          'Next.js 기반 공통 아키텍처 및 환경 설정 표준화',
          'next-intl 기반 다국어 처리 구조 설계 및 언어팩 관리 자동화',
        ],
        techStack: [
          'Next.js',
          'React',
          'TypeScript',
          'SWR',
          'Zustand',
          'next-intl',
        ],
      },
      {
        title: '운영 관리용 백오피스',
        period: '2024. 03. ~',
        description:
          '운영 중인 각 서비스별 어드민 프로젝트 5개를 담당하여 신규 개발 및 유지보수 수행',
        tasks: [
          '운영 데이터를 효율적으로 관리할 수 있는 대시보드 및 관리 인터페이스 구현',
          '운영팀의 불편 사항을 도출해 기능 요구사항으로 정리하고, 이를 반영한 어드민 기능을 구현하며 운영 과정에서 발생하는 이슈를 지속적으로 개선',
        ],
        techStack: ['React', 'Next.js', 'TypeScript', 'MUI', 'Emotion', 'SWR'],
      },
      {
        title: '암호화폐 시세 알림 앱 MVP',
        period: '2024. 01. ~ 2024. 03.',
        description:
          '신입 입사 이후 실시간 암호화폐 시세 및 알림 기능을 포함한 MVP 앱 구현. 초기 비즈니스 모델 검증을 통해 해외 투자 유치에 기여',
        tasks: [
          'React Native 모바일 앱 단독 개발',
          'FCM(Firebase Cloud Messaging) 기반 실시간 시세 알림 기능 구현',
          'WebSocket을 활용한 실시간 암호화폐 시세 데이터 연동',
        ],
        techStack: [
          'React Native',
          'JavaScript',
          'WebSocket',
          'FCM',
          'Zustand',
        ],
      },
    ],
  },
  {
    company: '더함협동조합',
    position: '현장실습 & 프리랜서',
    period: '2023. 06 ~ 2024. 11',
    description: 'Vue.js & Spring Boot 풀스택 개발',
    projects: [
      {
        title: '구직 단념 청년 이력 강화 플랫폼 ',
        description:
          '교육에 관련된 행사 운영, 행사 관리자를 위한 ERP시스템, 이력(교육 행사, 멘토링, 자격 사항 등)을 관리할 수 있는 기능 제공',
        tasks: [
          'Vue.js & Quasar 프레임워크 활용 반응형 웹 개발',
          '행사 신청 UI & API 개발 → 360명 유저 이용',
          '비로그인으로 행사 신청한 유저 대상 비회원 로그인 기능 구현',
        ],
        techStack: ['Vue.js', 'Typescript', 'Spring Boot', 'MyBatis'],
      },
    ],
  },
];

/** 기타 활동 */
export const ACTIVITIES = [
  {
    title: '현기의 개발 블로그',
    role: 'Author',
    period: '2022. 06 - 현재',
    description:
      '일일 평균 200, 누적 26만+ 조회 수의 개발 블로그를 운영합니다. 기술적 경험을 누구나 이해하기 쉽게 공유합니다.',
    link: 'https://hyunki99.tistory.com',
  },
];

/** 학력 */
export const EDUCATION = [
  {
    school: '선문대학교',
    major: '글로벌소프트웨어학과',
    degree: '학사',
    period: '2020. 03 - 2024. 02',
    gpa: '4.01/4.5',
    description: '',
  },
];

/** 교육 및 자격 */
export const TRAINING = [
  {
    title: '비트교육센터 AWS 클라우드 기반 웹 풀스택 개발자 과정',
    period: '2022. 06. 21 - 2022. 12. 20',
    description:
      'AWS 클라우드 환경에서 React, Spring Boot, Node.js 활용한 RESTful API 기반 웹 서비스를 구축하며 전반적인 웹 개발 사이클을 경험했습니다.',
  },
];
