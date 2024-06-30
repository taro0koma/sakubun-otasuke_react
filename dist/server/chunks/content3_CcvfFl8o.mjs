import { k as createComponent, l as renderTemplate, p as renderComponent } from './astro/server_fLvmqLaf.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { $ as $$MainLayout } from './MainLayout_BbI986Uu.mjs';

function Content3() {
  const [userInput1, setUserInput1] = useState("");
  const [userInput2, setUserInput2] = useState("");
  const [userInput3, setUserInput3] = useState("");
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
        body: JSON.stringify({
          prompt: `${userInput1}と${userInput2}と${userInput3}について作成する作文のためのPREP+のフレームワークで構成し、const answer=[];の形式で値のみ配列を記載してください。配列のコード以外の文章やアドバイスは省いてください。`
        })
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
    /* @__PURE__ */ jsx("h2", { children: "段落の組み立て" }),
    /* @__PURE__ */ jsxs("form", { children: [
      /* @__PURE__ */ jsx("div", { className: "field", children: /* @__PURE__ */ jsx("label", { className: "label", children: "作文に書きたい項目を教えてね:" }) }),
      /* @__PURE__ */ jsxs("div", { className: "field", children: [
        /* @__PURE__ */ jsx("label", { className: "label", children: "書きたいこと １" }),
        /* @__PURE__ */ jsx("div", { className: "control", children: /* @__PURE__ */ jsx("input", { className: "input", type: "text", name: "priority1", value: userInput1, onChange: (e) => setUserInput1(e.target.value), required: true }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "field", children: [
        /* @__PURE__ */ jsx("label", { className: "label", children: "書きたいこと ２" }),
        /* @__PURE__ */ jsx("div", { className: "control", children: /* @__PURE__ */ jsx("input", { className: "input", type: "text", name: "priority2", value: userInput2, onChange: (e) => setUserInput2(e.target.value), required: true }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "field", children: [
        /* @__PURE__ */ jsx("label", { className: "label", children: "書きたいこと ３" }),
        /* @__PURE__ */ jsx("div", { className: "control", children: /* @__PURE__ */ jsx("input", { className: "input", type: "text", name: "priority3", value: userInput3, onChange: (e) => setUserInput3(e.target.value), required: true }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "field", children: /* @__PURE__ */ jsx("div", { className: "control", children: /* @__PURE__ */ jsx("button", { className: "button is-primary", onClick: generateAdvice, children: "アドバイスをお願いする" }) }) })
    ] }),
    advice && /* @__PURE__ */ jsxs("div", { className: "notification is-success", children: [
      /* @__PURE__ */ jsx("strong", { children: "回答:" }),
      " ",
      advice
    ] })
  ] });
}

const $$Content3 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "\u6BB5\u843D\u306E\u7D44\u307F\u7ACB\u3066" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content3, {})} ` })}`;
}, "C:/Users/user/Desktop/works/astro-study/tutorial2/tutorial/src/pages/content3.astro", void 0);

const $$file = "C:/Users/user/Desktop/works/astro-study/tutorial2/tutorial/src/pages/content3.astro";
const $$url = "/content3";

export { $$Content3 as default, $$file as file, $$url as url };
