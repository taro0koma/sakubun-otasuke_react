import { k as createComponent, l as renderTemplate, p as renderComponent } from './astro/server_fLvmqLaf.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { $ as $$MainLayout } from './MainLayout_BbI986Uu.mjs';

function Content4() {
  const [userInput, setUserInput] = useState("");
  const [advice, setAdvice] = useState("");
  const generateAdvice = async () => {
    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic bWl0b3VqcjpiTTlSeXFyNA=="
          // headersのAuthorizationはBasic認証を外す時必要なし
        },
        body: JSON.stringify({ prompt: `${userInput}という人物の性格を10パターン用意してください。` })
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
    /* @__PURE__ */ jsx("h2", { children: "登場人物の性格を表す言葉" }),
    /* @__PURE__ */ jsxs("div", { className: "field", children: [
      /* @__PURE__ */ jsx("label", { className: "label", children: "作文に書きたい項目を教えてね:" }),
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

const $$Content4 = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "\u767B\u5834\u4EBA\u7269\u306E\u6027\u683C\u3092\u8868\u3059\u8A00\u8449";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content4, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/user/Desktop/works/astro-study/tutorial2/tutorial/src/components/Content4.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/user/Desktop/works/astro-study/tutorial2/tutorial/src/pages/content4.astro", void 0);

const $$file = "C:/Users/user/Desktop/works/astro-study/tutorial2/tutorial/src/pages/content4.astro";
const $$url = "/content4";

export { $$Content4 as default, $$file as file, $$url as url };
