import {
  ArrowRight,
  Check,
  ChevronRight,
  MessageCircle,
  Shirt,
  Sparkles
} from 'lucide-react';

const categories = ['春夏', '上着', 'Tシャツ', '配布', 'オリジナル', '冬季'];

const heroCards = [
  {
    title: 'Tシャツ',
    image: '/assets/blue-polo-team.png'
  },
  {
    title: '作業服',
    image: '/assets/gray-polo-team.jpg'
  },
  {
    title: 'オリジナルロゴ',
    image: '/assets/logo-embroidery.jpg'
  }
];

const products = [
  {
    name: '企業ユニフォーム',
    scene: '会社・店舗スタッフ向け',
    price: '¥2,980〜',
    image: '/assets/blue-polo-team.png'
  },
  {
    name: '団体・活動用',
    scene: 'チーム活動・イベント向け',
    price: '¥1,680〜',
    image: '/assets/pink-polo-team.jpg'
  },
  {
    name: '学校イベント',
    scene: '文化祭・体育祭・部活向け',
    price: '¥1,480〜',
    image: '/assets/gray-polo-team.jpg'
  },
  {
    name: 'スタッフ用Tシャツ',
    scene: '受付・販売・短期イベント向け',
    price: '¥1,280〜',
    image: '/assets/blue-polo-detail.jpg'
  },
  {
    name: '作業用ジャケット',
    scene: '倉庫・現場・軽作業向け',
    price: '¥3,980〜',
    image: '/assets/blue-fabric-detail.jpg'
  },
  {
    name: '軽防寒ウェア',
    scene: '秋冬イベント・屋外作業向け',
    price: '¥4,280〜',
    image: '/assets/purple-fabric-detail.jpg'
  }
];

const steps = [
  {
    title: '商品を選ぶ',
    text: '用途や季節に合わせて、Tシャツ・作業服・ジャケットを選択できます。'
  },
  {
    title: 'ロゴ・文字を入れる',
    text: '会社名、学校名、イベント名、オリジナルロゴの配置を相談できます。'
  },
  {
    title: 'LINEで相談・注文',
    text: '数量や納期、見積もりをLINEで気軽に相談できます。'
  }
];

