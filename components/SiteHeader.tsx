"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRightIcon, LineIcon } from "@/components/Icons";

const navItems = [
  { href: "#about", label: "私たちについて", en: "ABOUT" },
  { href: "#project", label: "2027プロジェクト", en: "PROJECT" },
  { href: "#history", label: "歩み・受賞歴", en: "HISTORY" },
  { href: "#social", label: "公式SNS", en: "SOCIAL" },
];

const lineUrl = "https://line.me/R/ti/p/@301sbdtt?oat_content=url&ts=08260652";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-open" : ""}`}>
      <a className="site-brand" href="#top" aria-label="鬼々よろしく魁望蓮 トップへ">
        <span className="site-brand__mark">
          <Image src="/images/logo.jpg" alt="" width={56} height={56} priority />
        </span>
        <span className="site-brand__text">
          <strong>鬼々よろしく魁望蓮</strong>
          <small>おにおによろしく のぞみれん</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="メインナビゲーション">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            <span>{item.en}</span>
            <small>{item.label}</small>
          </a>
        ))}
      </nav>

      <a className="header-line" href={lineUrl} target="_blank" rel="noreferrer">
        <LineIcon />
        <span>公式LINE</span>
        <ArrowUpRightIcon />
      </a>

      <button
        className="menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <div className="mobile-navigation" id="mobile-navigation" aria-hidden={!menuOpen}>
        <nav aria-label="モバイルナビゲーション">
          {navItems.map((item, index) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              <span className="mobile-navigation__number">0{index + 1}</span>
              <span>
                <strong>{item.en}</strong>
                <small>{item.label}</small>
              </span>
              <ArrowUpRightIcon />
            </a>
          ))}
        </nav>
        <a className="mobile-line" href={lineUrl} target="_blank" rel="noreferrer">
          <LineIcon />
          公式LINEで最新情報を受け取る
          <ArrowUpRightIcon />
        </a>
        <p>ONI ONI YOROSHIKU NOZOMIREN<br />OKAYAMA / URAJA</p>
      </div>
    </header>
  );
}
