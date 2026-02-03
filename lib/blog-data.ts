export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    featured?: boolean;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "art-of-pour-over-coffee",
        title: "The Art of Pour-Over Coffee",
        excerpt: "Discover the meditative craft of pour-over brewing and why it produces the cleanest cup of coffee you'll ever taste.",
        content: `
            <p><strong>Pour-over coffee isn't just a brewing method — it's a ritual.</strong> At Gulmohar Cafe, we've mastered this art to bring you the purest expression of coffee flavor. When you order a pour-over at our cafe, you're not just getting a drink — you're experiencing centuries of coffee tradition refined for the modern palate.</p>
            
            <h2>Why Pour-Over?</h2>
            <p>Unlike immersion methods like French press, pour-over brewing allows hot water to extract coffee oils and aromatics as it passes through the grounds, resulting in a cleaner, more nuanced cup. The controlled extraction process means you taste every subtle flavor note the beans have to offer — from fruity highs to chocolatey depths.</p>
            
            <p>The paper filter removes most of the coffee oils that can sometimes make other brewing methods feel heavy. This results in a bright, clean cup that showcases the bean's origin characteristics. Whether it's the blueberry notes of an Ethiopian Yirgacheffe or the nutty sweetness of a Colombian, pour-over brings it forward.</p>
            
            <h2>Our Precise Process</h2>
            <p>At Gulmohar, we don't leave pour-over to chance. We use a precise <strong>1:16 coffee-to-water ratio</strong>, meaning for every gram of coffee, we use 16 grams of water. Our water is heated to exactly <strong>96°C</strong> — hot enough to extract properly but not so hot that it burns the grounds.</p>
            
            <p>Our pour follows a specific pattern: a 30-second bloom to release CO2, then a slow, circular pour over the next 2.5 minutes. The total brew time is precisely 3 minutes. We use a gooseneck kettle for maximum control, allowing our baristas to pour in concentric circles that ensure even extraction.</p>
            
            <h2>The Gulmohar Touch</h2>
            <p>Our baristas undergo <strong>40 hours of training</strong> specifically for pour-over techniques. They learn to read the coffee bed, adjust their pour rate based on how the water drains, and troubleshoot common issues in real-time.</p>
            
            <p>We use locally made ceramic drippers from artisans in Khanapur, and source our unbleached paper filters from sustainable producers in Japan. Every detail matters — from the weight of the dripper to the thickness of the filter.</p>
            
            <h2>Try It Yourself</h2>
            <p>Want to learn pour-over at home? We offer monthly <strong>Home Brewing Workshops</strong> every second Saturday. You'll learn the basics, practice your technique, and take home a starter kit. Ask any of our baristas for details, or check our events section.</p>
        `,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=500&fit=crop",
        category: "Coffee Culture",
        author: "Gulmohar Team",
        date: "2026-01-28",
        readTime: "7 min read",
        featured: true,
    },
    {
        slug: "signature-gulmohar-latte",
        title: "Behind Our Signature Gulmohar Latte",
        excerpt: "The secret behind Pune's most beloved latte — hints of cardamom, vanilla, and our house-roasted espresso.",
        content: `
            <p><strong>When we opened Gulmohar Cafe in 2020</strong>, we knew we needed a signature drink that captured our essence — warm, aromatic, and unforgettable. After months of experimentation, countless tastings, and feedback from early customers, the Gulmohar Latte was born. Today, it's our most ordered drink, and we're proud to share its story.</p>
            
            <h2>The Inspiration</h2>
            <p>The Gulmohar tree blooms in vibrant oranges and reds across Pune's streets during summer, much like the warm spices we love in Indian cuisine. We wanted our signature latte to evoke that same warmth — a drink that felt both exotic and familiar, comforting yet exciting.</p>
            
            <p>Our founder spent time in Kerala, visiting spice plantations and understanding how cardamom, vanilla, and cinnamon could work together. The result is a flavor profile that's unmistakably Indian but appeals to any palate.</p>
            
            <h2>The Ingredients</h2>
            <p>Every component is carefully sourced:</p>
            <ul>
                <li><strong>Green Cardamom:</strong> We use freshly ground green cardamom from Idukki, Kerala. The pods are toasted fresh each morning to release their essential oils.</li>
                <li><strong>Madagascar Vanilla:</strong> Real vanilla bean extract, not artificial flavoring. The difference is subtle but essential.</li>
                <li><strong>Ethiopian Espresso:</strong> Our single-origin Ethiopian beans provide a fruity base that complements the spices perfectly.</li>
                <li><strong>Organic Milk:</strong> Locally sourced from farms in Khandala, steamed to velvety microfoam perfection.</li>
            </ul>
            
            <h2>How It's Made</h2>
            <p>Our baristas <strong>toast the cardamom pods fresh each morning</strong>, crushing them just before adding to the milk. As the milk steams, the cardamom infuses its aromatic oils into the foam. The espresso is pulled fresh, then combined with the spiced milk.</p>
            
            <p>The finishing touch is a drizzle of vanilla syrup in a leaf pattern and a light sprinkle of our house-made aromatic spice dust — a blend of cardamom, cinnamon, and edible rose petals.</p>
            
            <h2>Customer Favorites: Variations</h2>
            <p>Based on customer feedback, we've created popular variations:</p>
            <ul>
                <li><strong>Iced Gulmohar Latte:</strong> The same flavors, served cold over single-origin ice cubes</li>
                <li><strong>Oat Gulmohar:</strong> Vegan-friendly version with oat milk</li>
                <li><strong>Double Spice:</strong> Extra cardamom for those who love it bold</li>
            </ul>
            
            <p>Come taste the drink that started it all. The Gulmohar Latte is available hot or iced, and we're always happy to customize it to your taste.</p>
        `,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=500&fit=crop",
        category: "Our Menu",
        author: "Gulmohar Team",
        date: "2026-01-20",
        readTime: "6 min read",
        featured: true,
    },
    {
        slug: "farm-to-cup-journey",
        title: "Farm to Cup: Our Coffee Sourcing Journey",
        excerpt: "How we travel to coffee farms across India and Ethiopia to find the perfect beans for your cup.",
        content: `
            <p><strong>Great coffee starts at the source.</strong> That's why we personally visit the farms that grow our beans, building direct relationships with farmers who share our passion. It's not just about quality — it's about ensuring that every cup you drink supports ethical, sustainable agriculture.</p>
            
            <h2>Our Partner Farms</h2>
            <p>We work with <strong>family estates in Coorg, Karnataka</strong>, where coffee has been grown for over 150 years. These farms are nestled in the Western Ghats, at elevations perfect for arabica cultivation. The cool nights and warm days create beans with exceptional flavor complexity.</p>
            
            <p>Internationally, we source from <strong>small cooperatives in Ethiopia's Yirgacheffe region</strong> — the birthplace of coffee. These beans bring bright, fruity notes that our customers love. Each cooperative represents dozens of small farmers who pool their harvest for processing.</p>
            
            <h2>Sustainable Practices</h2>
            <p>All our partner farms use <strong>shade-grown techniques</strong>, growing coffee under a canopy of native trees. This preserves biodiversity, provides habitat for birds, and naturally fertilizes the soil. It also results in slower-maturing cherries with more developed flavors.</p>
            
            <p>We pay <strong>25-40% above market prices</strong> to ensure farmers can afford organic fertilizers, water-conserving processing methods, and fair wages for their workers. This isn't charity — it's an investment in quality. Happy farmers produce better coffee.</p>
            
            <h2>The Selection Process</h2>
            <p>Every season, our head roaster travels to our partner farms for cupping sessions. We cup <strong>hundreds of samples</strong>, looking for beans with clean acidity, balanced body, and distinctive flavor notes. Only the top 10% make it to Gulmohar Cafe.</p>
            
            <p>Once selected, beans are processed on-site (washed or natural, depending on the origin) and shipped within weeks of harvest — never from old stock. We roast in small batches at our facility in Pune, ensuring freshness.</p>
            
            <h2>Traceability</h2>
            <p>Ask any barista about the coffee you're drinking, and they can tell you: the farm, the farmer's name, the elevation, the processing method, and the roast date. That's the Gulmohar promise — <strong>complete traceability from farm to cup</strong>.</p>
        `,
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=500&fit=crop",
        category: "Sustainability",
        author: "Gulmohar Team",
        date: "2026-01-15",
        readTime: "8 min read",
    },
    {
        slug: "day-in-life-gulmohar",
        title: "A Day in the Life at Gulmohar Cafe",
        excerpt: "From 5 AM prep to evening close — experience the rhythm and passion behind your favorite cafe.",
        content: `
            <p><strong>The lights at Gulmohar flicker on at 5 AM</strong>, long before the first customer arrives. While Pune sleeps, our team is already at work, preparing for the day ahead. Here's what happens behind the scenes to bring you that perfect morning coffee.</p>
            
            <h2>5:00 AM - The Bakers Arrive</h2>
            <p>Our pastry team is first through the door. Ovens are preheated to exactly <strong>175°C for croissants, 180°C for muffins</strong>. The smell of butter, chocolate, and fresh bread soon fills the kitchen. By 7 AM, we'll have over 100 freshly baked items ready for display.</p>
            
            <p>Croissant dough was prepared the night before and left to proof slowly in the refrigerator. This morning, it's shaped, egg-washed, and baked to golden perfection — 37 flaky layers in each one.</p>
            
            <h2>6:30 AM - Espresso Machine Calibration</h2>
            <p>Our opening barista arrives and begins the ritual of <strong>dialing in</strong> the espresso. Every morning, we adjust the grinder based on humidity, bean age, and ambient temperature. We pull 5-6 test shots, measuring extraction time and tasting for balance, before we're satisfied.</p>
            
            <h2>7:00 AM - Doors Open</h2>
            <p>The first customers arrive — often the same faces. We know their names, their orders, their stories. <strong>"The usual, Rahul?"</strong> we ask. He nods, settles into his corner table with the newspaper, and starts his day the same way he has for three years.</p>
            
            <h2>Throughout the Day</h2>
            <p>By mid-morning, the cafe transforms. Students claim tables for study sessions. Laptops open as remote workers settle in. Couples meet for first dates. Friends catch up over coffee and cake. Business meetings happen in our private corner booth.</p>
            
            <p>Each guest adds to our story, and we add to theirs. We've seen proposals, celebrations, study groups that lasted entire semesters, and friendships that started at our communal table.</p>
            
            <h2>The Afternoon Lull</h2>
            <p>Around 3 PM, things quiet down. We use this time for deep cleaning, restocking, and preparing for the evening rush. Our baristas practice latte art, experimenting with new designs.</p>
            
            <h2>10:00 PM - Closing Ritual</h2>
            <p>After the last guest leaves, we clean every surface, break down the espresso machine for maintenance, prep doughs for tomorrow, and count the register. Then — our favorite part — the team shares a final cup of coffee together, reflecting on the day.</p>
        `,
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=500&fit=crop",
        category: "Behind the Scenes",
        author: "Gulmohar Team",
        date: "2026-01-10",
        readTime: "7 min read",
    },
    {
        slug: "food-coffee-pairings",
        title: "5 Perfect Food & Coffee Pairings",
        excerpt: "Elevate your cafe experience with these expertly curated food and coffee combinations.",
        content: `
            <p><strong>Just like wine and cheese, coffee and food create magic when paired thoughtfully.</strong> The right combination can enhance both the drink and the dish, creating a symphony of flavors that's greater than the sum of its parts. Here are our top recommendations, developed through months of tasting and refinement.</p>
            
            <h2>1. Espresso + Dark Chocolate Brownie</h2>
            <p>This is a classic for a reason. The <strong>intense bitterness of espresso</strong> cuts through the sweet richness of our 70% dark chocolate fudge brownie. The result is a balanced bite where neither element overpowers the other.</p>
            
            <p><em>Pro tip:</em> Take a bite of brownie, let it melt slightly, then sip the espresso. The chocolate flavors in the coffee will suddenly become more pronounced.</p>
            
            <h2>2. Cappuccino + Butter Croissant</h2>
            <p>The <strong>creamy foam and flaky pastry</strong> are made for each other. The cappuccino's milky sweetness complements the buttery layers of our house-baked croissant. For the bold, dip a corner of the croissant into the foam — it's indulgent perfection.</p>
            
            <h2>3. Cold Brew + Avocado Toast</h2>
            <p>Our <strong>smooth, low-acid cold brew</strong> is the perfect companion for creamy, savory avocado toast. The coffee's subtle chocolate notes don't compete with the toast's freshness, making this our most popular breakfast combination.</p>
            
            <p>We top our avocado toast with chili flakes, cherry tomatoes, and a poached egg. The cold brew's refreshing nature cleanses the palate between bites.</p>
            
            <h2>4. Gulmohar Latte + Masala Paneer Sandwich</h2>
            <p><strong>Spiced latte meets spiced sandwich</strong> — this is an Indian flavor explosion. The cardamom in our signature latte echoes the garam masala in our grilled paneer sandwich, creating a harmonious flavor profile that celebrates Indian cuisine.</p>
            
            <h2>5. Matcha Latte + Fresh Fruit Bowl</h2>
            <p><strong>Earthy matcha and bright fruits</strong> create a refreshing, healthy combination. The grassy, umami notes of ceremonial-grade matcha pair beautifully with our seasonal fruit bowl — currently featuring Mahabaleshwar strawberries, pomegranate, and papaya.</p>
            
            <h2>Create Your Own Pairing</h2>
            <p>Don't see your perfect match? Ask our baristas! We love helping customers discover new combinations. Some of our best menu items came from customer suggestions.</p>
        `,
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=500&fit=crop",
        category: "Our Menu",
        author: "Gulmohar Team",
        date: "2026-01-05",
        readTime: "6 min read",
    },
    {
        slug: "story-behind-interiors",
        title: "The Story Behind Our Interiors",
        excerpt: "How we designed a space that feels like home — inspired by Pune's heritage and modern comfort.",
        content: `
            <p><strong>When you step into Gulmohar Cafe, you're meant to feel embraced.</strong> Every design choice, from the color of the walls to the texture of the furniture, tells a story about who we are and what we value. Here's how we created a space that's become Pune's living room.</p>
            
            <h2>The Color Palette</h2>
            <p>Our walls feature <strong>warm terracotta and deep sage green</strong> — colors drawn directly from the Gulmohar tree and Maharashtra's earth. The terracotta references the brilliant red-orange of Gulmohar blossoms, while the green represents the leaves and Pune's lush monsoon greenery.</p>
            
            <p>Natural wood tones throughout provide warmth and grounding. We avoided stark whites and cold grays — this isn't a sterile tech office; it's a community gathering place.</p>
            
            <h2>Handcrafted by Local Artisans</h2>
            <p>Every piece of furniture in Gulmohar was <strong>handcrafted by Pune-based artisans</strong>. Our tables come from a family woodworking shop in Hadapsar that's been operating for three generations. The curved edges and live-edge details showcase the natural beauty of salvaged teak.</p>
            
            <p>The ceramic cups you drink from? Made by a <strong>family pottery in Khanapur</strong>. Each cup is slightly different, with subtle variations in glaze and shape that remind you a human hand made it.</p>
            
            <h2>Lighting Magic</h2>
            <p>We spent weeks perfecting our lighting. Morning light is <strong>bright and energizing</strong> — perfect for early work sessions. As the day progresses, the lights slowly dim to create a <strong>cozy evening ambiance</strong>. All our fixtures are dimmable and warm-toned (2700K), never harsh.</p>
            
            <p>Pendant lights hang at varying heights, creating visual interest and intimate zones within the larger space.</p>
            
            <h2>The Details</h2>
            <p>Look around, and you'll notice the small things:</p>
            <ul>
                <li><strong>Vintage books</strong> on the shelves — curated from second-hand shops across Pune</li>
                <li><strong>Fresh flowers daily</strong> — sourced from Pune's flower market each morning</li>
                <li><strong>Curated playlists</strong> — designed to match the energy of each time of day</li>
                <li><strong>Art by local artists</strong> — rotated monthly to showcase Pune's talent</li>
            </ul>
            
            <p>Every detail is intentional. Because we believe that atmosphere is as important as coffee.</p>
        `,
        image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=500&fit=crop",
        category: "Our Space",
        author: "Gulmohar Team",
        date: "2025-12-28",
        readTime: "7 min read",
    },
    {
        slug: "sustainable-practices",
        title: "Sustainable Practices at Gulmohar",
        excerpt: "From compostable cups to solar panels — how we're working to minimize our environmental footprint.",
        content: `
            <p><strong>We believe that great coffee shouldn't cost the earth.</strong> As a business that serves hundreds of customers daily, we recognize our environmental responsibility. Here's an honest look at what we're doing — and what we still need to improve.</p>
            
            <h2>Zero-Waste Goals</h2>
            <p>Every month, we generate about <strong>200kg of coffee grounds</strong>. Instead of sending them to landfill, we partner with urban farms across Pune to use them as nutrient-rich compost. Our grounds currently feed vegetable gardens in Kothrud and Baner.</p>
            
            <p>Food waste is minimized through careful portioning, dynamic menu planning, and <strong>end-of-day donation programs</strong>. Unsold pastries go to local shelters each evening. We're proud to say that less than 5% of our food ends up as waste.</p>
            
            <h2>Sustainable Packaging</h2>
            <p>All our takeaway cups, containers, and cutlery are made from <strong>sugarcane fiber (bagasse)</strong> — a byproduct of sugar production. They're fully compostable within 90 days in industrial composting facilities. We've partnered with a local composter to ensure they're disposed of properly.</p>
            
            <p>We offer a <strong>₹20 discount</strong> to customers who bring their own reusable cups. So far, this has saved over 15,000 single-use cups.</p>
            
            <h2>Energy Efficiency</h2>
            <p><strong>50% of our electricity</strong> now comes from rooftop solar panels installed last year. Our goal is 80% by 2027. All our appliances — from the espresso machine to the dishwasher — are energy-efficient rated.</p>
            
            <p>We've replaced all lighting with LED bulbs and installed motion sensors in less-used areas. These small changes add up to significant energy savings.</p>
            
            <h2>Local Sourcing</h2>
            <p>Wherever possible, we source locally:</p>
            <ul>
                <li><strong>Milk:</strong> From farms in Khandala, 80km away</li>
                <li><strong>Produce:</strong> Weekly deliveries from Baner and Hinjewadi organic farms</li>
                <li><strong>Pastries:</strong> Baked fresh in-house daily, avoiding transportation</li>
                <li><strong>Honey:</strong> From beekeepers in Mulshi</li>
            </ul>
            
            <h2>What We're Still Working On</h2>
            <p>We're honest about our challenges. Single-origin coffee from Ethiopia creates a carbon footprint we're working to offset. Our air conditioning is still conventional — we're researching greener alternatives. Every month, we review our practices and look for ways to improve.</p>
            
            <p>Sustainability is a journey, not a destination. Thank you for joining us on it.</p>
        `,
        image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=500&fit=crop",
        category: "Sustainability",
        author: "Gulmohar Team",
        date: "2025-12-20",
        readTime: "7 min read",
    },
    {
        slug: "seasonal-specials-february",
        title: "Seasonal Specials: What's Brewing This Month",
        excerpt: "Discover our February 2026 limited-time offerings — from rose lattes to strawberry desserts.",
        content: `
            <p><strong>As February brings a hint of spring to Pune</strong>, we're introducing special drinks and treats that celebrate the season. These limited-time offerings are available only this month, so don't wait!</p>
            
            <h2>Rose Cardamom Latte</h2>
            <p>Our Gulmohar Latte's <strong>romantic cousin</strong> — infused with Gulkand (rose petal jam) from Pushkar and topped with dried rose petals. The floral notes of rose blend beautifully with our signature cardamom, creating a drink that's both familiar and excitingly new.</p>
            
            <p><em>Available hot or iced. Pairs perfectly with our Pistachio Rose Cake.</em></p>
            
            <h2>Strawberry Cheesecake</h2>
            <p><strong>Fresh strawberries from Mahabaleshwar</strong> atop our classic New York cheesecake — a seasonal delight available only while strawberry season lasts. The Mahabaleshwar berries are sweeter and more fragrant than any you'll find elsewhere in India.</p>
            
            <p>Our cream cheese is house-made, and the graham cracker crust is baked fresh daily. This is as close to authentic New York cheesecake as you'll find in Pune.</p>
            
            <h2>Honey Lavender Cold Brew</h2>
            <p><strong>Smooth cold brew</strong> infused with local Mulshi honey and a hint of French lavender — perfect for Pune's warm February afternoons. The lavender adds just a whisper of floral complexity without overwhelming the coffee.</p>
            
            <p>This drink was actually suggested by a customer last year and was so popular in testing that we added it to this month's specials.</p>
            
            <h2>Mango Blossom Iced Tea</h2>
            <p>As mango season approaches, we're getting a head start with our <strong>Mango Blossom Iced Tea</strong> — green tea infused with dried mango blossoms and a touch of honey. Refreshing, unique, and utterly Maharashtrian.</p>
            
            <h2>Valentine's Special: Heart Latte Art</h2>
            <p>Throughout February, request a <strong>heart design</strong> in your latte at no extra charge. Perfect for date nights or as a small act of self-love.</p>
            
            <h2>Limited Availability</h2>
            <p>These specials are available from <strong>February 1-28, 2026</strong>. Some items may sell out before month's end — especially the strawberry cheesecake, which depends on fresh deliveries from Mahabaleshwar.</p>
            
            <p>Don't miss out — come experience the taste of early spring at Gulmohar!</p>
        `,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=500&fit=crop",
        category: "Our Menu",
        author: "Gulmohar Team",
        date: "2026-02-01",
        readTime: "5 min read",
        featured: true,
    },
    {
        slug: "guide-to-latte-art",
        title: "The Ultimate Guide to Latte Art",
        excerpt: "From hearts to rosettas — learn the secrets behind Instagram-worthy latte art and how our baristas master it.",
        content: `
            <p><strong>Latte art is where science meets creativity.</strong> That perfect rosetta or heart floating on your cappuccino isn't just decoration — it's proof that every element of your drink has been prepared with precision and care. Here's what goes into creating latte art at Gulmohar.</p>
            
            <h2>The Foundation: Perfect Microfoam</h2>
            <p>Latte art is impossible without properly steamed milk. We create what baristas call <strong>microfoam</strong> — milk with thousands of tiny bubbles so small they're invisible to the naked eye. This gives the milk a glossy, paint-like consistency perfect for pouring.</p>
            
            <p>Our baristas steam milk to exactly <strong>55-62°C</strong>. Too hot and the proteins break down, making the milk thin and flat. Too cold and it won't integrate with the espresso properly.</p>
            
            <h2>The Pour Techniques</h2>
            <p>Once the milk is ready, the magic happens in the pour:</p>
            <ul>
                <li><strong>Heart:</strong> The simplest design — pour into the center, then through to create the point</li>
                <li><strong>Rosetta:</strong> Oscillate the pitcher while moving backward to create leaf-like patterns</li>
                <li><strong>Tulip:</strong> Stack multiple hearts on top of each other, then pull through</li>
                <li><strong>Swan:</strong> Our most advanced design — combines rosetta body with a pulled neck and head</li>
            </ul>
            
            <h2>Why It Matters</h2>
            <p>Latte art isn't just aesthetics. If a barista can create a clean rosetta, it means the espresso has proper crema, the milk is textured perfectly, and the temperature is correct. <strong>Beautiful latte art is proof of a well-made drink.</strong></p>
            
            <h2>Learn It Yourself</h2>
            <p>We offer <strong>Latte Art Workshops</strong> every month. In 2 hours, you'll learn to steam milk properly and create your first heart design. Advanced workshops cover rosetta and tulip techniques. Check our events section for the next session!</p>
        `,
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&h=500&fit=crop",
        category: "Coffee Culture",
        author: "Gulmohar Team",
        date: "2025-12-15",
        readTime: "6 min read",
    },
    {
        slug: "espresso-machine-story",
        title: "Our Espresso Machine: The Heart of Gulmohar",
        excerpt: "Meet Victoria, our La Marzocco Linea PB — the Italian craftsmanship behind every shot we pull.",
        content: `
            <p><strong>Behind every great cafe is a great espresso machine.</strong> At Gulmohar, that's Victoria — our La Marzocco Linea PB. This Italian-made masterpiece is the heart of our operation, and we've named her in honor of her heritage.</p>
            
            <h2>Why La Marzocco?</h2>
            <p>La Marzocco machines are handmade in Florence, Italy, by craftspeople who've been perfecting espresso machines since 1927. The <strong>Linea PB</strong> (Performance Brewing) is their flagship commercial model, known for:</p>
            <ul>
                <li><strong>Temperature stability:</strong> Dual boilers maintain precise temperature for both steaming and brewing</li>
                <li><strong>Consistency:</strong> Every shot extracts identically, cup after cup</li>
                <li><strong>Durability:</strong> These machines last 20+ years with proper maintenance</li>
                <li><strong>Repairability:</strong> Every part is replaceable, reducing waste</li>
            </ul>
            
            <h2>Daily Rituals</h2>
            <p>Victoria gets a lot of attention. Every morning, she's backflushed, grouped cleaned, and her shower screens are scrubbed. Weekly, we descale the steam wand and deep-clean the drip tray. Monthly, our technician visits for preventive maintenance.</p>
            
            <p>We also <strong>dial in</strong> our espresso every single morning, adjusting grind size and dose based on humidity and bean age to ensure perfect 25-30 second extractions.</p>
            
            <h2>The Investment</h2>
            <p>A La Marzocco Linea PB costs over ₹10 lakhs. It's the single largest investment Gulmohar has made — and worth every rupee. Cheap machines produce inconsistent shots, break frequently, and make mediocre coffee. We believe you deserve better.</p>
            
            <h2>Come Meet Victoria</h2>
            <p>Ask any of our baristas to show you Victoria up close. We love talking about her, and during slow hours, we might even let you watch us pull some shots!</p>
        `,
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&h=500&fit=crop",
        category: "Behind the Scenes",
        author: "Gulmohar Team",
        date: "2025-12-10",
        readTime: "6 min read",
    },
    {
        slug: "community-events-2026",
        title: "Community Events at Gulmohar: 2026 Calendar",
        excerpt: "From poetry nights to coffee workshops — discover how Gulmohar brings Pune together beyond great coffee.",
        content: `
            <p><strong>Gulmohar is more than a cafe — it's a community space.</strong> Since opening, we've hosted hundreds of events that bring Pune together. Here's what's happening in 2026 and how you can be part of it.</p>
            
            <h2>Weekly Events</h2>
            <p>These happen every week, rain or shine:</p>
            <ul>
                <li><strong>Open Mic Night (Fridays, 7 PM):</strong> Poetry, music, stand-up comedy — the stage is yours. Sign up at the counter by 6:30 PM.</li>
                <li><strong>Book Club (Sundays, 5 PM):</strong> We pick a new book each month. Join the discussion, or just listen with your coffee.</li>
                <li><strong>Analog Sundays:</strong> No laptops, no phones (okay, maybe for photos). Just conversation, board games, and connection.</li>
            </ul>
            
            <h2>Monthly Events</h2>
            <ul>
                <li><strong>Home Brewing Workshop (2nd Saturday):</strong> Learn pour-over, French press, and cold brew techniques. ₹1,500 includes materials and take-home kit.</li>
                <li><strong>Latte Art Class (Last Saturday):</strong> Create Instagram-worthy designs. ₹1,000 includes all materials.</li>
                <li><strong>Local Artist Showcase:</strong> Each month, we feature a new Pune artist on our walls. Opening night includes meet-and-greet with free coffee.</li>
            </ul>
            
            <h2>Special 2026 Events</h2>
            <ul>
                <li><strong>Gulmohar's 6th Anniversary (June 15):</strong> Live music, special menu items, and giveaways all day</li>
                <li><strong>Coffee Fest Participation (October):</strong> We'll be at Pune's Coffee Fest with demos and tastings</li>
                <li><strong>Diwali Pop-Up Market (November):</strong> Local artisans selling handmade gifts, curated by Gulmohar</li>
            </ul>
            
            <h2>Want to Host an Event?</h2>
            <p>Have an idea for an event at Gulmohar? We support local creators, educators, and community builders. Email us at events@gulmoharcafe.com with your proposal!</p>
        `,
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=500&fit=crop",
        category: "Events",
        author: "Gulmohar Team",
        date: "2026-01-02",
        readTime: "6 min read",
    },
    {
        slug: "science-of-coffee-extraction",
        title: "The Science Behind Perfect Coffee Extraction",
        excerpt: "Why some coffees taste bitter, sour, or just right — understanding extraction for the curious coffee lover.",
        content: `
            <p><strong>Coffee brewing is chemistry you can taste.</strong> When you think your coffee tastes "off," it's usually because of extraction — how much flavor the water pulled from the grounds. Let's demystify this.</p>
            
            <h2>What Is Extraction?</h2>
            <p>When hot water contacts ground coffee, it dissolves and extracts compounds — sugars, acids, oils, and bitter elements. About <strong>30% of a coffee bean</strong> is soluble, but we only want to extract 18-22% for optimal taste.</p>
            
            <ul>
                <li><strong>Under-extracted (less than 18%):</strong> Tastes sour, thin, and acidic. The pleasant sweetness hasn't dissolved yet.</li>
                <li><strong>Well-extracted (18-22%):</strong> Balanced, sweet, with pleasant acidity and body. This is the goal.</li>
                <li><strong>Over-extracted (more than 22%):</strong> Tastes bitter, astringent, and harsh. Unpleasant compounds have been pulled.</li>
            </ul>
            
            <h2>Variables That Affect Extraction</h2>
            <p>Everything affects extraction, but these are the big four:</p>
            <ul>
                <li><strong>Grind size:</strong> Finer grinds extract faster (more surface area). Coarser grinds extract slower.</li>
                <li><strong>Water temperature:</strong> Hotter water (96°C) extracts more than cooler water (85°C).</li>
                <li><strong>Contact time:</strong> Longer brew times extract more. Espresso is 25-30 seconds; cold brew is 12-24 hours.</li>
                <li><strong>Agitation:</strong> Stirring or turbulence speeds extraction.</li>
            </ul>
            
            <h2>How We Control It at Gulmohar</h2>
            <p>Our baristas are trained to recognize extraction problems by taste. If a shot tastes sour, we might grind finer or increase water temperature. Bitter? Coarser grind or shorter extraction time.</p>
            
            <p>We use <strong>refractometers</strong> to measure total dissolved solids (TDS) and calculate extraction percentage. It's nerdy, but it ensures every cup is perfectly balanced.</p>
            
            <h2>Why This Matters for You</h2>
            <p>Understanding extraction helps you appreciate coffee and communicate what you like. If you tell a barista "this tastes sour," they know to adjust extraction. You become part of the process!</p>
        `,
        image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&h=500&fit=crop",
        category: "Coffee Culture",
        author: "Gulmohar Team",
        date: "2025-11-20",
        readTime: "7 min read",
    },
];

export const blogCategories = [
    "All",
    "Coffee Culture",
    "Our Menu",
    "Sustainability",
    "Behind the Scenes",
    "Our Space",
    "Events",
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
    return blogPosts.filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
    if (category === "All") return blogPosts;
    return blogPosts.filter((post) => post.category === category);
}
