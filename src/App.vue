<template>
  <div id="app" class="container">
    <div class="row">
      <TopMenu :top-menu="topMenu"></TopMenu>
    </div>
    <div class="row">
      <LeftMenu :left-menu="leftMenu"></LeftMenu>
      <ContentBox :content-box="contentBox"></ContentBox>
    </div>
  </div>
</template>

<script>
import TopMenu from "@/components/layout/TopMenu";
import LeftMenu from "@/components/layout/LeftMenu";
import ContentBox from "@/components/layout/ContentBox";
import Vue from "vue";

export default {
  name: 'App',
  data() {
    return {
      bus: new Vue({}),
      topMenu: {
        buttons: [
          {
            name: "Пункт меню 1",
            value: "Пункт меню 1",
            intents: [
              {
                intentAria: "DynamicPage",
                intentType: "edit",
                request: {
                  url: "/index.php"
                }
              }
            ]
          },
          {
            name: "Пункт меню 2",
            value: "Пункт меню 2",
            intents: [
              {
                intentAria: "DynamicPage",
                intentType: "edit",
                request: {
                  url: "/index.php"
                }
              }
            ]
          },
          {
            name: "Пункт меню 3",
            value: "Пункт меню 3",
            intents: [
              {
                intentAria: "DynamicPage",
                intentType: "edit",
                request: {
                  url: "/index.php"
                }
              }
            ]
          },
          {
            name: "Пункт меню 4",
            value: "Пункт меню 4",
            intents: [
              {
                intentAria: "DynamicPage",
                intentType: "edit",
                request: {
                  url: "/index.php"
                }
              }
            ]
          },
          {
            name: "Пункт меню 5",
            value: "Пункт меню 5",
            intents: [
              {
                intentAria: "DynamicPage",
                intentType: "edit",
                request: {
                  url: "/index.php"
                }
              }
            ]
          }
        ]
      },
      leftMenu: {
        buttons: [
          {
            name: "Левое меню 1",
            value: "Левое меню 1",
            intents: [
              {
                intentAria: "DynamicPage",
                intentType: "edit",
                request: {
                  url: "/index.php"
                }
              }
            ]
          },
          {
            name: "Левое меню 2",
            value: "Левое меню 2",
            intents: [
              {
                intentAria: "DynamicPage",
                intentType: "edit",
                request: {
                  url: "/index.php"
                }
              }
            ]
          },
          {
            name: "Левое меню 3",
            value: "Левое меню 3",
            intents: [
              {
                intentAria: "DynamicPage",
                intentType: "edit",
                request: {
                  url: "/index.php"
                }
              }
            ]
          },
          {
            name: "Левое меню 4",
            value: "Левое меню 4",
            intents: [
              {
                intentAria: "DynamicPage",
                intentType: "edit",
                request: {
                  url: "/index.php"
                }
              }
            ]
          },
          {
            name: "Левое меню 5",
            value: "Левое меню 5",
            intents: [
              {
                intentAria: "DynamicPage",
                intentType: "edit",
                request: {
                  url: "/index.php"
                }
              }
            ]
          },
          {
            name: "Левое меню 6",
            value: "Левое меню 6",
            intents: [
              {
                intentAria: "DynamicPage",
                intentType: "edit",
                request: {
                  url: "/index.php"
                }
              }
            ]
          },
          {
            name: "Левое меню 7",
            value: "Левое меню 7",
            intents: [
              {
                intentAria: "DynamicPage",
                intentType: "edit",
                request: {
                  url: "/index.php"
                }
              }
            ]
          },
          {
            name: "Левое меню 8",
            value: "Левое меню 8",
            intents: [
              {
                intentAria: "DynamicPage",
                intentType: "edit",
                request: {
                  url: "/index.php"
                }
              }
            ]
          }
        ]
      },
      contentBox: {
        title: "Тестовый заголовок страницы",
        panelCollection: {
          panels: [
            {
              id: "panel_1",
              panelTitle: "Заголовок первой панели",
              rows: [
                [
                  {
                    name: "name",
                    lbl: "Звонок",
                    type: "varchar",
                    value: "Первый Звонок",
                  },
                  {
                    name: "type",
                    lbl: "Тип звонка",
                    type: "varchar",
                    value: "Входящий звонок",
                  }
                ],
                [
                  {
                    name: "theme",
                    lbl: "Тема Звонка",
                    type: "varchar",
                    value: "Тестовая тема",
                  },
                  {
                    name: "assigned_user_name",
                    lbl: "Ответственный",
                    type: "varchar",
                    value: "Пупкин Василий Васильевич",
                  }
                ],
                [
                  {
                    name: "date_start",
                    lbl: "Дата начала",
                    type: "varchar",
                    value: "24.02.2021",
                  },
                  {
                    name: "duration",
                    lbl: "Продолжительность",
                    type: "varchar",
                    value: "15 минут",
                  }
                ],
              ]
            },
            {
              id: "panel_2",
              panelTitle: "Дублирующая панель для колличества",
              rows: [
                [
                  {
                    name: "name2",
                    lbl: "Звонок",
                    type: "varchar",
                    value: "Первый Звонок",
                  },
                  {
                    name: "type2",
                    lbl: "Тип звонка",
                    type: "varchar",
                    value: "Входящий звонок",
                  }
                ],
                [
                  {
                    name: "theme2",
                    lbl: "Тема Звонка",
                    type: "varchar",
                    value: "Тестовая тема",
                  },
                  {
                    name: "assigned_user_name2",
                    lbl: "Ответственный",
                    type: "varchar",
                    value: "Пупкин Василий Васильевич",
                  }
                ],
                [
                  {
                    name: "date_start2",
                    lbl: "Дата начала",
                    type: "varchar",
                    value: "24.02.2021",
                  },
                  {
                    name: "duration2",
                    lbl: "Продолжительность",
                    type: "varchar",
                    value: "15 минут",
                  }
                ],
              ]
            }
          ]
        },
        bottomBar:{
          buttonsCollection:{
            buttons:[
              {
                name: "Кнопка ButtonBar 1",
                value: "Кнопка ButtonBar 1",
                intents: [
                  {
                    intentAria: "DynamicPage",
                    intentType: "edit",
                    request: {
                      url: "/index.php"
                    }
                  }
                ]
              },
              {
                name: "Кнопка ButtonBar 2",
                value: "Кнопка ButtonBar 2",
                intents: [
                  {
                    intentAria: "DynamicPage",
                    intentType: "edit",
                    request: {
                      url: "/index.php"
                    }
                  }
                ]
              },
              {
                name: "Кнопка ButtonBar 3",
                value: "Кнопка ButtonBar 3",
                intents: [
                  {
                    intentAria: "DynamicPage",
                    intentType: "edit",
                    request: {
                      url: "/index.php"
                    }
                  }
                ]
              },
              {
                name: "Кнопка ButtonBar 4",
                value: "Кнопка ButtonBar 4",
                intents: [
                  {
                    intentAria: "DynamicPage",
                    intentType: "edit",
                    request: {
                      url: "/index.php"
                    }
                  }
                ]
              },
              {
                name: "Кнопка ButtonBar 5",
                value: "Кнопка ButtonBar 5",
                intents: [
                  {
                    intentAria: "DynamicPage",
                    intentType: "edit",
                    request: {
                      url: "/index.php"
                    }
                  }
                ]
              },
              {
                name: "Кнопка ButtonBar 6",
                value: "Кнопка ButtonBar 6",
                intents: [
                  {
                    intentAria: "DynamicPage",
                    intentType: "edit",
                    request: {
                      url: "/index.php"
                    }
                  }
                ]
              },
              {
                name: "Кнопка ButtonBar 7",
                value: "Кнопка ButtonBar 7",
                intents: [
                  {
                    intentAria: "DynamicPage",
                    intentType: "edit",
                    request: {
                      url: "/index.php"
                    }
                  }
                ]
              },
              {
                name: "Кнопка ButtonBar 8",
                value: "Кнопка ButtonBar 8",
                intents: [
                  {
                    intentAria: "DynamicPage",
                    intentType: "edit",
                    request: {
                      url: "/index.php"
                    }
                  }
                ]
              },
            ]
          },
          tabContent:{
            Text:" Повседневная практика показывает, что повышение уровня гражданского сознания влечет за собой\n" +
                "    процесс внедрения и модернизации системы обучения кадров, соответствующей насущным\n" +
                "    потребностям. Соображения высшего порядка, а также социально-экономическое развитие\n" +
                "    представляет собой интересный эксперимент проверки дальнейших направлений развития проекта.\n" +
                "    Практический опыт показывает, что начало повседневной работы по формированию позиции требует\n" +
                "    определения и уточнения позиций, занимаемых участниками в отношении поставленных задач.\n" +
                "\n" +
                "    Практический опыт показывает, что курс на социально-ориентированный национальный проект\n" +
                "    требует от нас анализа дальнейших направлений развития проекта? Повседневная практика\n" +
                "    показывает, что дальнейшее развитие различных форм деятельности играет важную роль в\n" +
                "    формировании существующих финансовых и административных условий. Не следует, однако,\n" +
                "    забывать о том, что сложившаяся структура организации способствует повышению актуальности\n" +
                "    всесторонне сбалансированных нововведений! Разнообразный и богатый опыт курс на\n" +
                "    социально-ориентированный национальный проект создаёт предпосылки качественно новых шагов\n" +
                "    для форм воздействия.\n" +
                "\n" +
                "    Равным образом рамки и место обучения кадров обеспечивает актуальность соответствующих\n" +
                "    условий активизации. Значимость этих проблем настолько очевидна, что социально-экономическое\n" +
                "    развитие играет важную роль в формировании системы обучения кадров, соответствующей насущным\n" +
                "    потребностям! С другой стороны курс на социально-ориентированный национальный проект играет\n" +
                "    важную роль в формировании системы обучения кадров, соответствующей насущным потребностям!\n" +
                "    Соображения высшего порядка, а также курс на социально-ориентированный национальный проект\n" +
                "    требует от нас системного анализа дальнейших направлений развитая системы массового участия.\n" +
                "\n" +
                "    Не следует,...",
          }
        }
      }
    }
  },
  components: {
    ContentBox,
    LeftMenu,
    TopMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style>
.top-menu {
  background: #eee;
}

.left-menu {
  background: #ddd;
}

.content {
  background: #ccc;
}

.title {
  background: #bbb;
}

.right {
  float: right;
}

.panel, .right-panel, .button-collection {
  background: #aaa;
  padding: 10px;
  margin-bottom: 10px;
  border: 3px solid #333;
}
</style>
