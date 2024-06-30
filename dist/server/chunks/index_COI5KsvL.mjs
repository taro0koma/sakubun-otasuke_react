import { k as createComponent, l as renderTemplate, m as maybeRenderHead, o as createAstro } from './astro/server_fLvmqLaf.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const authorization = Astro2.request.headers.get("authorization");
  const pieces = authorization?.split(/\s+/g);
  if (authorization) {
    if (pieces) {
      if (pieces.length === 2 && pieces[0] === "Basic") {
        const buffer = Buffer.from(pieces[1], "base64");
        const credentials = buffer.toString();
        console.log(credentials);
        const [username, password] = credentials.split(":");
        if (username === "mitoujr" && password === "bM9Ryqr4") {
          Astro2.response.status = 200;
          Astro2.response.headers.delete("WWW-Authenticate");
          Astro2.response.headers.delete("Content-Length");
        } else {
          Astro2.response.status = 401;
          Astro2.response.headers.set("WWW-Authenticate", 'Basic realm="realm"');
          Astro2.response.headers.set("Content-Length", "0");
        }
      } else {
        Astro2.response.status = 401;
        Astro2.response.headers.set("WWW-Authenticate", 'Basic realm="realm"');
        Astro2.response.headers.set("Content-Length", "0");
      }
    } else {
      Astro2.response.status = 401;
      Astro2.response.headers.set("WWW-Authenticate", 'Basic realm="realm"');
      Astro2.response.headers.set("Content-Length", "0");
    }
  } else {
    Astro2.response.status = 401;
    Astro2.response.headers.set("WWW-Authenticate", 'Basic realm="realm"');
    Astro2.response.headers.set("Content-Length", "0");
  }
  return renderTemplate`${maybeRenderHead()}<section class="content"> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Top Page</title> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"> <section class="section"> <div class="container"> <h1 class="title">Welcome to Our Service</h1> <div class="buttons"> <a class="button is-link" href="/content1">イメージマップ作成ツール</a> <a class="button is-info" href="/content2">かっこいい書き出しおみくじ</a> <a class="button is-success" href="/content3">段落の組み立て</a> <a class="button is-warning" href="/content4">登場人物の性格を表す言葉</a> <a class="button is-primary" href="/content5">表現ぴったり探し</a> </div> </div> </section> </section> <!-- <MainLayout title="かっこいい書き出しおみくじ">
  <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Content 1 Page</title>
</head>
<body>
  <astro-doc>
    <template lang="jsx">
      <div>
        <Content1 />
      </div>
    </template>
  </astro-doc>
</body>
</html>
  <Content />
</MainLayout> -->`;
}, "C:/Users/user/Desktop/works/astro-study/tutorial2/tutorial/src/pages/index.astro", void 0);
const $$file = "C:/Users/user/Desktop/works/astro-study/tutorial2/tutorial/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
