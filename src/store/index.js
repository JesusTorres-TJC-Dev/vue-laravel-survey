import {createStore} from 'vuex'
import axiosClient from '../axios';

// const tmpSurveys = [
//     {
//         id: 100,
//         title: "Thecodeholic YouTube channel content",
//         slug: "thecodeholic-youtube-channel-content",
//         status: "draft",
//         image: "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
//         description: "My name is Jesus. <br>I am Web developer with 4+ years of experience</br>",
//         created_at: "2021-12-20 18:00:00",
//         updated_at: "2021-12-20 18:00:00",
//         expire_date: "2021-12-31 18:00:00",
//         questions: [
//             {
//                 id: 1,
//                 type: "select",
//                 question: "From which country are you",
//                 description: null,
//                 data: {
//                     options: [
//                         {
//                             uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea",
//                             text: "USA"
//                         },
//                         {
//                             uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
//                             text: "Georgia"
//                         },
//                         {
//                             uuid: "b5c09733-a49e-460a-ba8a-526863010729",
//                             text: "Germany"
//                         },
//                         {
//                             uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513",
//                             text: "India"
//                         },
//                         {
//                             uuid: "8d14341b-ec2b-4924-9aea-bda6a53b51fc",
//                             text: "United Kingdom"
//                         }
//                     ]
//                 }
//             },
//             {
//                 id: 2,
//                 type: "checkbox",
//                 question: "Which language videos do you want to see on my channel?",
//                 description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
//                 data: {
//                     options: [
//                         {
//                             uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea",
//                             text: "JavaScript"
//                         },
//                         {
//                             uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
//                             text: "PHP"
//                         },
//                         {
//                             uuid: "b5c09733-a49e-460a-ba8a-526863010729",
//                             text: "HTML + CSS"
//                         }
//                     ]
//                 }
//             },
//             {
//                 id: 3,
//                 type: "checkbox",
//                 question: "Which language videos do you want to see on my channel?",
//                 description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
//                 data: {
//                     options: [
//                         {
//                             uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea",
//                             text: "JavaScript"
//                         },
//                         {
//                             uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
//                             text: "PHP"
//                         },
//                         {
//                             uuid: "b5c09733-a49e-460a-ba8a-526863010729",
//                             text: "HTML + CSS"
//                         }
//                     ]
//                 }
//             },
//             {
//                 id: 4,
//                 type: "radio",
//                 question: "Which language videos do you want to see on my channel?",
//                 description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
//                 data: {
//                     options: [
//                         {
//                             uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea",
//                             text: "JavaScript"
//                         },
//                         {
//                             uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
//                             text: "PHP"
//                         },
//                         {
//                             uuid: "b5c09733-a49e-460a-ba8a-526863010729",
//                             text: "HTML + CSS"
//                         }
//                     ]
//                 }
//             },
//             {
//                 id: 5,
//                 type: "checkbox",
//                 question: "Which language videos do you want to see on my channel?",
//                 description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
//                 data: {
//                     options: [
//                         {
//                             uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea",
//                             text: "JavaScript"
//                         },
//                         {
//                             uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
//                             text: "PHP"
//                         },
//                         {
//                             uuid: "b5c09733-a49e-460a-ba8a-526863010729",
//                             text: "HTML + CSS"
//                         }
//                     ]
//                 }
//             },
//             {
//                 id: 6,
//                 type: "text",
//                 question: "What's yout favourite YouTube channel?",
//                 description: null,
//                 data: {}
//             },
//             {
//                 id: 7,
//                 type: "textarea",
//                 question: "What do you think about TheCodeholic channel?",
//                 description: "Write your honest opinion. Everything is anonymous.",
//                 data: {}
//             }
//         ],
//     },
//     {
//         id: 200,
//         title: "Laravel 9",
//         slug: "laravel-9",
//         status: "active",
//         image: "https://es.wikipedia.org/wiki/Laravel#/media/Archivo:Laravel.svg",
//         description: "Laravel es un framework de código abierto para desarrollar aplicaciones y servicios web con PHP 5, PHP 7 y PHP 8. Su filosofía es desarrollar código PHP de forma elegante y simple, evitando el 'código espagueti'. Fue creado en 2011 y tiene una gran influencia de frameworks como Ruby on Rails, Sinatra y ASP.NET MVC.",
//         created_at: "2021-12-20 18:00:00",
//         updated_at: "2021-12-20 18:00:00",
//         expire_date: "2021-12-31 18:00:00",
//         questions: [
            
//         ],
//     },
//     {
//         id: 300,
//         title: "Vue 3",
//         slug: "Vue-3",
//         status: "active",
//         image: "https://en.wikipedia.org/wiki/Vue.js#/media/File:Vue.js_Logo_2.svg",
//         description: "is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.",
//         created_at: "2021-12-20 18:00:00",
//         updated_at: "2021-12-20 18:00:00",
//         expire_date: "2021-12-31 18:00:00",
//         questions: [
            
