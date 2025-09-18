import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, MapPin, Phone, Mail, ExternalLink } from "lucide-react"

export default function TMREventPage() {
  return (
    <div
      className="min-h-screen bg-[#0a1628] relative"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TMR-ib8BsE9tQiVGetFjPfO5y27PhoB1Oy.png')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "800px 800px",
      }}
    >
      <div className="absolute inset-0 bg-[#0a1628]/65 pointer-events-none"></div>

      <div className="relative z-10">
        {/* Hero Section - Tokyo MER Style */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(10, 22, 40, 0.8), rgba(10, 22, 40, 0.6)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4040.JPG-ddyZqxK3Vn1pg2TxmHMWKd8SQUv3O8.jpeg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide opacity-90 text-center whitespace-nowrap">
              救命技術を磨き続けろ
            </div>
          </div>

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <div className="flex justify-center mb-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-JhkC6ObqBN4s0bRunLyMBKmxIFo8X1.png"
                alt="Qやん"
                className="w-32 h-32 drop-shadow-2xl"
              />
            </div>

            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-2 tracking-wider">
                <span className="text-white">T</span>
                <span className="text-red-500 text-shadow-lg">MR</span>
              </h1>
              <div className="text-base sm:text-lg md:text-xl tracking-[0.3em] text-white/90 font-light">TOYO MEDICAL RALLY</div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white tracking-wide">東洋メディカルラリー</h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 text-lg sm:text-xl">
              <div className="flex items-center gap-3 text-white bg-black/30 px-4 sm:px-6 py-3 rounded-lg backdrop-blur-sm">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                <span className="font-semibold text-sm sm:text-base">11月3日（月・祝）</span>
              </div>
              <div className="flex items-center gap-3 text-white bg-black/30 px-4 sm:px-6 py-3 rounded-lg backdrop-blur-sm">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                <span className="font-semibold text-sm sm:text-base">競技START 10:00〜</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-none font-bold tracking-wide shadow-2xl"
            >
              今すぐ応募する
            </Button>
          </div>
        </section>

        {/* Event Overview - Dark Theme */}
        <section className="py-24 px-4 bg-[#0a1628]/75">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-8 text-white tracking-wide">
                EVENT <span className="text-red-500">OVERVIEW</span>
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
              <div className="flex justify-center mb-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-0Bq56GynKApAagxsgLvno5k3WwCbXH.png"
                  alt="Qやん"
                  className="w-20 h-20 drop-shadow-lg"
                />
              </div>
            </div>

            <Card className="mb-16 bg-slate-900/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-12">
                <p className="text-lg sm:text-xl leading-relaxed text-slate-200 text-center break-words">
                  TOYOメディカルラリーは、在校生対象のメディカルラリーで、期生を越えた卒業生の交流の場を設け、様々な情報交換の機会を作る目的と、学生の救命技術及びモチベーションの向上と、医療現場で活躍する卒業生の方々との交流を目的に
                  <span className="font-bold text-red-400 text-xl sm:text-2xl">2017年より開催</span>しております。
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-slate-900/70 border-slate-700 overflow-hidden group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4077.JPG-rQ7ilnLSYVmU7A9GyPt3nQlaFPaUML.jpeg"
                      alt="救急救命訓練の様子"
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">実践的な救命技術訓練</h3>
                    <p className="text-slate-300 text-base sm:text-lg break-words">現場さながらの緊迫した環境での救命技術向上を目指します。</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/70 border-slate-700 overflow-hidden group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4156.JPG-mdMo85LyjGLppaU2kIaITTgQPG3LTf.jpeg"
                      alt="評価・指導の様子"
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">プロフェッショナルとの交流</h3>
                    <p className="text-slate-300 text-base sm:text-lg break-words">医療現場で活躍する卒業生との貴重な交流機会です。</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Staff Recruitment - Tokyo MER Blue Section Style */}
        <section
          className="py-24 px-4 relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 22, 40, 0.9), rgba(10, 22, 40, 0.8)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4009.JPG-I4ri4ekXM69M6pIl2ED5WuAd3IXHI5.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/30"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-8 text-white tracking-wide">
                STAFF <span className="text-red-500">RECRUITMENT</span>
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
              <div className="flex justify-center mb-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-bNoS0QpnjEH0TfX2Ga4oRy4gO6LMct.png"
                  alt="Qやん"
                  className="w-20 h-20 drop-shadow-lg"
                />
              </div>
              <p className="text-xl sm:text-2xl text-white font-light tracking-wide">評価者・運営スタッフの募集</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Card className="bg-slate-900/80 border-slate-600 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white text-2xl">
                    <Users className="w-8 h-8 text-red-400" />
                    卒業生スタッフ募集要項
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-white text-lg sm:text-xl">募集人数</span>
                      <Badge className="bg-red-600 text-white text-lg sm:text-xl px-4 sm:px-6 py-2 rounded-none">約30名</Badge>
                    </div>
                    <div className="border-t border-slate-600 pt-4 sm:pt-6">
                      <h4 className="font-bold mb-4 text-white text-lg sm:text-xl">待遇・特典</h4>
                      <ul className="space-y-3 text-slate-200 text-base sm:text-lg">
                        <li>• 交通費支給（移動距離で変動、最高15,000円）</li>
                        <li>• 昼食あり</li>
                        <li>• 懇親会あり</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/80 border-slate-600 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4009.JPG-I4ri4ekXM69M6pIl2ED5WuAd3IXHI5.jpeg"
                      alt="スタッフの様子"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">応募方法</h3>
                    <p className="text-slate-200 mb-6 text-base sm:text-lg break-words">下記のフォームからお申し込みください</p>
                    
                    <div className="space-y-4">
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg py-3 sm:py-4 rounded-none font-bold tracking-wide"
                        asChild
                      >
                        <a
                          href="https://forms.office.com/r/tn3hLGFJtS"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3"
                        >
                          学生選手エントリー
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      </Button>
                      
                      <Button
                        className="w-full bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg py-3 sm:py-4 rounded-none font-bold tracking-wide"
                        asChild
                      >
                        <a
                          href="https://forms.office.com/r/ake6RNsAbn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3"
                        >
                          卒業生スタッフエントリー
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      </Button>
                      
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg py-3 sm:py-4 rounded-none font-bold tracking-wide"
                        asChild
                      >
                        <a
                          href="https://forms.office.com/r/30u5iLAWCc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3"
                        >
                          在校生スタッフエントリー
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4169.JPG-hTnhLmGJZQuPX1xrHaRtWhyn5KvSiV.jpeg",
                  alt: "訓練風景1",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4040.JPG-ddyZqxK3Vn1pg2TxmHMWKd8SQUv3O8.jpeg",
                  alt: "訓練風景2",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4077.JPG-rQ7ilnLSYVmU7A9GyPt3nQlaFPaUML.jpeg",
                  alt: "訓練風景3",
                },
              ].map((image, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/60 border-slate-600 overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-64 object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-red-900/40"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-4 bg-[#0a1628]/75">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-JhkC6ObqBN4s0bRunLyMBKmxIFo8X1.png"
                alt="Qやん"
                className="w-24 h-24 drop-shadow-lg"
              />
            </div>
            <h2 className="text-5xl font-bold mb-12 text-white tracking-wide">
              CONTACT <span className="text-red-500">INFO</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-12"></div>

            <Card className="bg-slate-900/70 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-12">
                <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-white">東洋医療専門学校 救急救命士学科</h3>
                <div className="space-y-4 sm:space-y-6 text-lg sm:text-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-slate-200">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                    <span className="text-center sm:text-left break-words">大阪府大阪市淀川区西宮原1-5-35</span>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-slate-200">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                    <span>06-6398-2255</span>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-slate-200">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                    <span>elt@toyoiryo.ac.jp</span>
                  </div>
                  <div className="mt-8">
                    <p className="text-center text-white text-lg font-semibold mb-4">
                      救急救命士学科同窓会　絆命会公式LINE
                    </p>
                    <div className="flex justify-center">
                      <a href="https://lin.ee/uT1ayDI" target="_blank" rel="noopener noreferrer">
                        <img
                          src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                          alt="絆命会公式ライン"
                          height="36"
                          className="border-0 hover:scale-110 transition-transform duration-200"
                        />
                      </a>
                    </div>
                    <p className="text-center text-slate-300 text-sm mt-3">
                      ※在校生は追加できません
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/90 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-0Bq56GynKApAagxsgLvno5k3WwCbXH.png"
                alt="Qやん"
                className="w-16 h-16 opacity-80"
              />
            </div>
            <p className="text-xl sm:text-2xl font-bold mb-4 tracking-wide">TMR 東洋メディカルラリー 2025</p>
            <div className="w-16 h-0.5 bg-red-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg opacity-90 mb-2 break-words">主催：東洋医療専門学校　救急救命士学科　同窓会「絆命会」</p>
            <p className="text-base sm:text-lg opacity-90 mb-2 break-words">主幹：TMR 東洋メディカルラリー 実行委員会</p>
            <p className="text-sm sm:text-base opacity-70 break-words">東洋医療専門学校 救急救命士学科</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
