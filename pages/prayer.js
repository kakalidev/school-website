import React from 'react'
import styles from "../styles/prayer.module.css";

function prayer() {
    return (
        <div className={styles.container}>
            <div className="prayerContent">
            <h1 className={styles.prayHeading}>Our Prayer</h1>
            <p style={{marginTop:"30px", marginBottom:"30px"}}>
                The school prayer represents our shared values and aspirations. it inspires unity, pride and sense of belonging among students, teachers and alumni.

            </p>
            <blockquote className={styles.block}>
                <h3 className={styles.blockHeading}>
                    <br />
                    আমাদের এই কাকলি বিদ্যামন্দিরে, <br />
                    গাহি মোরা সবে ঐক্যতান। <br />
                    ছোট বড় নেই নেই ভেদাভেদ - <br />
                    মিলেমিশে হবো এক প্রাণ <br />

                    কাকলি থেকেই পেয়েছি আমরা <br />
                    নবজীবনের নবদিশা,<br />
                    জ্ঞানের আলোকে দূর হয়ে গেছে <br />
                    সবার মনের অমানিশা। <br />
                    <br /> <br />
                    পিতা-মাতার আশীষ সাথে <br />
                    শিক্ষিকাদের আশীর্বাদ - <br />
                    হোক না যতই বন্ধুর পথ <br />
                    করবে মোদের পরিত্রান।। <br />
                    <br /> <br />
                    অংক ভূগোল বিজ্ঞান মাঝে <br />
                    জড়িয়ে রয়েছে কত স্মৃতি - <br />
                    বকুনির সাথে স্নেহমাখা মুখ <br />
                    ভালোবাসা আর কত প্রীতি। <br />
                    <br /> <br />
                    বিদ্যাসাগর বিবেকানন্দ <br />
                    বীর নেতাজীর এই দেশে । <br />
                    এসেছে বিনয় , বাদল -দীনেশ <br />
                    বীর ক্ষুদিরাম শিশুর বেশে - <br />
                    তাদের পথেই চলব মোরা, <br />
                    রাখবো বিদ্যালয়ের মান । <br />
                    <br /> <br />
                    ছোট বড় নেই , নেই ভেদাভেদ <br />
                    মিলেমিশে হব এক প্রাণ।। <br />
                </h3>
            </blockquote>
            </div>

            <div className={styles.prayerVideo}>
            <iframe width="560" height="315" className={styles.pray} src="https://www.youtube.com/embed/WzKscRMbgLA?si=B881_3u4QMP-3GCZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            
        </div>
    )
}

export default prayer