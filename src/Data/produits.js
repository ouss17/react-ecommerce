const produits = [
    {
        id:1,
        titre:"Backpack",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/sacsamain/1.jpg",
        prix:149,
        stock:10,
        categorie:'sacamain',
        promo:0
    },
    {
        id:2,
        titre:"Barrel",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/sacsamain/2.jpg",
        prix:99,
        stock:1,
        categorie:'sacamain',
        promo:0
    },
    {
        id:3,
        titre:"Clutch",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/sacsamain/3.jpg",
        prix:49,
        stock:100,
        categorie:'sacamain',
        promo:0
    },
    {
        id:4,
        titre:"Satchel",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/sacsamain/4.jpg",
        prix:80,
        stock:54,
        categorie:'sacamain',
        promo:20
    },
    {
        id:5,
        titre:"Messenger",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/sacsamain/5.jpg",
        prix:5999,
        stock:4,
        categorie:'sacamain',
        promo:0
    },
    {
        id:6,
        titre:"Hobo",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/sacsamain/6.jpg",
        prix:8499,
        stock:2,
        categorie:'sacamain',
        promo:50
    },
    {
        id:7,
        titre:"Minaudiere",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/sacsamain/7.jpg",
        prix:165,
        stock:30,
        categorie:'sacamain',
        promo:0
    },
    {
        id:8,
        titre:"Duffel",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/sacsamain/8.jpg",
        prix:10,
        stock:1000,
        categorie:'sacamain',
        promo:0
    },



    {
        id:9,
        titre:"Alliance",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/bagues/1.jpg",
        prix:149,
        stock:10,
        categorie:'bague',
        promo:0
    },
    {
        id:10,
        titre:"Anneau de doctorat",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/bagues/2.jpg",
        prix:99,
        stock:1,
        categorie:'bague',
        promo:0
    },
    {
        id:11,
        titre:"Episcopal",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/bagues/3.jpg",
        prix:49,
        stock:100,
        categorie:'bague',
        promo:0
    },
    {
        id:12,
        titre:"Aqiq",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/bagues/4.jpg",
        prix:80,
        stock:54,
        categorie:'bague',
        promo:20
    },
    {
        id:13,
        titre:"Bague-armure",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/bagues/5.jpg",
        prix:5999,
        stock:4,
        categorie:'bague',
        promo:0
    },
    {
        id:14,
        titre:"Chevalière",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/bagues/6.jpg",
        prix:8499,
        stock:2,
        categorie:'bague',
        promo:50
    },
    {
        id:15,
        titre:"Jonc",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/bagues/7.jpg",
        prix:165,
        stock:30,
        categorie:'bague',
        promo:0
    },
    {
        id:16,
        titre:"Solitaire",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/bagues/8.jpg",
        prix:10,
        stock:1000,
        categorie:'bague',
        promo:0
    },
    {
        id:17,
        titre:"Camée",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/bagues/9.jpg",
        prix:125,
        stock:5,
        categorie:'bague',
        promo:0
    },



    {
        id:18,
        titre:"Sneakers",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/chaussures/1.jpg",
        prix:149,
        stock:10,
        categorie:'chaussures',
        promo:0
    },
    {
        id:19,
        titre:"Loafers",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/chaussures/2.jpg",
        prix:99,
        stock:1,
        categorie:'chaussures',
        promo:0
    },
    {
        id:20,
        titre:"Mocassins",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/chaussures/3.jpg",
        prix:49,
        stock:100,
        categorie:'chaussures',
        promo:0
    },
    {
        id:21,
        titre:"Desert boots",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/chaussures/4.jpg",
        prix:80,
        stock:54,
        categorie:'chaussures',
        promo:20
    },
    {
        id:22,
        titre:"Monkstraps",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/chaussures/5.jpg",
        prix:5999,
        stock:4,
        categorie:'chaussures',
        promo:0
    },
    {
        id:23,
        titre:"Godya",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/chaussures/6.jpg",
        prix:8499,
        stock:2,
        categorie:'chaussures',
        promo:50
    },
    {
        id:24,
        titre:"Klark",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/chaussures/7.jpg",
        prix:165,
        stock:30,
        categorie:'chaussures',
        promo:0
    },
    {
        id:25,
        titre:"Qabqab",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/chaussures/8.jpg",
        prix:10,
        stock:1000,
        categorie:'chaussures',
        promo:0
    },
    {
        id:26,
        titre:"Bligha",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum pulvinar tristique. Duis quis dignissim ante. Curabitur volutpat fringilla nibh at pellentesque. Pellentesque maximus tortor ac molestie vestibulum. Praesent accumsan in arcu quis faucibus. Sed consequat, leo eu blandit commodo, ante turpis gravida leo, ac aliquam metus lorem quis ipsum. Donec consequat vulputate enim, vitae eleifend neque ornare at. Nunc a blandit nulla. ",
        descriptionCourte:"Lorem ipsum dolor sit amet, consectetur.",
        img:"https://tokmo.fr/public/cloudcampus/groupe2/ecommerce/produits/miniatures/chaussures/9.jpg",
        prix:125,
        stock:5,
        categorie:'chaussures',
        promo:0
    },


    
]


export default produits