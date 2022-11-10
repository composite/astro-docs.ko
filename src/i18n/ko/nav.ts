/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	{ text: '여기서 시작', header: true, type: 'learn', key: 'startHere' },
	{ text: '시작하기 전에', slug: 'getting-started', key: 'getting-started' },
	{ text: '설치', slug: 'install/auto', key: 'install' },
	{ text: '편집기 설정', slug: 'editor-setup', key: 'editor-setup' },
	{ text: '마이그레이션 가이드', slug: 'migrate', key: 'migrate' },

	{ text: '튜토리얼', header: true, type: 'learn', key: 'tutorials' },
	{ text: '블로그 구축하기', slug: 'tutorial/0-introduction', key: 'blog-tutorial' },

	{ text: '핵심 컨셉', header: true, type: 'learn', key: 'coreConcepts' },
	{ text: '왜 Astro인가?', slug: 'concepts/why-astro', key: 'concepts/why-astro' },
	{ text: 'MPA와 SPA의 차이', slug: 'concepts/mpa-vs-spa', key: 'concepts/mpa-vs-spa' },
	{ text: 'Astro Islands', slug: 'concepts/islands', key: 'concepts/islands' },

	{ text: '기본 사항', header: true, type: 'learn', key: 'basics' },
	{
		text: '프로젝트 구조',
		slug: 'core-concepts/project-structure',
		key: 'core-concepts/project-structure',
	},
	{
		text: 'Astro 컴포넌트',
		slug: 'core-concepts/astro-components',
		key: 'core-concepts/astro-components',
	},
	{ text: '페이지', slug: 'core-concepts/astro-pages', key: 'core-concepts/astro-pages' },
	{ text: '레이아웃', slug: 'core-concepts/layouts', key: 'core-concepts/layouts' },
	{ text: '마크다운 & MDX', slug: 'guides/markdown-content', key: 'guides/markdown-content' },
	{ text: '라우팅', slug: 'core-concepts/routing', key: 'core-concepts/routing' },
	{ text: 'Imports', slug: 'guides/imports', key: 'guides/imports' },
	{ text: '끝점', slug: 'core-concepts/endpoints', key: 'core-concepts/endpoints' },
	{ text: '데이터 조회', slug: 'guides/data-fetching', key: 'guides/data-fetching' },
	{ text: '배포', slug: 'guides/deploy', key: 'guides/deploy' },
	{ text: '문제 해결', slug: 'guides/troubleshooting', key: 'guides/troubleshooting' },

	{ text: '가이드', header: true, type: 'learn', key: 'features' },
	{ text: '통합하기', slug: 'guides/integrations-guide', key: 'guides/integrations-guide' },
	{
		text: 'UI 프레임워크',
		slug: 'core-concepts/framework-components',
		key: 'core-concepts/framework-components',
	},
	{
		text: '서버단 렌더링 (SSR)',
		slug: 'guides/server-side-rendering',
		key: 'guides/server-side-rendering',
	},
	{ text: 'CSS & 스타일링', slug: 'guides/styling', key: 'guides/styling' },
	{ text: '내용 작성하기', slug: 'guides/content', key: 'guides/content' },
	{ text: 'CMS 연결', slug: 'guides/cms', key: 'guides/cms' },
	{ text: '이미지', slug: 'guides/images', key: 'guides/images' },
	{ text: '글꼴', slug: 'guides/fonts', key: 'guides/fonts' },
	{
		text: '상태값 공유',
		slug: 'core-concepts/sharing-state',
		key: 'core-concepts/sharing-state',
	},
	{ text: 'RSS', slug: 'guides/rss', key: 'guides/rss' },
	{ text: '테스트', slug: 'guides/testing', key: 'guides/testing' },

	{ text: '설정하기', header: true, type: 'learn', key: 'configuration' },
	{
		text: 'Astro 설정 파일',
		slug: 'guides/configuring-astro',
		key: 'guides/configuring-astro',
	},
	{ text: 'TypeScript', slug: 'guides/typescript', key: 'guides/typescript' },
	{ text: 'Import 별칭 사용', slug: 'guides/aliases', key: 'guides/aliases' },
	{
		text: '환경 변수',
		slug: 'guides/environment-variables',
		key: 'guides/environment-variables',
	},

	{ text: '레퍼런스', header: true, type: 'api', key: 'reference' },
	{
		text: '설정',
		slug: 'reference/configuration-reference',
		key: 'reference/configuration-reference',
	},
	{ text: 'CLI', slug: 'reference/cli-reference', key: 'reference/cli-reference' },
	{ text: '런타임 API', slug: 'reference/api-reference', key: 'reference/api-reference' },
	{
		text: '통합 API',
		slug: 'reference/integrations-reference',
		key: 'reference/integrations-reference',
	},
	{ text: '어댑터 API', slug: 'reference/adapter-reference', key: 'reference/adapter-reference' },
	{
		text: '템플릿 속성',
		slug: 'reference/directives-reference',
		key: 'reference/directives-reference',
	},
	{ text: 'NPM 패키지 형식', slug: 'guides/publish-to-npm', key: 'guides/publish-to-npm' },
] as const;
