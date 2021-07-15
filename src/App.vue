<template>
  <v-app id="app">
    <v-main>
      <v-container>
        <h1>Inputs</h1>
        <h2>Text fields</h2>

        <v-row class="mt-6">
          <v-col>
            <v-text-field
              append-icon="mdi-image"
              dense
              height="52px"
              label="Название инпута"
              messages="Текст под инпутом"
              outlined
              suffix="RUB"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              append-icon="mdi-alert-circle"
              dense
              error
              error-messages="Текст ошибки"
              height="52px"
              label="Название инпута"
              outlined
              suffix="RUB"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              append-icon="mdi-close-circle"
              dense
              disabled
              height="52px"
              label="Название инпута"
              messages="Текст под инпутом"
              outlined
              suffix="RUB"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="mt-6">
          <v-col>
            <v-autocomplete
              :items="items"
              dense
              height="52px"
              label="Название списка"
              messages="Текст под инпутом"
              outlined
            ></v-autocomplete>
          </v-col>
          <v-col>
            <v-autocomplete
              :items="itemsWithIcons"
              dense
              height="52px"
              label="Название списка"
              messages="Текст под инпутом"
              outlined
              prepend-inner-icon="mdi-image"
            >
              <template v-slot:item="{ item }">
                <div class="d-flex align-center">
                  <v-icon class="mr-2">{{ item.icon }}</v-icon>
                  <div>{{ item.title }}</div>
                </div>
              </template>
              <template v-slot:selection="{ item }">
                <div class="d-flex align-center">
                  <v-icon class="mr-2">{{ item.icon }}</v-icon>
                  <div class="">{{ item.title }}</div>
                </div>
              </template>
            </v-autocomplete>
          </v-col>
          <v-col>
            <v-autocomplete
              :items="itemsWithIcons"
              dense
              error
              error-messages="Текст ошибки"
              height="52px"
              label="Название списка"
              outlined
              prepend-inner-icon="mdi-image"
            >
              <template v-slot:item="{ item }">
                <div class="d-flex align-center">
                  <v-icon class="mr-2">{{ item.icon }}</v-icon>
                  <div>{{ item.title }}</div>
                </div>
              </template>
              <template v-slot:selection="{ item }">
                <div class="d-flex align-center">
                  <v-icon class="mr-2">{{ item.icon }}</v-icon>
                  <div class="">{{ item.title }}</div>
                </div>
              </template>
            </v-autocomplete>
          </v-col>
          <v-col>
            <v-autocomplete
              :items="itemsWithIcons"
              dense
              disabled
              error
              error-messages="Текст ошибки"
              height="52px"
              label="Название списка"
              outlined
              prepend-inner-icon="mdi-image"
            >
              <template v-slot:item="{ item }">
                <div class="d-flex align-center">
                  <v-icon class="mr-2">{{ item.icon }}</v-icon>
                  <div>{{ item.title }}</div>
                </div>
              </template>
              <template v-slot:selection="{ item }">
                <div class="d-flex align-center">
                  <v-icon class="mr-2">{{ item.icon }}</v-icon>
                  <div class="">{{ item.title }}</div>
                </div>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>

        <v-row class="mt-6">
          <v-col>
            <v-text-field
              dense
              height="52px"
              label="Название инпута"
              messages="Текст под инпутом"
              outlined
            >
              <template v-slot:append>
                <v-select
                  :items="items"
                  background-color="grey lighten-4"
                  color="grey"
                  dense
                  flat
                  solo
                ></v-select>
              </template>
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              dense
              error
              error-messages="Текст ошибки"
              height="52px"
              label="Название инпута"
              outlined
            >
              <template v-slot:append>
                <v-select
                  :items="items"
                  background-color="grey lighten-4"
                  color="grey"
                  dense
                  flat
                  solo
                ></v-select>
              </template>
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              dense
              disabled
              height="52px"
              label="Название инпута"
              messages="Текст под инпутом"
              outlined
            >
              <template v-slot:append>
                <v-select
                  :items="items"
                  background-color="grey lighten-4"
                  color="grey"
                  dense
                  flat
                  solo
                ></v-select>
              </template>
            </v-text-field>
          </v-col>
        </v-row>

        <v-row class="mt-6">
          <v-col>
            <v-text-field
              dense
              height="52px"
              label="Название инпута"
              messages="Текст под инпутом"
              outlined
            >
              <template v-slot:prepend-inner>
                <v-select
                  :items="phoneSuffixWithIcons"
                  :item-text="e => e.title"
                  color="grey"
                  dense
                  flat
                  solo
                  :value="phoneSuffixWithIcons[0]"
                >
                  <template v-slot:item="{ item }">
                    <div class="d-flex align-center">
                      <v-icon class="mr-2">{{ item.icon }}</v-icon>
                      <div>{{ item.title }}</div>
                    </div>
                  </template>
                  <template v-slot:selection="{ item }">
                    <div class="d-flex align-center">
                      <v-icon class="mr-2">{{ item.icon }}</v-icon>
                      <div class="">{{ item.title }}</div>
                    </div>
                  </template>
                </v-select>
              </template>
            </v-text-field>
          </v-col>
        </v-row>

        <h2 class="mt-12">Text area</h2>

        <v-row class="mt-6">
          <v-col>
            <v-textarea
              counter="25"
              label="Оставьте комментарий"
              outlined
            ></v-textarea>
          </v-col>
        </v-row>

        <h2 class="mt-12">Bottom controls</h2>

        <v-row class="mt-6">
          <v-col>
            <v-text-field
              dense
              height="52px"
              hide-details
              label="Название инпута"
              outlined
            ></v-text-field>
            <div style="font-size:0.75rem" class="ml-3">
              Текст под инпутом
            </div>
          </v-col>
          <v-col>
            <v-text-field
              dense
              height="52px"
              hide-details
              label="Название инпута"
              outlined
            ></v-text-field>
            <div style="font-size:0.75rem" class="ml-3">
              Код №121 выслан 
              на <a href="">crypto_robert@gmail.com</a>
            </div>
          </v-col>
        </v-row>

        <h1 class="mt-12">Buttons</h1>
        <h2>Standard</h2>

        <v-row class="mt-6">
          <v-col>
            <v-btn
              class="body-1 font-weight-medium text-none"
              color="primary"
              depressed
              height="52px"
            >Текст кнопки</v-btn>
          </v-col>
          <v-col>
            <v-btn
              class="body-1 font-weight-medium text-none"
              color="primary"
              depressed
              disabled
              height="52px"
            >Текст кнопки</v-btn>
          </v-col>
          <v-col>
            <v-btn
              class="body-1 font-weight-medium text-none"
              color="primary"
              depressed
              height="52px"
            >
              <template v-slot:default>
                <div class="d-flex align-center">
                  <v-icon class="mr-2">mdi-image</v-icon>
                  <div>Текст кнопки</div>
                </div>
              </template>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              class="body-1 font-weight-medium text-none"
              color="grey lighten-2"
              depressed
              height="52px"
              outlined
            >
              <template v-slot:default>
                <div class="d-flex align-center">
                  <v-icon class="mr-2" color="primary">mdi-image</v-icon>
                  <div class="primary--text">Текст кнопки</div>
                </div>
              </template>
            </v-btn>
          </v-col>
          <v-col>
            <div class="d-flex">
              <v-btn
                class="body-1 font-weight-medium text-none"
                color="primary"
                depressed
                height="52px"
              >
                <template v-slot:default>
                  <div class="d-block">
                    <div class="">Перейти в корзину</div>
                    <div class="caption">В корзине 1 шт.</div>
                  </div>
                </template>
              </v-btn>
              <v-btn
                class="body-1 font-weight-medium text-none"
                color="grey lighten-2"
                depressed
                height="52px"
                outlined
              >
                <template v-slot:default>
                  <div class="d-flex align-center">
                    <div class="primary--text">+1 шт.</div>
                  </div>
                </template>
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <h1 class="mt-12">Text Buttons</h1>
        <h2>Text Buttons</h2>

        <v-row class="mt-6">
          <v-col>
            <v-btn
              class="body-1 font-weight-medium text-none"
              color="primary"
              text
              height="52px"
            >
              <template v-slot:default>
                <div class="d-flex align-center">
                  <div class="mr-3" style="border-bottom:1px dashed">Текст копируемой кнопки</div>
                  <v-icon>mdi-image</v-icon>
                </div>
              </template>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              class="body-1 font-weight-medium text-none"
              color="primary"
              text
              height="52px"
            >
              <template v-slot:default>
                <div class="d-flex align-center">
                  <v-icon class="mr-2">mdi-image</v-icon>
                  <div>Текст кнопки</div>
                </div>
              </template>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              class="body-1 font-weight-medium text-none"
              color="primary"
              text
              disabled
              height="52px"
            >
              <template v-slot:default>
                <div class="d-flex align-center">
                  <v-icon class="mr-2">mdi-image</v-icon>
                  <div>Текст кнопки</div>
                </div>
              </template>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              class=""
              color="primary"
              icon
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              class=""
              color="primary"
              icon
              disabled
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <h1 class="mt-12">Dropdown</h1>

        <v-row class="mt-6">
          <v-col>
            ???
          </v-col>
        </v-row>

        <h1 class="mt-12">Mobile progress bar</h1>

        <v-row class="mt-6">
          <v-col>
            <v-progress-circular
              :rotate="-90"
              :size="40"
              :width="2"
              :value="60"
              color="primary"
            >
              <span class="caption text-  -disabled">6/10</span>
            </v-progress-circular>
          </v-col>
          <v-col>
            <v-progress-circular
              :rotate="-90"
              :size="40"
              :width="2"
              :value="100"
              color="primary"
            >
              <v-icon color="primary">mdi-check</v-icon>
            </v-progress-circular>
          </v-col>
          <v-col>
            <v-progress-circular
              :rotate="-90"
              :size="40"
              :width="2"
              :value="100"
              color="error"
            >
              <v-icon color="error">mdi-close</v-icon>
            </v-progress-circular>
          </v-col>
        </v-row>

        <h1 class="mt-12">Dropdown</h1>

        <v-row class="mt-6">
          <v-col>
            <v-stepper>
              <v-stepper-header>
                <v-stepper-step
                  :complete="true"
                  step="1"
                >
                  Название шага
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step
                  :complete="false"
                  step="2"
                >
                  Название шага
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">
                  Название шага
                </v-stepper-step>
              </v-stepper-header>
            </v-stepper>
          </v-col>
        </v-row>

        <h1 class="mt-12">Radio Button</h1>

        <v-row class="mt-6">
          <v-col>
            <v-radio-group
              column
            >
              <v-radio
                color="primary"
                value="primary1"
              >
                <template v-slot:label>
                  Адрес получателя
                  <v-icon color="primary" class="ml-2">mdi-help-circle-outline</v-icon>
                </template>
              </v-radio>
              <v-radio
                label="Адрес получателя"
                color="primary"
                value="primary2"
              ></v-radio>
              <v-radio
                label="Адрес получателя"
                color="primary"
                value="primary3"
              ></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>

        <h1 class="mt-12">Checkbox</h1>

        <v-row class="mt-6">
          <v-col>
            <v-checkbox>
              <template v-slot:label>
                Адрес получателя
                <v-icon color="primary" class="ml-2">mdi-help-circle-outline</v-icon>
              </template>
            </v-checkbox>
          </v-col>
        </v-row>

        <h1 class="mt-12">Switch</h1>

        <v-row class="mt-6">
          <v-col>
            <v-sheet class="pa-5">
              <v-switch
                inset
                label="Switch 1"
              ></v-switch>
              <v-switch
                inset
                label="Switch 2"
              ></v-switch>
            </v-sheet>
          </v-col>
        </v-row>

        <h1 class="mt-12">Tabs</h1>

        <v-row class="mt-6">
          <v-col>
            <v-tabs>
              <v-tab>Обмен</v-tab>
              <v-tab>Статус заявки</v-tab>
              <v-tab>Обмен</v-tab>
            </v-tabs>
          </v-col>
        </v-row>

        <h1 class="mt-12">Segmented controls</h1>

        <v-row class="mt-6">
          <v-col>
            <v-btn-toggle
              color="primary"
              
            >
              <v-btn value="left">
                Left
              </v-btn>

              <v-btn value="center">
                Center
              </v-btn>

              <v-btn value="right">
                Right
              </v-btn>

              <v-btn value="justify">
                Justify
              </v-btn>
            </v-btn-toggle>

            <v-card outlined class="pa-1 mt-6">
              <v-btn
                class="body-1 font-weight-medium text-none"
                color="primary"
                text
                height="52px"
              >
                <template v-slot:default>
                  Текст кнопки
                </template>
              </v-btn>

              <v-btn
                class="body-1 font-weight-medium text-none"
                color="disabled"
                text
                height="52px"
              >
                <template v-slot:default>
                  Текст кнопки
                </template>
              </v-btn>
            </v-card>
          </v-col>
        </v-row>

        <h1 class="mt-12">Tags</h1>

        <v-row class="mt-6">
          <v-col>
            <v-btn
              class="body-1 font-weight-medium text-none"
              color="blue lighten-5"
              height="52px"
              rounded
              depressed
            >
              <template v-slot:default>
                <div class="d-flex align-center">
                  <v-icon color="primary" class="mr-2">mdi-image</v-icon>
                  <div class="primary--text">Текст кнопки</div>
                </div>
              </template>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              class="body-1 font-weight-medium text-none"
              color="grey"
              height="52px"
              rounded
              outlined
            >
              <template v-slot:default>
                <div class="d-flex align-center">
                  <v-icon color="disabled" class="mr-2">mdi-image</v-icon>
                  <div class="disabled--text">Текст кнопки</div>
                </div>
              </template>
            </v-btn>
          </v-col>
        </v-row>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      itemsWithIcons: [
        { title: 'Foo', icon: 'mdi-account-check-outline' },
        { title: 'Bar', icon: 'mdi-toilet' },
      ],
      phoneSuffixWithIcons: [
        { title: '+7', icon: 'mdi-account-check-outline' },
        { title: '+8', icon: 'mdi-toilet' },
      ]
    };
  },

  components: {
  },
};
</script>
