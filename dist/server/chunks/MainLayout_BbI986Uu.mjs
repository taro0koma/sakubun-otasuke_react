import { k as createComponent, l as renderTemplate, q as renderHead, t as renderSlot, o as createAstro } from './astro/server_fLvmqLaf.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                            */

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="ja"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title || "\u4F5C\u6587\u304A\u305F\u3059\u3051\u30A2\u30D7\u30EA"}</title>${renderHead()}</head> <body> <nav class="navbar" role="navigation" aria-label="main navigation"> <div class="navbar-brand"> <a class="navbar-item" href="/"> ${title || "\u4F5C\u6587\u304A\u305F\u3059\u3051\u30A2\u30D7\u30EA"} </a> <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"> <span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span> </a> </div> <header class="navbar is-primary"> <div class="navbar-menu"> <div class="navbar-start"> <a class="navbar-item" href="/">Home</a> <a class="navbar-item" href="/content1">段落の組み立て</a> <a class="navbar-item" href="/content2">表現ぴったり探し</a> <a class="navbar-item" href="/content3">登場人物の性格を表す言葉</a> <a class="navbar-item" href="/content4">かっこいい書き出しおみくじ</a> <a class="navbar-item" href="/content5">その他</a> </div> </div> </header> </nav> <main class="section"> <div class="container"> ${renderSlot($$result, $$slots["default"])} </div> </main> <footer class="footer"> <div class="content has-text-centered"> <p>&copy; 2024 作文おたすけアプリ</p> </div> </footer> </body></html>`;
}, "C:/Users/user/Desktop/works/astro-study/tutorial2/tutorial/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
