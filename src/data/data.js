import user1 from './../../assets/images/specialist/user1.jpg';
import user2 from './../../assets/images/specialist/user2.png';
import user3 from './../../assets/images/specialist/user3.png';
import user4 from './../../assets/images/specialist/user4.png';
import user5 from './../../assets/images/specialist/user5.png';
import user6 from './../../assets/images/specialist/user6.png';
import user7 from './../../assets/images/specialist/user7.png';
import user8 from './../../assets/images/specialist/user8.png';
import user9 from './../../assets/images/specialist/user9.png';
import user10 from './../../assets/images/specialist/user10.png';
import user11 from './../../assets/images/specialist/user11.jpg';
import user12 from './../../assets/images/specialist/user12.png';
import salon1 from './../../assets/images/salon/salon1.jpg';
import salon2 from './../../assets/images/salon/salon2.jpg';
import salon3 from './../../assets/images/salon/salon3.jpg';
import salon4 from './../../assets/images/salon/salon4.jpg';
import salon5 from './../../assets/images/salon/salon5.jpg';
import salon6 from './../../assets/images/salon/salon6.jpg';
class Data {
    salons = [
            {
                id : 0,
                name : 'Սյուզի գեղեցկության սրահ',
                img : salon1,
                address : "Տիգրան Մեծ 74",
                phone : "+374 98 52 64 78",
                info :`Մեր գեղեցկության սրահը գործում է Վանաձորում դեռևս 2007թ-ից ։
                	Մեր հավատարիմ և մշտական գործնկերներն են  մի շարք աշխարահրջակ ընկերություններ,
                	որոնցից են Bell Cosmetics,Gity Cosmetics, Gity Cosmetics և այլ ընկերություններ`,
                category : [
                    {
                        prof : "Վարսահարդարներ",
                        id : '0-0',
                        workers : [
                            {
                                id : '0-0-0',
                                salonTitle : 'Սյուզի գեղեցկության սրահ',
                                salonAddress : "Տիգրան Մեծ 74",
                                img : user1,
                                name : "Լիլիթ",
                                surname : "Կարապետյան",
                                age : "34",
                                textAbout : "Ունեմ 10 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Մոսկվայում ",
                                socialNetwork : "facebook - https://www.facebook.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            },
                            {
                                id : '0-0-1',
                                salonTitle : 'Սյուզի գեղեցկության սրահ',
                                salonAddress : "Տիգրան Մեծ 74",
                            	img : user2,
                                name : "Անուշ",
                                surname : "Վարդանյան",
                                age : "32",
                                textAbout : "Ունեմ 2 տարվա աշխատանքային փորձ",
                                socialNetwork : "instagram -https://www.instagram.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],
                            },
                            {
                                id : '0-0-2',
                                salonTitle : 'Սյուզի գեղեցկության սրահ',
                                salonAddress : "Տիգրան Մեծ 74",
                            	img : user3,
                                name : "Հասմիկ ",
                                surname : "Չիլինգարյան",
                                age : "24",
                                textAbout : "Ունեմ 2 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Պեկինում ",
                                socialNetwork : "facebook - https://www.facebook.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],
                            }
                        ]

                    },
                    {
                    	prof : "Դիմահարդարներ",
                        id : '0-1',
                        workers : [
                            {
                                id : '0-1-0',
                                salonTitle : 'Սյուզի գեղեցկության սրահ',
                                salonAddress : "Տիգրան Մեծ 74",
                                img : user4,
                                name : "Հայկուհի",
                                surname : "Կարապետյան",
                                age : "34",
                                textAbout : "Ունեմ 10 տարվա աշխատանքային փորձ, վերապատրաստվել եմ ԱՄՆ-ում ",
                                socialNetwork : "facebook - https://www.facebook.com/Haykuhi5616156",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            }
                        ]
                    },
                    {
                    	prof : "Մատնահարդարներ",
                        id : '0-2',
                        workers : [
                            {
                                id : '0-2-0',
                                salonTitle : 'Սյուզի գեղեցկության սրահ',
                                salonAddress : "Տիգրան Մեծ 74",
                                img : user5,
                                name : "Սիրարփի",
                                surname : "Հայրապետյան",
                                age : "25",
                                textAbout : "Ունեմ 3 տարվա աշխատանքային փորձ,վերապատրաստվել եմ Երևանում ",
                                socialNetwork : "instagram -https://www.instagram.com/245454 ",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            }
                        ]
                    },
                    {
                        prof : "Կոսմետոլոգներ",
                        id : '0-3',
                        workers : [
                            {
                                id : '0-3-0',
                                salonTitle : 'Սյուզի գեղեցկության սրահ',
                                salonAddress : "Տիգրան Մեծ 74",
                                img : user6,
                                name : "Մանե",
                                surname : "Իսահակյան",
                                age : "28",
                                textAbout : "Ունեմ 5 տարվա աշխատանքային փորձ,վերապատրաստվել եմ Վրաստանում ",
                                socialNetwork : "instagram -https://www.instagram.com/245454 ",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            },
                            {
                                id : '0-3-1',
                                salonTitle : 'Սյուզի գեղեցկության սրահ',
                                salonAddress : "Տիգրան Մեծ 74",
                                img : user6,
                                name : "Աննա",
                                surname : "Հարությունյան",
                                age : "32",
                                textAbout : "Ունեմ 8 տարվա աշխատանքային փորձ,վերապատրաստվել եմ Իտալիայում",
                                socialNetwork : "instagram -https://www.instagram.com/245454 ",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            }
                        ]
                    }

                ]
            },
            {
                id : '1',
            	name : 'Լիլիթ գեղեցկության սրահ',
                img : salon2,
                address : "Գր․ Լուսավորիչ 42",
                phone : "+374 43 50 10 24",
                info : `Մեր գեղեցկության սրահը գործում է Վանաձորում դեռևս 2007թ-ից ։
                	Մեր հավատարիմ և մշտական գործնկերներն են  մի շարք աշխարահրջակ ընկերություններ,
                	որոնցից են Bell Cosmetics,Gity Cosmetics, Gity Cosmetics և այլ ընկերություններ`,
                category : [
                    {
                        prof : "Վարսահարդարներ",
                        id : '1-0',
                        workers : [
                            {
                                id : '1-0-0',
                                salonTitle : 'Լիլիթ գեղեցկության սրահ',
                                salonAddress : "Գր․ Լուսավորիչ 42",
                                img : user7,
                                name : "Հակոբ",
                                surname : "Աբաղյան",
                                age : "34",
                                textAbout : "Ունեմ 10 տարվա աշխատանքային փորձ",
                                socialNetwork : "instagram -https://www.instagram.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            },
                            {
                                id : '1-0-1',
                                salonTitle : 'Լիլիթ գեղեցկության սրահ',
                                salonAddress : "Գր․ Լուսավորիչ 42",
                            	img : user8,
                                name : "Հրաչիկ",
                                surname : "Հովսեփյան",
                                age : "29",
                                textAbout : "Ունեմ 5 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Երևանում ",
                                socialNetwork : "facebook - https://www.facebook.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],
                            },
                            {
                                id : '1-0-2',
                                salonTitle : 'Լիլիթ գեղեցկության սրահ',
                                salonAddress : "Գր․ Լուսավորիչ 42",
                            	img : user1,
                                name : "Հասմիկ ",
                                surname : "Չիլինգարյան",
                                age : "24",
                                textAbout : "Ունեմ 2 տարվա աշխատանքային փորձ",
                                socialNetwork : "facebook - https://www.facebook.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],
                            }
                        ]

                    },
                    {
                    	prof : "Դիմահարդարներ",
                        id : '1-1',
                        workers : [
                            {
                                id : '1-1-0',
                                salonTitle : 'Լիլիթ գեղեցկության սրահ',
                                salonAddress : "Գր․ Լուսավորիչ 42",
                                img : user9,
                                name : "Սիրակ",
                                surname : "Կարապետյան",
                                age : "34",
                                textAbout : "Ունեմ 8 տարվա աշխատանքային փորձ",
                                socialNetwork : "instagram -https://www.instagram.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            }
                        ]
                    },
                    {
                    	prof : "Մատնահարդարներ",
                        id : '1-2',
                        workers : [
                            {
                                id : '1-2-0',
                                salonTitle : 'Լիլիթ գեղեցկության սրահ',
                                salonAddress : "Գր․ Լուսավորիչ 42",
                                img : user4,
                                name : "Անի",
                                surname : "Մամուլյան",
                                age : "25",
                                textAbout : "վերապատրաստվել եմ Մոսկվայում ",
                                socialNetwork : "nstagram -https://www.instagram.com",
                                workImgs : [
                                    'work3',
                                    'work2',
                                    'work1',
                                ],                   
                            }
                        ]
                    },
                    {
                        prof : "Կոսմետոլոգներ",
                        id : '1-3',
                        workers : [
                            {
                                id : '1-3-0',
                                salonTitle : 'Լիլիթ գեղեցկության սրահ',
                                salonAddress : "Գր․ Լուսավորիչ 42",
                                img : user4,
                                name : "Անաստասիա",
                                surname : "Մամուլյան",
                                age : "29",
                                textAbout : "ՈՒնեմ 4 տարվա աշխատանքային փորձ",
                                socialNetwork : "nstagram -https://www.instagram.com",
                                workImgs : [
                                    'work3',
                                    'work2',
                                    'work1',
                                ],                   
                            }
                        ]
                    }

                ]
            },
            {
                id : '2',
            	name : 'Փարվանա գեղեցկության սրահ',
                img : salon3,
                address : "Նժդեհի 25",
                phone : "0322 4 35 25",
                info : `Մեր գեղեցկության սրահը գործում է Վանաձորում դեռևս 2000թ-ից ։
                	Մեր հավատարիմ և մշտական գործնկերներն են  մի շարք աշխարահրջակ ընկերություններ,
                	որոնցից են Bell Cosmetics,Gity Cosmetics, Gity Cosmetics և այլ ընկերություններ `,
                category : [
                    {
                        prof : "Վարսահարդարներ",
                        id : '2-0',
                        workers : [
                            {
                                id : '2-0-0',
                                salonTitle : 'Փարվանա գեղեցկության սրահ',
                                salonAddress : "Նժդեհի 25",
                                img : user1,
                                name : "Աննա",
                                surname : "Կարապետյան",
                                age : "34",
                                textAbout : "Ունեմ 10 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Ալժիրում ",
                                socialNetwork : "facebook - https://www.facebook.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            }
                        ]

                    },
                    {
                    	prof : "Դիմահարդարներ",
                        id : '2-1',
                        workers : [
                            {
                                id : '2-1-0',
                                salonTitle : 'Փարվանա գեղեցկության սրահ',
                                salonAddress : "Նժդեհի 25",
                                img : user2,
                                name : "Նունե",
                                surname : "Խաչատրյան",
                                age : "34",
                                textAbout : "Ունեմ 10 տարվա աշխատանքային փորձ",
                                socialNetwork : "nstagram -https://www.instagram.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            },
                            {
                                id : '2-1-1',
                                salonTitle : 'Փարվանա գեղեցկության սրահ',
                                salonAddress : "Նժդեհի 25",
                            	img : user3,
                                name : "Վարդուհի",
                                surname : "Ղազարյան",
                                age : "24",
                                textAbout : "Ունեմ 3 տարվա աշխատանքային փորձ, վերապատրաստվել եմ ԱՄՆ-ում ",
                                socialNetwork : "facebook - https://www.facebook.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],
                            }
                        ]
                    },
                    {
                    	prof : "Մատնահարդարներ",
                        id : '2-2',
                        workers : [
                            {
                                id : '2-2-0',
                                salonTitle : 'Փարվանա գեղեցկության սրահ',
                                salonAddress : "Նժդեհի 25",
                                img : user4,
                                name : "Գոհար",
                                surname : "Բաբելյան",
                                age : "25",
                                textAbout : "Ունեմ 4 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Մոսկվայում ",
                                socialNetwork : "instagram -https://www.instagram.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            },
                            {
                                id : '2-2-1',
                                salonTitle : 'Փարվանա գեղեցկության սրահ',
                                salonAddress : "Նժդեհի 25",
                            	img : user5,
                                name : "Մարիամ",
                                surname : "Պապյան",
                                age : "32",
                                textAbout : "Ունեմ 9 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Մոսկվայում ",
                                socialNetwork : "instagram -https://www.instagram.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],
                            }
                        ]
                    },
                    {
                        prof : "Կոսմետոլոգներ",
                        id : '2-3',
                        workers : [
                            {
                                id : '2-3-0',
                                salonTitle : 'Փարվանա գեղեցկության սրահ',
                                salonAddress : "Նժդեհի 25",
                                img : user4,
                                name : "Արմինե",
                                surname : "Բաբայան",
                                age : "27",
                                textAbout : "Ունեմ 4 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Հունաստանում ",
                                socialNetwork : "instagram -https://www.instagram.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            },
                            {
                                id : '2-3-1',
                                salonTitle : 'Փարվանա գեղեցկության սրահ',
                                salonAddress : "Նժդեհի 25",
                                img : user5,
                                name : "Արմինե",
                                surname : "Հովսեփյան",
                                age : "35",
                                textAbout : "Ունեմ 11 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Մեծ Բրիտանիայում ",
                                socialNetwork : "instagram -https://www.instagram.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],
                            },
                            {
                                id : '2-3-2',
                                salonTitle : 'Փարվանա գեղեցկության սրահ',
                                salonAddress : "Նժդեհի 25",
                                img : user5,
                                name : "Կարինե",
                                surname : "Մուրադյան",
                                age : "29",
                                textAbout : "Ունեմ 6 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Իսպանիայում ",
                                socialNetwork : "instagram -https://www.instagram.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],
                            }
                        ]
                    }


                ]
            },
            {
                id : '3',
                name : 'Կոկետ գեղեցկության սրահ',
                img : salon4,
                address : "Մյասնիկյան 64",
                phone : "0322 5 05 81",
                info : `Մեր գեղեցկության սրահը գործում է Վանաձորում դեռևս 2007թ-ից ։
                	Մեր հավատարիմ և մշտական գործնկերներն են  մի շարք աշխարահրջակ ընկերություններ,
                	որոնցից են Bell Cosmetics,Gity Cosmetics, Gity Cosmetics և այլ ընկերություններ`,
                category : [
                    {
                        prof : "Վարսահարդարներ",
                        id : '3-0',
                        workers : [
                            {
                                id : '3-0-0',
                                salonTitle : 'Կոկետ գեղեցկության սրահ',
                                salonAddress : "Մյասնիկյան 64",
                            	img : user10,
                                name : "Կարապետ",
                                surname : "Հովակիմյան",
                                age : "24",
                                textAbout : "Ունեմ 1 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Հնդկաստանում ",
                                socialNetwork : "instagram -https://www.instagram.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],
                            }
                        ]

                    },
                    {
                    	prof : "Դիմահարդարներ",
                        id : '3-1',
                        workers : [
                            {
                                id : '3-1-0',
                                salonTitle : 'Կոկետ գեղեցկության սրահ',
                                salonAddress : "Մյասնիկյան 64",
                                img : user6,
                                name : "Լուսինե",
                                surname : "Խաչատրյան",
                                age : "44",
                                textAbout : "Ունեմ 15 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Գերմանիայում ",
                                socialNetwork : "facebook - https://www.facebook.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            },
                            {
                                id : '3-1-1',
                                salonTitle : 'Կոկետ գեղեցկության սրահ',
                                salonAddress : "Մյասնիկյան 64",
                            	img : user5,
                                name : "Էմա",
                                surname : "Ադամյան",
                                age : "32",
                                textAbout : "վերապատրաստվել եմ Անգորայում ",
                                socialNetwork : "facebook - https://www.facebook.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],
                            },
                            {
                                id : '3-1-2',
                                salonTitle : 'Կոկետ գեղեցկության սրահ',
                                salonAddress : "Մյասնիկյան 64",
                                img : user4,
                                name : "Մերի",
                                surname : "Խառատյան",
                                age : "39",
                                textAbout : "Ունեմ 15 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Ավստրիայում ",
                                socialNetwork : "instagram -https://www.instagram.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            }
                        ]
                    },
                    {
                    	prof : "Մատնահարդարներ",
                        id : '3-2',
                        workers : [
                            {
                                id : '3-2-0',
                                salonTitle : 'Կոկետ գեղեցկության սրահ',
                                salonAddress : "Մյասնիկյան 64",
                                img : user3,
                                name : "Աշխեն",
                                surname : "Խաչիկյան",
                                age : "30",
                                textAbout : "Ունեմ 5 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Բրազիլիայում ",
                                socialNetwork : "facebook - https://www.facebook.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            }
                        ]
                    },
                    {
                        prof : "Կոսմետոլոգներ",
                        id : '3-3',
                        workers : [
                            {
                                id : '3-3-0',
                                salonTitle : 'Կոկետ գեղեցկության սրահ',
                                salonAddress : "Մյասնիկյան 64",
                                img : user5,
                                name : "Կարինե",
                                surname : "Հարությունյան",
                                age : "25",
                                textAbout : "Ունեմ 3 տարվա աշխատանքային փորձ",
                                socialNetwork : "facebook - https://www.facebook.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            }
                        ]
                    }
                ]
            },
            {
                id : '4',
            	name : 'Անժելիկա գեղեցկության սրահ',
                img : salon5,
                address : "Մյասնիկյան 26/4",
                phone : "0322 4 74 55",
                info : `Մեր գեղեցկության սրահը գործում է Վանաձորում դեռևս 2007թ-ից ։
                	Մեր հավատարիմ և մշտական գործնկերներն են  մի շարք աշխարահրջակ ընկերություններ,
                	որոնցից են Bell Cosmetics,Gity Cosmetics, Gity Cosmetics և այլ ընկերություններ`,
                category : [
                    {
                        prof : "Վարսահարդարներ",
                        id : '4-0',
                        workers : [
                            {
                                id : '4-0-0',
                                salonTitle : 'Անժելիկա գեղեցկության սրահ',
                                salonAddress : "Մյասնիկյան 26/4",
                                img : user12,
                                name : "Տիգրան",
                                surname : "Քոչինյան",
                                age : "23",
                                textAbout : "Վերապատրաստվել եմ Գվինեայում",
                                socialNetwork : "facebook - https://www.facebook.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            },
                            {
                                id : '4-0-1',
                                salonTitle : 'Անժելիկա գեղեցկության սրահ',
                                salonAddress : "Մյասնիկյան 26/4",
                            	img : user11,
                                name : "Գարիկ ",
                                surname : "Իսկանդարյան",
                                age : "31",
                                textAbout : "Ունեմ 8 տարվա աշխատանքային փորձ",
                                socialNetwork : "facebook - https://www.facebook.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],
                            }
                        ]

                    },
                    {
                    	prof : "Դիմահարդարներ",
                        id : '4-1',
                        workers : [
                            {
                                id : '4-1-0',
                                salonTitle : 'Անժելիկա գեղեցկության սրահ',
                                salonAddress : "Մյասնիկյան 26/4",
                                img : user3,
                                name : "Անահիտ",
                                surname : "Կառյան",
                                age : "23",
                                textAbout : "Ունեմ 1 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Աֆրիկայում ",
                                socialNetwork : "facebook - https://www.facebook.com/Lilit.Karapetyan5616156",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            }
                        ]
                    },
                    {
                    	prof : "Մատնահարդարներ",
                        id : '4-2',
                        workers : [
                            {
                                id : '4-2-0',
                                salonTitle : 'Անժելիկա գեղեցկության սրահ',
                                salonAddress : "Մյասնիկյան 26/4",
                                img : user4,
                                name : "Ինեսա",
                                surname : "Մկրտչյան",
                                age : "29",
                                textAbout : "Ունեմ 8 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Բելգիա",
                                socialNetwork : "facebook - https://www.facebook.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            },
                            {
                                id : '4-2-1',
                                salonTitle : 'Անժելիկա գեղեցկության սրահ',
                                salonAddress : "Մյասնիկյան 26/4",
                            	img : user8,
                                name : "Էրիկ ",
                                surname : "Պապյան",
                                age : "32",
                                textAbout : "Ունեմ 8 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Թալիանդում ",
                                socialNetwork : "instagram -https://www.instagram.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],
                            }
                        ]
                    }
                ]
            },
            {
                id : '5',
            	name : 'Անի գեղեցկության սրահ',
                img : salon6,
                address : "Վարդանանց 14",
                phone : "0322 2 56 83",
                info : ` Մեր գեղեցկության սրահը գործում է Վանաձորում դեռևս 2007թ-ից ։
                	Մեր հավատարիմ և մշտական գործնկերներն են  մի շարք աշխարահրջակ ընկերություններ,
                	որոնցից են Bell Cosmetics,Gity Cosmetics, Gity Cosmetics և այլ ընկերություններ`,
                category : [
                    {
                        prof : "Վարսահարդարներ",
                        id : '5-0',
                        workers : [
                            {
                                id : '5-0-0',
                                salonTitle : 'Անի գեղեցկության սրահ',
                                salonAddress : "Վարդանանց 14",
                                img : user7,
                                name : "Կարեն",
                                surname : "Կարապետյան",
                                age : "34",
                                textAbout : "Ունեմ 10 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Ինդոնեզիայում ",
                                socialNetwork : "instagram -https://www.instagram.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            },
                            {
                                id : '5-0-1',
                                salonTitle : 'Անի գեղեցկության սրահ',
                                salonAddress : "Վարդանանց 14",
                            	img : user8,
                                name : "Գոռ",
                                surname : "Վարդանյան",
                                age : "32",
                                textAbout : "Ունեմ 10 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Իրանում ",
                                socialNetwork : "facebook - https://www.facebook.com՞",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],
                            },
                        ]

                    },
                    {
                    	prof : "Մատնահարդարներ",
                        id : '5-2',
                        workers : [
                            {
                                id : '5-2-0',
                                salonTitle : 'Անի գեղեցկության սրահ',
                                salonAddress : "Վարդանանց 14",
                                img : user2,
                                name : "Ամալյա",
                                surname : "Կիրակոսյան",
                                age : "25",
                                textAbout : "Ունեմ 10 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Մոսկվայում ",
                                socialNetwork : "instagram -https://www.instagram.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            }
                        ]
                    },
                    {
                        prof : "Կոսմետոլոգներ",
                        id : '5-3',
                        workers : [
                            {
                                id : '5-3-0',
                                salonTitle : 'Անի գեղեցկության սրահ',
                                salonAddress : "Վարդանանց 14",
                                img : user3,
                                name : "Նունե",
                                surname : "Հայրապետյան",
                                age : "25",
                                textAbout : "Ունեմ 3 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Երևանում ",
                                socialNetwork : "instagram -https://www.instagram.com",
                                workImgs : [
                                    'work1',
                                    'work2',
                                    'work3'
                                ],                   
                            }
                        ]
                    }
                ]
            },
           
        ];
}

export default Data;