//         ],
//     },
//     {
//         id: 400,
//         title: "Tailwind 3",
//         slug: "tailwind-3",
//         status: "active",
//         image: "https://es.wikipedia.org/wiki/Tailwind_CSS#/media/Archivo:Tailwind_CSS_logo.svg",
//         description: "es un framework de CSS de código abierto para el diseño de páginas web. La principal característica de esta biblioteca es que, a diferencia de otras como Bootstrap, no genera una serie de clases predefinidas para elementos como botones o tablas.",
//         created_at: "2021-12-20 18:00:00",
//         updated_at: "2021-12-20 18:00:00",
//         expire_date: "2021-12-31 18:00:00",
//         questions: [
            
//         ],
//     },
// ]

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN')
        },
        dashboard: {
            loading: false,
            data: {}
        },
        // surveys: [...tmpSurveys],
        surveys: {
            loading: false,
            links: [],
            data: []
        },
        currentSurvey: {
            loading: false,
            data: {}
        },
        questionTypes: ["text", "select", "radio", "checkbox", "textarea"],
        notification: {
            show: false,
            type: null,
            message: null
        }
    },
    getters: {},
    actions: {
        getDashboardData({commit}){
            commit('dashboardLoading', true)
            return axiosClient.get(`/dashboard`)
                                .then((res) => {
                                    commit('dashboardLoading', false)
                                    commit('setDashboardData', res.data)
                                    return res;
                                })
                                .catch((err) => {
                                    commit('dashboardLoading', false)
                                    return err;
                                })
        },
        getSurvey({commit}, id) {
            commit("setCurrentSurveyLoading", true);
            return axiosClient.get(`/survey/${id}`)
                                .then((res) => {
                                    commit("setCurrentSurvey", res.data)
                                    commit("setCurrentSurveyLoading", false);
                                    return res;
                                })
                                .catch((err) => {
                                    commit("setCurrentSurveyLoading", false)
                                    return err;
                                });
        },
        saveSurvey({commit}, survey){
            delete survey.image_url;
            let response;
            if(survey.id) {
                response = axiosClient.put(`/survey/${survey.id}`, survey)
                                        .then((res) => {
                                            commit("setCurrentSurvey", res.data)
                                            return res;
                                        })
            }else{
                response = axiosClient.post("/survey", survey)
                                        .then((res) => {
                                            commit("setCurrentSurvey", res.data)
                                            return res;
                                        })
            }

            return response;
        },
        deleteSurvey({}, survey){
            return axiosClient.delete(`/survey/${survey}`);
        },
        getSurveys({commit}, {url = null} = {}){
            url = url || '/survey'
            
            commit('setSurveysLoading', true)
            return axiosClient.get(url)
                                .then((res) => {
                                    commit('setSurveysLoading', false)
                                    commit("setSurveys", res.data)
                                    return res
                                })
        },
        getSurveyBySlug({commit}, slug){
            commit("setCurrentSurveyLoading", true)
            return axiosClient.get(`/survey-by-slug/${slug}`)
                                .then((res) => {
                                    commit("setCurrentSurvey", res.data)
                                    commit("setCurrentSurveyLoading", false)
                                    return res
                                })
                                .catch((err) => {
                                    commit("setCurrentSurveyLoading", false)
                                    throw err;
                                })
        },
        saveSurveyAnswer({commit}, {surveyId, answers}) {
            console.log(answers)
            return axiosClient.post(`/survey/${surveyId}/answer`, {answers})
                                .then((res) => {
                                    console.log(res)
                                    return res
                                })
                                .catch((err) => {
                                    console.error(err)
                                    return err
                                })
        },
        register({commit}, user){
            return axiosClient.post('/register', user)
                .then(({data}) => {
                    commit("setUser", data)
                    return data
                })
                .catch((err) => {
                    //console.log(err)
                    return err
                })
        },
        login({commit}, user){
            return axiosClient.post('/login', user)
                .then(({data}) => {
                    commit("setUser", data)
                    return data
                })
                .catch((err) => {
                    return err
                })
        },
        logout({commit}){
            return axiosClient.post('/logout')
                .then((resp) => {
                    commit("logout")
                    return resp
                })
                .catch((err) => {
                    return err
                })
        }
    },
    mutations: {
        dashboardLoading: (state, loading) => {
            state.dashboard.loading = loading
        },
        setDashboardData: (state, data) => {
            state.dashboard.data = data
        },
        setSurveysLoading: (state, loading) => {
            state.surveys.loading = loading
        },
        setSurveys: (state, surveys) => {
            state.surveys.links = surveys.meta.links
            state.surveys.data = surveys.data
        },
        setCurrentSurveyLoading: (state, loading) => {
            state.currentSurvey.loading = loading
        },
        setCurrentSurvey: (state, survey) => {
            state.currentSurvey.data = survey.data
        },
        logout: (state) => {
            state.user.data = {},
            state.user.token = null
            sessionStorage.removeItem('TOKEN')
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token)
        },
        notify: (state, {message, type}) => {
            state.notification.show = true
            state.notification.type = type
            state.notification.message = message

            setTimeout(() => {
                state.notification.show = false
            }, 3000)
        }
    },
    modules: {}
})

export default store;