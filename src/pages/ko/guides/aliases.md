---
layout: ~/layouts/MainLayout.astro
title: Aliases
description: An intro to aliases with Astro.
i18nReady: false
---

An **alias** is a way to create shortcuts for your imports.

Aliases can help improve the development experience in codebases with many directories or relative imports.

```astro title="src/pages/about/company.astro" del="../../components" del="../../assets"
---
import Button from '../../components/controls/Button.astro';
import logoUrl from '../../assets/logo.png?url';
---
```

In this example, a developer would need to understand the tree relationship between `src/pages/about/company.astro`, `src/components/controls/Button.astro`, and `src/assets/logo.png`. And then, if the `company.astro` file were to be moved, these imports would also need to be updated.

You can add import aliases from either `tsconfig.json` or `jsconfig.json`.

```json title="tsconfig.json" ins={5-6}
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@assets/*": ["src/assets/*"]
    }
  }
}
```

:::note
Make sure `compilerOptions.baseUrl` is set so the aliased paths can be resolved.
:::

With this change, you can now import using the aliases anywhere in your project:

```astro title="src/pages/about/company.astro" ins="@components" ins="@assets"
---
import Button from '@components/controls/Button.astro';
import logoUrl from '@assets/logo.png?url';
---
```

These aliases are also integrated automatically into [VS Code](https://code.visualstudio.com/docs/languages/jsconfig) and other editors.
