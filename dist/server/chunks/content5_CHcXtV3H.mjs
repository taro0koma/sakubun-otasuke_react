import { k as createComponent, l as renderTemplate, p as renderComponent } from './astro/server_fLvmqLaf.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { $ as $$MainLayout } from './MainLayout_BbI986Uu.mjs';

function Content5() {
  const [userInput, setUserInput] = useState("");
  const [advice, setAdvice] = useState("");
  const generateAdvice = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/openai", {
        // const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic bWl0b3VqcjpiTTlSeXFyNA=="
          // headersのAuthorizationはBasic認証を外す時必要なし
        },
        body: JSON.stringify({ prompt: userInput })
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const generatedAnswer = data.choices[0]?.message?.content || "No advice generated";
      setAdvice(generatedAnswer);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { children: "表現ぴったり探し" }),
    /* @__PURE__ */ jsxs("div", { className: "field", children: [
      /* @__PURE__ */ jsx("label", { className: "label", children: "調べたい言葉を入れてね:" }),
      /* @__PURE__ */ jsx("div", { className: "control", children: /* @__PURE__ */ jsx(
        "textarea",
        {
          className: "textarea",
          value: userInput,
          onChange: (e) => setUserInput(e.target.value),
          rows: 5
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "field", children: /* @__PURE__ */ jsx("div", { className: "control", children: /* @__PURE__ */ jsx("button", { className: "button is-primary", onClick: generateAdvice, children: "アドバイスをお願いする" }) }) }),
    advice && /* @__PURE__ */ jsxs("div", { className: "notification is-success", children: [
      /* @__PURE__ */ jsx("strong", { children: "回答:" }),
      " ",
      advice
    ] })
  ] });
}

const $$Content5 = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "\u8868\u73FE\u3074\u3063\u305F\u308A\u63A2\u3057";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content5, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/user/Desktop/works/astro-study/tutorial2/tutorial/src/components/Content5.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/user/Desktop/works/astro-study/tutorial2/tutorial/src/pages/content5.astro", void 0);

const $$file = "C:/Users/user/Desktop/works/astro-study/tutorial2/tutorial/src/pages/content5.astro";
const $$url = "/content5";

export { $$Content5 as default, $$file as file, $$url as url };