export default function App() {
  return (
    <main id="top" className="min-h-screen bg-white font-sans text-ink">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2 font-bold tracking-wide">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand text-white">
              <Shirt size={20} aria-hidden="true" />
            </span>
            Team Wear JP
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
          >
            相談する
            <ChevronRight size={16} aria-hidden="true" />
          </a>
        </div>
      </header>

      <section className="border-b border-line bg-gray-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_1.12fr] md:items-center lg:py-14">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-md border border-teal-100 bg-white px-3 py-1 text-sm font-semibold text-brand">
              <Sparkles size={15} aria-hidden="true" />
              ロゴ入りウェアをかんたん制作
            </p>
            <div className="flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h1 className="text-3xl font-bold leading-tight tracking-normal text-ink sm:text-4xl lg:text-5xl">
                MAMOユニフォーム
              </h1>
              <div className="shrink-0 sm:pb-2 sm:text-right">
                <div className="mb-1 flex items-center gap-2 text-sm font-black text-[#06c755] sm:justify-end">
                  <MessageCircle size={17} aria-hidden="true" />
                  LINE相談
                </div>
                <p className="m-0 text-sm font-bold text-ink">
                  カスタム相談・一対一の専門サポート
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              法人向け作業服・団体服・オリジナルウェア制作対応
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-teal-800"
              >
                商品を見る
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a
                href="#flow"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-5 py-3 text-sm font-bold text-ink transition hover:border-gray-300"
              >
                制作の流れ
              </a>
            </div>
            <div className="mt-7 grid gap-3">
              {[
                {
                  label: 'Design',
                  image: '/assets/logo-embroidery.jpg',
                  alt: 'ロゴデザインと刺繍イメージ',
                  title: '無料デザイン相談',
                  text: 'ロゴや文字入れの配置を、法人用途に合わせて整えます。'
                },
                {
                  label: 'Support',
                  image: '/assets/gray-polo-team.jpg',
                  alt: '法人ユニフォームの打ち合わせイメージ',
                  title: '専任担当が一対一で対応',
                  text: '用途・数量・納期を確認しながら、落ち着いた対応で進行します。'
                },
                {
                  label: 'Process',
                  image: '/assets/blue-fabric-detail.jpg',
                  alt: '生地と加工方法のイメージ',
                  title: '多様な加工方法に対応',
                  text: '刺繍・プリントなど、企業ユニフォームの制作ニーズに対応します。'
                }
              ].map((item) => (
                <article
                  key={item.title}
                  className="grid overflow-hidden rounded-lg border border-line bg-white p-2 sm:grid-cols-[132px_1fr] sm:gap-3"
                >
                  <div className="relative min-h-32 overflow-hidden rounded-md bg-gray-100 sm:min-h-24">
                    <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
                    <span className="absolute bottom-2 left-2 rounded-md bg-white/90 px-2 py-1 text-[11px] font-black text-brand">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-col justify-center px-1 py-2 sm:py-0">
                    <h3 className="m-0 text-sm font-bold leading-snug">{item.title}</h3>
                    <p className="m-0 mt-1 text-xs leading-5 text-gray-500">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {heroCards.map((item, index) => (
                <article
                  key={item.title}
                  className={`overflow-hidden rounded-lg border border-line bg-white shadow-soft ${
                    index === 1 ? 'translate-y-6' : ''
                  }`}
                >
                  <div className="aspect-[4/5] bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="px-3 py-3 text-center text-sm font-bold sm:text-base">
                    {item.title}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <nav
          aria-label="商品カテゴリ"
          className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className="shrink-0 rounded-md border border-line bg-white px-5 py-2.5 text-sm font-bold text-gray-700 transition hover:border-brand hover:text-brand"
            >
              {category}
            </button>
          ))}
        </nav>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-brand">Products</p>
            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">商品ラインナップ</h2>
          </div>
          <p className="hidden text-sm text-gray-500 sm:block">ロゴ・名入れ対応</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-lg border border-line bg-white transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="mb-3 inline-flex items-center gap-1 rounded-md bg-teal-50 px-2.5 py-1 text-xs font-bold text-brand">
                  <Check size={13} aria-hidden="true" />
                  ロゴ対応
                </div>
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="mt-1 text-sm leading-6 text-gray-500">{product.scene}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xl font-bold text-ink">{product.price}</p>
                  <button
                    type="button"
                    className="rounded-md border border-line px-3 py-2 text-sm font-bold text-gray-700 transition hover:border-brand hover:text-brand"
                  >
                    詳細
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="flow" className="border-y border-line bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="mb-7 max-w-2xl">
            <p className="text-sm font-bold text-brand">About</p>
            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
              はじめてでも簡単に注文できます
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              会社制服から学校イベント服まで、小ロットから相談可能。用途に合う商品選びからロゴ配置までサポートします。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-line bg-white p-5">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-brand text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="rounded-lg bg-ink px-5 py-8 text-white sm:px-8 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">LINEで簡単相談</h2>
            <div className="mt-4 flex flex-wrap gap-2 text-sm font-semibold text-gray-100">
              <span className="rounded-md bg-white/10 px-3 py-1.5">見積もり無料</span>
              <span className="rounded-md bg-white/10 px-3 py-1.5">小ロット相談可能</span>
              <span className="rounded-md bg-white/10 px-3 py-1.5">ロゴ入れ対応</span>
            </div>
          </div>
          <a
            href="https://line.me/ti/p/CkChe7q5c4"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#06c755] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#05b64e] md:mt-0 md:w-auto"
          >
            <MessageCircle size={18} aria-hidden="true" />
            LINEで相談する
          </a>
        </div>
      </section>
    </main>
  );
}
