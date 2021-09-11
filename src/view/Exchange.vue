<template>
  <div class="bg-black-light root">
    <!-- start header -->
    <div class="border-b border-solid border-white-light">
      <div
        class="container flex justify-between items-center py-6"
      >
        <div class="flex items-center">
          <div class="text-white text-20 font-SFBold mr-10 md:mr-20">
            Logo
          </div>
          <div class="flex items-center mr-6">
            <div class="relative">
              <button class="show-price-popover text-white text-14 font-SFBold mb-0 mr-3" @click="showPricePopover">
                BTC/USD
              </button>
              <!-- start popover -->
              <div v-show="state.showPopover" class="price-popover absolute top-10 rounded-lg">
                <div class="symbol-search w-full py-3 px-4">
                  <div class="relative w-full">
                    <i class="fa fa-search absolute top-1/2 left-2" aria-hidden="true"></i>
                    <input type="text" class="w-full bg-transparent rounded pl-7 pr-2" placeholder="Search"/>
                  </div>
                </div>
                <!-- start tab content -->
                <div class="price-tabs-content">
                  <div class="tabs flex">
                    <div class="tab-title" v-for="(priceTab, key) in priceTabs" :key="key" :class="state.selectedPriceTab == key? 'active' : ''">
                      <div class="price-tab flex">
                        <div class="tab" @click="priceTabClick(key)">
                          {{ priceTab }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-panels">
                      <div v-show="state.selectedPriceTab == 0" class="h-full flex items-center justify-center">
                        <p class="text-center text-gray-300">No Record</p>
                      </div>
                      <div v-show="state.selectedPriceTab == 1" class="h-full mr-1 overflow-y-auto">
                        <table width="100%">
                          <thead>
                            <tr>
                              <th
                                class="text-sm text-gray-400 text-left p-3 w-1/4"
                              >
                                Contracts
                              </th>
                              <th
                                class="text-sm text-gray-400 text-right p-3 w-1/4"
                              >
                                Price
                              </th>
                              <th
                                class="text-sm text-gray-400 text-right p-3 w-1/4"
                              >
                                24H Change %
                              </th>
                              <th
                                class="text-sm text-gray-400 text-right p-3 w-1/4"
                              >
                                24H Volume
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="(item, key) in state.btcusdtPrice.inversePerpetual"
                              :key="key"
                            >
                              <td
                                class="flex items-center text-gray-300 text-sm p-3 w-1/4"
                              >
                                <img 
                                  :src="item.contracts.icon" 
                                  alt=""
                                  className="w-5 h-5 mr-2"
                                />
                                {{ item.contracts.text }}
                              </td>
                              <td
                                class="text-sm text-gray-300 text-right p-3 w-1/4"
                              >
                                {{ item.price }}
                              </td>
                              <td
                                class="text-sm text-green-500 text-right p-3 w-1/4"
                              >
                                {{ item.change }}
                              </td>
                              <td
                                class="text-sm text-gray-300 text-right p-3 w-1/4"
                              >
                                {{ item.volume }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div v-show="state.selectedPriceTab == 2" class="h-full overflow-y-auto">
                        <table width="100%">
                          <thead>
                            <tr>
                              <th
                                class="text-sm text-gray-400 text-left p-3 w-1/4"
                              >
                                Contracts
                              </th>
                              <th
                                class="text-sm text-gray-400 text-right p-3 w-1/4"
                              >
                                Price
                              </th>
                              <th
                                class="text-sm text-gray-400 text-right p-3 w-1/4"
                              >
                                24H Change %
                              </th>
                              <th
                                class="text-sm text-gray-400 text-right p-3 w-1/4"
                              >
                                24H Volume
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="(item, key) in state.btcusdtPrice.usdtPerpetual"
                              :key="key"
                            >
                              <td
                                class="flex items-center text-gray-300 text-sm p-3 w-1/4"
                              >
                                <img 
                                  :src="item.contracts.icon" 
                                  alt=""
                                  className="w-5 h-5 mr-2"
                                />
                                {{ item.contracts.text }}
                              </td>
                              <td
                                class="text-sm text-gray-300 text-right p-3 w-1/4"
                              >
                                {{ item.price }}
                              </td>
                              <td
                                class="text-sm text-green-500 text-right p-3 w-1/4"
                              >
                                {{ item.change }}
                              </td>
                              <td
                                class="text-sm text-gray-300 text-right p-3 w-1/4"
                              >
                                {{ item.volume }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div v-show="state.selectedPriceTab == 3" class="h-full mr-1 overflow-y-auto">
                        <table width="100%">
                          <thead>
                            <tr>
                              <th
                                class="text-sm text-gray-400 text-left p-3 w-1/4"
                              >
                                Contracts
                              </th>
                              <th
                                class="text-sm text-gray-400 text-right p-3 w-1/4"
                              >
                                Price
                              </th>
                              <th
                                class="text-sm text-gray-400 text-right p-3 w-1/4"
                              >
                                24H Change %
                              </th>
                              <th
                                class="text-sm text-gray-400 text-right p-3 w-1/4"
                              >
                                24H Volume
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="(item, key) in state.btcusdtPrice.inverseFutures"
                              :key="key"
                            >
                              <td
                                class="flex items-center text-gray-300 text-sm p-3 w-1/4"
                              >
                                <img 
                                  :src="item.contracts.icon" 
                                  alt=""
                                  className="w-5 h-5 mr-2"
                                />
                                {{ item.contracts.text }}
                              </td>
                              <td
                                class="text-sm text-gray-300 text-right p-3 w-1/4"
                              >
                                {{ item.price }}
                              </td>
                              <td
                                class="text-sm text-green-500 text-right p-3 w-1/4"
                              >
                                {{ item.change }}
                              </td>
                              <td
                                class="text-sm text-gray-300 text-right p-3 w-1/4"
                              >
                                {{ item.volume }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                </div>
                <!-- end tab content -->
              </div>
              <!-- end popover -->
            </div>
            <div
              class="border-solid border-green-darken border rounded w-5 h-4 text-center"
            >
              <p class="text-green-darken text-10 mb-0">
                5x
              </p>
            </div>
          </div>
          <div class="flex hidden lg:flex">
            <div class="xs:mb-2 sm:mr-6">
              <p class="text-red-darken text-12 font-SF mb-1">
                9,495.48
              </p>
              <p class="text-gray-darken text-12 font-SF mb-1">
                $9,495.48
              </p>
            </div>
            <div class="xs:mb-2 sm:mr-6">
              <p class="text-gray-darken text-12 font-SF mb-1">
                24h Change
              </p>
              <p class="text-green-darken text-12 font-SF mb-1">
                3.16+0.03%
              </p>
            </div>
            <div class="xs:mb-2 sm:mr-6">
              <p class="text-gray-darken text-12 font-SF mb-1">
                24h High
              </p>
              <p class="text-white text-12 font-SF mb-1">
                9,589.00
              </p>
            </div>
            <div class="xs:mb-2 sm:mr-6">
              <p class="text-gray-darken text-12 font-SF mb-1">
                24h Low
              </p>
              <p class="text-white text-12 font-SF mb-1">
                9,400.00
              </p>
            </div>
            <div>
              <p class="text-gray-darken text-12 font-SF mb-1">
                24h Volume
              </p>
              <p class="text-white text-12 font-SF mb-1">
                398,250,846.06 USDT
              </p>
            </div>
          </div>
        </div>
        <div class="flex">
          <a class="mr-2" href="#">
            <img src="/assets/help.svg" alt="" />
          </a>
          <a class="mr-2" href="#">
            <img src="/assets/notification.svg" alt="" />
          </a>
          <a href="#">
            <img src="/assets/settings.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
    <!-- end header -->
    <div class="border-b border-solid border-white-light">
      <div class="flex flex-col md:flex-row">
        <div
          class="chart-history-content flex-grow md:border-r border-solid border-white-light"
        >
          <div
            class="area-height p-7 border-b border-solid border-white-light"
          >
            <DepthGraph ref="depthGraph"></DepthGraph>
          </div>
          <!-- start history -->
          <div class="px-7 border-b md:border-transparent border-solid border-white-light">
            <div class="overflow-x-auto">
              <div class="price-history-content">
                <div class="flex justify-between mb-4">
                  <div class="tabs flex">
                    <div class="tab-title" v-for="(historyTab, key) in historyTabs" :key="key" :class="state.selectedHistoryTab == key? 'active' : ''">
                      <div class="history-tab flex">
                        <div class="tab" @click="historyTabClick(key)">
                          {{ historyTab }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="hideotherpair"
                      type="checkbox"
                      class="mr-1"
                    />
                    <label 
                      for="hideotherpair"
                      class="text-gray-darken text-10"
                    >
                      Hide Other Pairs
                    </label>
                  </div>
                </div>
                <div class="pb-5">
                  <div v-show="state.selectedHistoryTab == 0" class="h-full flex items-center justify-center">
                    <table width="100%">
                      <thead>
                        <tr class="text-center">
                          <th class="text-10 text-gray-darken font-SF">
                            Date
                          </th>
                          <th class="text-10 text-gray-darken font-SF">
                            Pair
                          </th>
                          <th class="text-10 text-gray-darken font-SF">
                            Type
                          </th>
                          <th class="text-10 text-gray-darken font-SF">
                            Side
                          </th>
                          <th class="text-10 text-gray-darken font-SF">
                            Price
                          </th>
                          <th class="text-10 text-gray-darken font-SF">
                            Amount
                          </th>
                          <th class="text-10 text-gray-darken font-SF">
                            Filled
                          </th>
                          <th class="text-10 text-gray-darken font-SF">
                            Total
                          </th>
                          <th class="text-10 text-gray-darken font-SF">
                            Trgger Conditions
                          </th>
                          <th class="text-10 text-yellow-darken font-SF">
                            Cancel All
                          </th>
                        </tr>
                      </thead>
                      <tbody
                        v-for="(history, index) in state.historys"
                        :key="index"
                      >
                        <tr class="text-center">
                          <td
                            class="text-10 text-gray-darken font-SF border-b border-solid py-4"
                            :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
                          >
                            {{ history.date }}
                          </td>
                          <td
                            class="text-10 text-white font-SF border-b border-solid py-4"
                            :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
                          >
                            {{ history.pair }}
                          </td>
                          <td
                            class="text-10 text-white font-SF border-b border-solid py-4"
                            :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
                          >
                            {{ history.type }}
                          </td>
                          <td
                            class="text-10 text-green-darken font-SF border-b border-solid py-4"
                            :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
                          >
                            {{ history.side }}
                          </td>
                          <td
                            class="text-10 text-white font-SF border-b border-solid py-4"
                            :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
                          >
                            {{ history.price }}
                          </td>
                          <td
                            class="text-10 text-white font-SF border-b border-solid py-4"
                            :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
                          >
                            {{ history.amount }}
                          </td>
                          <td
                            class="text-10 text-white font-SF border-b border-solid py-4"
                            :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
                          >
                            {{ history.filled }}
                          </td>
                          <td
                            class="text-10 text-white font-SF border-b border-solid py-4"
                            :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
                          >
                            {{ history.total }}
                          </td>
                          <td
                            class="text-10 text-white font-SF border-b border-solid py-4"
                            :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
                          >
                            {{ history.condition }}
                          </td>
                          <td
                            class="text-10 text-white font-SF border-b border-solid py-4"
                            :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
                          >
                            Cancel
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div v-show="state.selectedHistoryTab == 1" class="h-full flex items-center justify-center">
                    <p class="text-center text-gray-300">No Record</p>
                  </div>
                  <div v-show="state.selectedHistoryTab == 2" class="h-full flex items-center justify-center">
                    <p class="text-center text-gray-300">No Record</p>
                  </div>
                  <div v-show="state.selectedHistoryTab == 3" class="h-full flex items-center justify-center">
                    <p class="text-center text-gray-300">No Record</p>
                  </div>
                  <div v-show="state.selectedHistoryTab == 4" class="h-full flex items-center justify-center">
                    <p class="text-center text-gray-300">No Record</p>
                  </div>
                  <div v-show="state.selectedHistoryTab == 5" class="h-full flex items-center justify-center">
                    <p class="text-center text-gray-300">No Record</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end history -->
        </div>
        <div class="flex">
          <div class="price-item-content border-r border-solid border-white-light ">
            <!-- start price -->
            <div 
              class="area-height p-4 border-b border-solid border-white-light"
            >
              <div 
                class="flex justify-between items-center mb-5"
              >
                <div>
                  <button
                    class="w-7 h-7 p-1 button-gradient rounded mr-2"
                    ref="buttonorder1"
                    @click="order1"
                  >
                    <img src="/assets/order1.png" alt=""/>
                  </button>
                  <button
                    class="w-7 h-7 p-1 rounded mr-2"
                    @click="order2"
                    ref="buttonorder2"
                  >
                    <img src="/assets/order2.png" alt=""/>
                  </button>
                  <button
                    class="w-7 h-7 p-1 rounded mr-2"
                    @click="order3"
                    ref="buttonorder3"
                  >
                    <img src="/assets/order3.png" alt=""/>
                  </button>
                  <button
                    class="w-7 h-7 p-1 rounded"
                    @click="order4"
                    ref="buttonorder4"
                  >
                    <img src="/assets/order4.png" alt=""/>
                  </button>
                </div>
                <div>
                  <select
                    class="w-11 button-gradient rounded text-gray-darken text-11 font-SF py-1"
                  >
                    <option value="0.01">0.01</option>
                    <option value="0.02">0.02</option>
                    <option value="0.03">0.03</option>
                    <option value="0.04">0.04</option>
                    <option value="0.05">0.05</option>
                  </select>
                </div>
              </div>
              <div>
                <div class="" :class="state.priceorder == 1 ? 'flex': state.priceorder == 2 ? 'flex flex-col-reverse' : ''">
                  <div v-if="state.priceorder != 2" class="mb-4" :class="state.priceorder == 1 ? 'w-1/2' : ''">
                    <table width="100%">
                      <thead>
                        <tr class="text-center">
                          <th class="text-gray-darken text-10 font-SF py-2.5">Price(USD)</th>
                          <th class="text-gray-darken text-10 font-SF py-2.5">Amount(BTC)</th>
                          <th v-if="state.priceorder != 1" class="text-gray-darken text-10 font-SF py-2.5">Total</th>
                        </tr>
                      </thead>
                      <tbody class="bg-red-lighten">
                        <tr
                          v-show="state.selectedPlate!='buy'"
                          class="text-center"
                          v-for="(price, index) in state.plate.askRows"
                          :key="index"
                        >
                          <td class="text-red-darken text-12 font-SF py-1.5 rounded-l">
                            {{ price.price }}
                          </td>
                          <td class="text-white text-12 font-SF py-1.5">
                            {{ price.amount }}
                          </td>
                          <td v-if="state.priceorder != 1" class="text-white text-12 font-SF py-1.5 rounded-r">
                            {{ price.totalAmount }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p v-if="state.plate.askRows == ''" class="text-white text-center text-sm">No Records</p>
                  </div>
                  <div v-if="state.priceorder != 1" class="flex justify-around">
                    <div class="text-14 py-2 text-green-darken flex items-center justify-center">
                      <p class="mb-0 mr-1">0.00</p>
                      <span v-if="state.currentCoin.change>0">↑</span>
                      <span v-else-if="state.currentCoin.change<0">↓</span>
                    </div>
                    <div class="text-14 text-white py-2">
                      0.00
                    </div>
                    <div class="text-10 text-green-darken py-2">
                      More
                    </div>
                  </div>
                  <div v-if="state.priceorder != 3" class="mb-4" :class="state.priceorder == 1 ? 'w-1/2' : ''">
                    <table width="100%">
                      <thead>
                        <tr v-show="state.priceorder == 2 || state.priceorder == 1" class="text-center">
                          <th class="text-gray-darken text-10 font-SF py-2.5">Price(USD)</th>
                          <th class="text-gray-darken text-10 font-SF py-2.5">Amount(BTC)</th>
                          <th v-if="state.priceorder != 1" class="text-gray-darken text-10 font-SF py-2.5">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-show="state.selectedPlate!='sell'"
                          class="text-center"
                          v-for="(price, index) in state.plate.bidRows"
                          :key="index"
                        >
                          <td
                            class="text-10 text-green-darken"
                          >
                            {{ price.price }}
                          </td>
                          <td
                            class="text-10 text-white"
                          >
                            {{ price.amount }}
                          </td>
                          <td v-if="state.priceorder != 1" class="text-10 text-white">
                            <div class="bg-green-lighten py-1 px-1.5 rounded">
                              {{ price.totalAmount }}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p v-if="state.plate.bidRows == ''" class="text-white text-center text-sm">No Records</p>
                  </div>
                </div>
                <div v-if="state.priceorder == 1" class="flex justify-around">
                  <div class="text-14 py-2 text-green-darken flex items-center justify-center">
                    <p class="mb-0 mr-1">0.00</p>
                    <span v-if="state.currentCoin.change>0">↑</span>
                    <span v-else-if="state.currentCoin.change<0">↓</span>
                  </div>
                  <div class="text-14 text-white py-2">
                    0.00
                  </div>
                  <div class="text-10 text-green-darken py-2">
                    More
                  </div>
                </div>
              </div>
            </div>
            <!-- end price -->
            <!-- start time -->
            <div class="py-4 pr-5 pl-7">
              <div>
                <table width="100%">
                  <thead>
                    <tr class="text-center">
                      <th class="text-10 text-gray-darken font-SF pb-3">
                        Price(USD)
                      </th>
                      <th class="text-10 text-gray-darken font-SF pb-3">
                        Amount(BTC)
                      </th>
                      <th class="text-10 text-gray-darken font-SF pb-3">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    v-for="(price, index) in state.prices"
                    :key="index"
                  >
                    <tr
                      class="text-center"
                      v-for="(trade, index) in state.trade.rows"
                      :key="index"
                    >
                      <td 
                        class="text-10 py-1.5"
                      >
                        {{ trade.price }}
                      </td>
                      <td class="text-10 text-white py-1.5">
                        {{ trade.amount }}
                      </td>
                      <td class="text-10 text-white py-1.5">
                        {{ trade.time }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p v-if="state.trade.rows == ''" class="text-white text-center text-sm">No Records</p>
              </div>
            </div>
            <!-- end time -->
          </div>
          <div class="price-item-content bg-gradient">
            <!-- start purchase -->
            <div class="area-height border-b border-solid border-white-light p-4 pr-7">
              <div class="flex items-center justify-between mb-4">
                <p
                  class="mb-0 text-white text-14"
                >
                  Purchase
                </p>
                <div class="flex items-center">
                  <p class="mb-0 text-green-darken underline text-10 mr-4">VIP 0</p>
                  <a href="#">
                    <i class="text-white fas fa-ellipsis-v"></i>
                  </a>
                </div>
              </div>
              <div class="pb-4 border-white-light border-b border-solid">
                <div class="flex border border-solid border-green-light rounded">
                  <button
                    class="w-1/2 text-green-darken py-2 text-10 uppercase rounded-l"
                    :class="state.purchaseBuy ? 'bg-green-lighten' : ''"
                    @click="purchaseBuyClick"
                  >
                    Buy
                  </button>
                  <button
                    class="w-1/2 text-green-darken py-2 text-10 rounded-r"
                    :class="state.purchaseBuy ? '' : 'bg-red-light-darken'"
                    @click="purchaseSellClick"
                  >
                    Sell
                  </button>
                </div>
              </div>
              <div class="flex justify-between items-center mb-3 -mt-px">
                <div class="flex market-limit-tabs">
                  <div
                    class="border-t-2 border-solid text-12 px-2 py-3 mr-4"
                    :class="state.selectedMarketTab == 0 ? 'border-green-darken text-green-darken' : 'border-transparent text-gray-darken'"
                    @click="changeMarketLimit(0)"
                  >
                    Market
                  </div>
                  <div
                    class="text-12 border-t-2 border-solid px-2 py-3"
                    :class="state.selectedMarketTab == 1 ? 'border-green-darken text-green-darken' : 'border-transparent text-gray-darken'"
                    @click="changeMarketLimit(1)"
                  >
                    Limit
                  </div>
                </div>
                <div
                  class="flex justify-between items-center"
                >
                  <div
                    class="flex items-center"
                  >
                    <img 
                      width="20px" 
                      class="mr-1"
                      src="/assets/error.svg" 
                      alt=""
                    />
                    <select class="bg-transparent text-gray-darken text-12">
                      <option>OCO</option>
                      <option>OCO</option>
                      <option>OCO</option>
                    </select>
                  </div>
                </div>
              </div>
              <form>
                <p class="text-gray-darken font-SF text-12 mb-4">
                  <i class="text-gray-darken fas fa-wallet mr-1"></i>
                  {{ state.selectedMarketTab == 0 ? 'MARKET PRICE' : state.publishAmount + ' USDT' }}
                </p>
                <div v-if="state.selectedMarketTab == 0">
                  <div
                    class="border border-solid border-gray-lighter rounded py-2 px-4 flex mb-3"
                  >
                    <p class="text-gray-darken text-10 font-SF whitespace-nowrap">
                      {{ state.purchaseBuy ? 'Order Value' : 'Quality' }}
                    </p>
                    <input
                      type="text"
                      :value="state.publishAmount"
                      class="w-full text-white bg-transparent text-10 font-SF text-right outline-none"
                    />
                    <p class="text-gray-darken text-10 font-SF text-right ml-2">
                      USDT
                    </p>
                  </div>
                  <div class="flex items-center mb-4">
                    <div 
                      class="w-2 h-2 rounded-full border border-solid border-green-darken"
                    ></div>
                    <div
                      class="h-0.5 flex-grow"
                      style="backgroundImage: linear-gradient(to right, #92CB5A , #6E87A5);"
                    ></div>
                    <div 
                      class="w-2 h-2 rounded-full bg-gray-darken"
                    ></div>
                    <div
                      class="h-0.5 bg-gray-lighter flex-grow"
                    ></div>
                    <div 
                      class="w-2 h-2 rounded-full bg-gray-darken"
                    ></div>
                    <div
                      class="h-0.5 bg-gray-lighter flex-grow"
                    ></div>
                    <div 
                      class="w-2 h-2 rounded-full bg-gray-darken"
                    ></div>
                    <div
                      class="h-0.5 bg-gray-lighter flex-grow"
                    ></div>
                    <div 
                      class="w-2 h-2 rounded-full bg-gray-darken"
                    ></div>
                  </div>
                </div>
                <div v-if="state.selectedMarketTab == 1">
                  <div
                    class="border border-solid border-gray-lighter rounded py-2 px-4 flex mb-3"
                  >
                    <p class="text-gray-darken text-10 font-SF">
                      Price
                    </p>
                    <input
                      type="text"
                      :value="state.publishAmount"
                      class="w-full text-white bg-transparent text-10 font-SF text-right outline-none"
                    />
                    <p class="text-gray-darken text-10 font-SF text-right ml-2">
                      USDT
                    </p>
                  </div>
                  <div
                    class="border border-solid border-gray-lighter rounded py-2 px-4 flex mb-4"
                  >
                    <p class="text-gray-darken text-10 font-SF">
                      Amount
                    </p>
                    <input
                      type="text"
                      value=""
                      class="w-full text-white bg-transparent text-10 font-SF text-right outline-none"
                    />
                    <p class="text-gray-darken text-10 font-SF text-right ml-4">
                      BTC
                    </p>
                  </div>
                  <div class="flex items-center mb-4">
                    <div 
                      class="w-2 h-2 rounded-full border border-solid border-green-darken"
                    ></div>
                    <div
                      class="h-0.5 flex-grow"
                      style="backgroundImage: linear-gradient(to right, #92CB5A , #6E87A5);"
                    ></div>
                    <div 
                      class="w-2 h-2 rounded-full bg-gray-darken"
                    ></div>
                    <div
                      class="h-0.5 bg-gray-lighter flex-grow"
                    ></div>
                    <div 
                      class="w-2 h-2 rounded-full bg-gray-darken"
                    ></div>
                    <div
                      class="h-0.5 bg-gray-lighter flex-grow"
                    ></div>
                    <div 
                      class="w-2 h-2 rounded-full bg-gray-darken"
                    ></div>
                    <div
                      class="h-0.5 bg-gray-lighter flex-grow"
                    ></div>
                    <div 
                      class="w-2 h-2 rounded-full bg-gray-darken"
                    ></div>
                  </div>     
                  <div
                    class="pr-4 flex mb-6"
                  >
                    <p class="text-gray-darken text-10 font-SF whitespace-nowrap">
                      Commision ({{ state.symbolFee * 100 }}%)
                    </p>
                    <p class="text-gray-darken text-10 font-SF text-right w-full">
                      {{ state.publishAmount * state.symbolFee }}
                    </p>
                    <p class="text-gray-darken text-10 font-SF text-right ml-2">
                      USDT
                    </p>
                  </div>
                </div>
                <div>
                  <!-- isLogin -->
                  <button
                    v-if="!state.isLogin"
                    class="w-full py-2 rounded text-green-darken text-10"
                    :class="state.purchaseBuy ? 'bg-green-lighten' : 'bg-red-light-darken'"
                  >
                    Log in
                  </button>
                  <button
                    v-if="state.isLogin && state.selectedMarketTab == 0"
                    class="w-full py-2 rounded text-green-darken text-10"
                    :class="state.purchaseBuy ? 'bg-green-lighten' : 'bg-red-light-darken'"
                    @click="buyWithMarketPrice"
                  >
                    {{ state.purchaseBuy  ? 'Buy' : 'Sell'}} BTC
                  </button>
                  <button
                    v-if="state.isLogin && state.selectedMarketTab == 1"
                    class="w-full py-2 rounded text-green-darken text-10"
                    :class="state.purchaseBuy ? 'bg-green-lighten' : 'bg-red-light-darken'"
                    @click="buyWithLimitPrice"
                  >
                    {{ state.purchaseBuy  ? 'Buy' : 'Sell'}} BTC
                  </button>
                </div>
              </form>
            </div>
            <!-- end purchase -->
            <!-- start balancce -->
            <div class="p-4 pr-7">
              <p
                class="text-white text-14 font-SF mb-4"
              >
                Balance
              </p>
              <div class="flex mb-5">
                <button
                  class="w-1/2 py-2 text-green-darken border-solid border border-green-darken text-10 mr-2 rounded hover:bg-green-lighten"
                >
                  Deposit
                </button>
                <button
                  class="w-1/2 py-2 text-green-darken border-solid border border-green-darken text-10 rounded hover:bg-green-lighten"
                >
                  Withdraw
                </button>
              </div>
              <div>
                <div 
                  class="flex justify-between mb-3"
                  v-for="(BTC, index) in state.coins.BTC"
                  :key="index"
                >
                  <p class="text-10 text-white mb-0">
                    {{ BTC.coin }}
                    <span
                      class="text-green-darken"
                    >
                      Available
                    </span>
                  </p>
                  <p class="text-10 text-white mb-0">
                    {{ BTC.price }}
                  </p>
                </div>
                <!-- <div 
                  class="flex justify-between mb-3"
                  v-for="(ETH, index) in state.coins.ETH"
                  :key="index"
                >
                  <p class="text-10 text-white mb-0">
                    {{ ETH.coin }}
                    <span
                      class="text-green-darken"
                    >
                      Available
                    </span>
                  </p>
                  <p class="text-10 text-white mb-0">
                    {{ ETH.price }}
                  </p>
                </div>
                <div 
                  class="flex justify-between mb-3"
                  v-for="(USDT, index) in state.coins.USDT"
                  :key="index"
                >
                  <p class="text-10 text-white mb-0">
                    {{ USDT.coin }}
                    <span
                      class="text-green-darken"
                    >
                      Available
                    </span>
                  </p>
                  <p class="text-10 text-white mb-0">
                    {{ USDT.price }}
                  </p>
                </div> -->
              </div>
            </div>
            <!-- end balance -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, ref } from "vue";
import Api from "../config/api";
import axios from "axios";
import moment from "moment-timezone";
import DepthGraph from "@/components/exchange/DepthGraph.vue";
// import { useRouter, useRoute } from 'vue-router';

const priceTabs = ['Favorites', 'Inverse Perpetual', 'USDT Perpetual', 'Inverse Futures'];
const historyTabs = ['Open Orders', 'Open History', 'Trade History', 'Funds', 'Staking Valut', 'Activity']
export default {
  watch: {
  },
  components: {
    DepthGraph
  },
  setup() {
    // const router = useRouter();
    // const route = useRoute();
    const state = reactive({
      isLogin: false,
      priceorder: 0,
      showPopover: false,
      selectedPriceTab: 0,
      selectedHistoryTab: 0,
      purchaseBuy: true,
      selectedMarketTab: 0,
      btcusdtPrice: {
        inversePerpetual: [
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/btc.03370bbb.svg',
              text: 'BTCUSD'
            },
            price: '49,927.00',
            change: '+5.09%',
            volume: '5.42B(USD)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/eth.3b252140.svg',
              text: 'ETHUSD'
            },
            price: '3,741.05',
            change: '+5.6%',
            volume: '2.57B(USD)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/eos.297c8d7f.svg',
              text: 'EOSUSD'
            },
            price: '5.295',
            change: '+4.64%',
            volume: '155.28M(USD)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/xrp.eec37951.svg',
              text: 'XRPUSD'
            },
            price: '1.2581',
            change: '+5.45%',
            volume: '903.26M(USD)'
          }
        ],
        usdtPerpetual: [
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/btc.03370bbb.svg',
              text: 'BTCUSDT'
            },
            price: '49,866.50',
            change: '+4.89%',
            volume: '3.18B(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/eth.3b252140.svg',
              text: 'ETHUSDT'
            },
            price: '3,738.70',
            change: '+5.36%',
            volume: '1.12B(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/axs.1cf165cc.svg',
              text: 'ASXUSDT'
            },
            price: '73.215',
            change: '+2.87%',
            volume: '26.03M(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/xrp.eec37951.svg',
              text: 'XRPUSDT'
            },
            price: '1.2594',
            change: '+5.33%',
            volume: '405.56M(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/doge.e0638420.svg',
              text: 'DOGEUSDT'
            },
            price: '0.3010',
            change: '+7.38%',
            volume: '123.73M(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/eos.297c8d7f.svg',
              text: 'EOSUSDT'
            },
            price: '5.301',
            change: '+4.35%',
            volume: '71.34M(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/theta.7d84ebbe.svg',
              text: 'THETAUSDT'
            },
            price: '7.150',
            change: '+6.68%',
            volume: '8.46M(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/trx.cfb71748.svg',
              text: 'TRXUSDT'
            },
            price: '0.09871',
            change: '+9.58%',
            volume: '3.85M(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/comp.9e712921.svg',
              text: 'COMPUSDT'
            },
            price: '479.10',
            change: '+5.12%',
            volume: '8.80M(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/xlm.2d3c1994.svg',
              text: 'XLMUSDT'
            },
            price: '0.36535',
            change: '+5.03%',
            volume: '5.09M(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/ada.3aa8eb45.svg',
              text: 'ADAUSDT'
            },
            price: '3.0623',
            change: '+8.53%',
            volume: '320.30(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/dot.350cfa52.svg',
              text: 'DOTUSDT'
            },
            price: '32.710',
            change: '+8.2%',
            volume: '109.80(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/bnb.77a1e8d5.svg',
              text: 'BNBUSDT'
            },
            price: '491.80',
            change: '+3.97%',
            volume: '43.60(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/ltc.90379c3c.svg',
              text: 'LTCUSDT'
            },
            price: '184.84',
            change: '+5.96%',
            volume: '38.27M(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/etc.88d65576.svg',
              text: 'ETCUSDT'
            },
            price: '68.360',
            change: '+4.51%',
            volume: '44.83(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/etc.88d65576.svg',
              text: 'MATICUSDT'
            },
            price: '1.4980',
            change: '+5.25%',
            volume: '37.49(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/link.be9e7c46.svg',
              text: 'LINKUSDT'
            },
            price: '29.673',
            change: '+7.7%',
            volume: '43.08M(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/aave.1a3824be.svg',
              text: 'AAVEUSDT'
            },
            price: '409.45',
            change: '+2.55%',
            volume: '16.19M(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/bch.278091f9.svg',
              text: 'BCHUSDT'
            },
            price: '672.05',
            change: '+4.96%',
            volume: '20.49M(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/sol.269b47fe.svg',
              text: 'SOLUSDT'
            },
            price: '115.905',
            change: '+2017%',
            volume: '396.52(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/uni.ed4be6b6.svg',
              text: 'UNIUSDT'
            },
            price: '30.573',
            change: '+1.16%',
            volume: '17.39(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/fil.92f5f914.svg',
              text: 'FILUSDT'
            },
            price: '78.48',
            change: '+2.2%',
            volume: '8.64(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/sushi.4e22ce1b.svg',
              text: 'SUSHIUSDT'
            },
            price: '13.393',
            change: '+4.25%',
            volume: '25.92M(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/sushi.4e22ce1b.svg',
              text: 'XTZUSDT'
            },
            price: '5.399',
            change: '+3.33%',
            volume: '45.95M(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/xem.7960f0fc.svg',
              text: 'XEMUSDT'
            },
            price: '0.2020',
            change: '+3.85%',
            volume: '8.55(USDT)'
          },
        ],
        inverseFutures: [
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/btc.03370bbb.svg',
              text: 'BTCUSD0924'
            },
            price: '50,308.50',
            change: '+5.21%',
            volume: '49.82M(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/btc.03370bbb.svg',
              text: 'BTCUSD1231'
            },
            price: '51,892.00',
            change: '+5.25%',
            volume: '38.12(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/eth.3b252140.svg',
              text: 'ETHUSD0924'
            },
            price: '3,792.50',
            change: '+5.7%',
            volume: '11.14M(USDT)'
          },
          {
            contracts: {
              icon: 'https://www.bybit.com/trade/inverse/static/media/eth.3b252140.svg',
              text: 'ETHUSD1231'
            },
            price: '3,920.05',
            change: '+5.88%',
            volume: '12.69M(USDT)'
          },
        ]
      },
      historys: [
        {
          date: '06-23 10:25:15',
          pair: 'BTC/USD',
          type: 'Limit',
          side: 'Buy',
          price: '9,620.00',
          amount: '0.005270',
          filled: '0.005270',
          total: '51.88',
          condition: '-'
        },
        {
          date: '06-23 10:25:15',
          pair: 'ETH/USD',
          type: 'Limit',
          side: 'Buy',
          price: '19,620.00',
          amount: '0.005270',
          filled: '0.005270',
          total: '51.88',
          condition: '-'
        },
        {
          date: '06-23 10:25:15',
          pair: 'ETH/USD',
          type: 'Limit',
          side: 'Buy',
          price: '19,620.00',
          amount: '0.005270',
          filled: '0.005270',
          total: '51.88',
          condition: '-'
        },
        {
          date: '06-23 10:25:15',
          pair: 'ETH/USD',
          type: 'Limit',
          side: 'Buy',
          price: '19,620.00',
          amount: '0.005270',
          filled: '0.005270',
          total: '51.88',
          condition: '-'
        }
      ],
      prices: [
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
      ],
      plate: {
        maxPostion: 10,
        askRows: [],
        bidRows: []
      },
      currentCoin: {
        base: "",
        coin: "",
        symbol: "",
        change: 1
      },
      trade: {
        rows: [],
      },
      coins: {
        _map: [],
        USDT: [],
        BTC: [],
        ETH: [],
        USDT2: [],
        BTC2: [],
        ETH2: [],
        favor: []
      },
      wallet: {
        base: 0.0,
        coin: 0.0
      },
      form: {
        buy: {
          limitPrice: 0.0,
          limitAmount: 0.0,
          marketAmount: 0.0,
          limitTurnover: 0.0
        },
        sell: {
          limitPrice: 0.0,
          limitAmount: 0.0,
          marketAmount: 0.0,
          limitTurnover: 0.0
        }
      },
      currentOrder: {
        rows: []
      },
      historyOrder: {
        pageSize: 10,
        total: 10,
        page: 0,
        rows: []
      },
      fullTrade: {},
      showMarket: false,
      fixHistoryHeight: 295,
      selectedPlate: "all",
      defaultPath: "btc_usdt",
      sliderStep: [25, 50, 75, 100],
      sliderBuyLimitPercent: 0,
      sliderSellLimitPercent: 0,
      sliderBuyMarketPercent: 0,
      sliderSellMarketPercent: 0,
      memberRate: 0,
      collecRequesting: false,
      currentCoinIsFavor: false,
      isUseBHB: false,
      skin: "night",
      currentImgTable: "k",
      selectedOrder: "current",
      CNYRate: null,
      datafeed: null,
      basecion: "usdt",
      coinScale: 6,
      baseCoinScale: 6,
      symbolFee: 0.001,
      dataIndex: [],
      dataIndex2: [],
      searchKey: "",
      coinInfo:{},
      enableMarketBuy: 1,
      enableMarketSell: 1,
      exchangeable: 1,
      publishType: "NONE",
      currentTime: 0,
      publishAmount: 0,
      publishPrice: 0,
      startTime: "2000-01-01 00:00:00",
      endTime: "2000-01-01 00:00:00",
      clearTime: "2000-01-01 00:00:00",
      showPublish: false,
      showCountDown: false,
      countDownBgColor: "linear-gradient(135deg, rgb(0 199 144 / 63%) 10%, rgb(18 33 41) 100%)",
      publishState: 0,
    })
    const buttonorder1 = ref(null)
    const buttonorder2 = ref(null)
    const buttonorder3 = ref(null)
    const buttonorder4 = ref(null)
    const getCNYRate = () => {
      axios
        .post(Api.baseURL.host + ":6004/market/exchange-rate/usd-cny")
        .then(response => {
          console.log("getCNYRate", response)
          state.CNYRate = response.data.data;
        });
    }
    const getPlate = (str="") => {
      let params= {};
      params["symbol"] = state.currentCoin.symbol;
      axios
        .post(Api.baseURL.host + Api.market.platemini, "symbol=" + state.currentCoin.symbol)
        .then(response => {
          console.log("getPlate", response)
          state.plate.askRows = [];
          state.plate.bidRows = [];
          let resp = response.data;
          if ((resp.ask && resp.ask.items)) {
            for (let i = 0; i < resp.ask.items.length; i++) {
              resp.ask.items[i].totalAmount= resp.ask.items[i].amount;
              let ask = resp.ask.items[i];
              state.plate.askRows.push(ask);
            }
          }
          if ((resp.bid && resp.bid.items)) {
            for (let i = 0; i < resp.bid.items.length; i++) {
              resp.bid.items[i].totalAmount= resp.bid.items[i].amount;
              let bid = resp.bid.items[i];
              state.plate.bidRows.push(bid);
            }
          }
          // if (resp.ask && resp.ask.items) {
          //   for (let i = 0; i < resp.ask.items.length; i++) {
          //     if (i == 0) {
          //       resp.ask.items[i].totalAmount = resp.ask.items[i].amount;
          //     } else {
          //       resp.ask.items[i].totalAmount =
          //         resp.ask.items[i - 1].totalAmount + resp.ask.items[i].amount;
          //     }
          //   }
          //   if (resp.ask.items.length >= state.plate.maxPostion) {
          //     for (let i = state.plate.maxPostion; i > 0; i--) {
          //       var ask = resp.ask.items[i - 1];
          //       ask.direction = "SELL";
          //       ask.position = i;
          //       state.plate.askRows.push(ask);
          //     }
          //     const rows = state.plate.askRows,
          //       // len = rows.length,
          //       totle = rows[0].totalAmount;
          //     state.plate.askTotle = totle;
          //   } else {
          //     for (let i = state.plate.maxPostion; i > resp.ask.items.length; i--) {
          //       let ask = { price: 0, amount: 0 };
          //       ask.direction = "SELL";
          //       ask.position = i;
          //       ask.totalAmount = ask.amount;
          //       state.plate.askRows.push(ask);
          //     }
          //     for (let i = resp.ask.items.length; i > 0; i--) {
          //       let ask = resp.ask.items[i - 1];
          //       ask.direction = "SELL";
          //       ask.position = i;
          //       state.plate.askRows.push(ask);
          //     }
          //     var askItemIndex = (resp.ask.items.length - 1) > 0 ? (resp.ask.items.length - 1) : 0;
          //     const rows = state.plate.askRows,
          //       // len = rows.length,
          //       totle =
          //         rows[askItemIndex]
          //           .totalAmount;
          //     state.plate.askTotle = totle;
          //   }
          // }
          // if (resp.bid && resp.bid.items) {
          //   for (let i = 0; i < resp.bid.items.length; i++) {
          //     if (i == 0)
          //       resp.bid.items[i].totalAmount = resp.bid.items[i].amount;
          //     else
          //       resp.bid.items[i].totalAmount =
          //         resp.bid.items[i - 1].totalAmount + resp.bid.items[i].amount;
          //   }
          //   for (let i = 0; i < resp.bid.items.length; i++) {
          //     let bid = resp.bid.items[i];
          //     bid.direction = "BUY";
          //     bid.position = i + 1;
          //     state.plate.bidRows.push(bid);
          //     if (i == state.plate.maxPostion - 1) break;
          //   }
          //   if (resp.bid.items.length < state.plate.maxPostion) {
          //     for (
          //       let i = resp.bid.items.length;
          //       i < state.plate.maxPostion;
          //       i++
          //     ) {
          //       let bid = { price: 0, amount: 0 };
          //       bid.direction = "BUY";
          //       bid.position = i + 1;
          //       bid.totalAmount = 0;
          //       state.plate.bidRows.push(bid);
          //     }
          //     var bidItemIndex = (resp.bid.items.length - 1) > 0 ? (resp.bid.items.length - 1) : 0;
          //     const rows = state.plate.bidRows,
          //       // len = rows.length,
          //       totle = rows[bidItemIndex].totalAmount;
          //     state.plate.bidTotle = totle;
          //   } else {
          //     const rows = state.plate.bidRows,
          //       len = rows.length,
          //       totle = rows[len - 1].totalAmount;
          //     state.plate.bidTotle = totle;
          //   }
          // }
          if(str!=""){
            state.selectedPlate = str;
          }
        });
    }
    const getPlateFull = () => {
      axios
        .post(Api.baseURL.host + Api.market.platefull, "symbol=" + state.currentCoin.symbol)
        .then(response => {
          console.log("getPlateFull", response)
          let resp = response.data;
          state.fullTrade = resp;
          
          // resp.skin = state.skin;
          // (this as any).toRefs.depthGraph.draw(resp);
        });
    }
    const getTrade = () => {
      let params = {};
      params["symbol"] = state.currentCoin.symbol;
      params["size"] = 20;
      axios
        .post(Api.baseURL.host + Api.market.trade, "symbol=" + state.currentCoin.symbol)
        .then(response => {
          console.log("getTrade", response)
          state.trade.rows = [];
          let resp = response.data;
          for (let i = 0; i < resp.length; i++) {
            state.trade.rows.push(resp[i]);
          }
          console.log(state.trade.rows)
        });
    }
    const getSymbolScale = () => {
      axios
        .post(Api.baseURL.host + Api.market.symbolInfo, "symbol=" + state.currentCoin.symbol)
        .then(response => {
          console.log("getSymbolScale", response)
          if (response.data != null) {
            state.baseCoinScale = response.data.baseCoinScale;
            state.coinScale = response.data.coinScale;
            state.symbolFee = response.data.fee;

            state.enableMarketBuy = response.data.enableMarketBuy;
            state.enableMarketSell = response.data.enableMarketSell;

            state.exchangeable = response.data.exchangeable;

            state.publishType = response.data.publishType;
            state.startTime = response.data.startTime;
            state.endTime = response.data.endTime;
            state.clearTime = response.data.clearTime;
            state.currentTime = parseInt(response.data.currentTime/1000);
            state.publishAmount = response.data.publishAmount;
            state.publishPrice = response.data.publishPrice;

            let temCurT = moment(response.data.currentTime).format("YYYY-MM-DD HH:mm:ss");
            if(temCurT < state.clearTime) {
              if(state.publishType == "QIANGGOU" || state.publishType == "FENTAN"){
                state.showPublish = true;
                state.showCountDown = true;
              } else{
                state.showPublish = false;
                state.showCountDown = false;
              }
            } else{
              state.showPublish = false;
              state.showCountDown = false;
            }
          }
        });
    }
    const getCoinInfo = () => {
      axios
        .post(Api.baseURL.host + Api.market.coinInfo, "unit=" + state.currentCoin.coin)
        .then(response => {
          console.log("getCoinInfo", response);
          var resp = response.data;
          if (resp != null) {
            state.coinInfo = resp;
          }
      });
    }
    const getSymbol = () => {
      axios.post(Api.baseURL.host + Api.market.thumb, {}).then(response => {
        console.log("getSymbol", response);
        let resp = response.data;
        for (let i = 0; i < resp.length; i++) {
          let coin = resp[i];
          coin.base = resp[i].symbol.split("/")[1];
          state.coins[coin.base] = [];
          state.coins[coin.base + "2"] = [];
          state.coins._map = [];
          state.coins.favor = [];
        }
        for (let i = 0; i < resp.length; i++) {
          let coin = resp[i];
          coin.price = resp[i].close = resp[i].close.toFixed(
            state.baseCoinScale
          );
          coin.rose =
            resp[i].chg > 0
              ? "+" + (resp[i].chg * 100).toFixed(2) + "%"
              : (resp[i].chg * 100).toFixed(2) + "%";
          coin.coin = resp[i].symbol.split("/")[0];
          coin.base = resp[i].symbol.split("/")[1];
          coin.href = (coin.coin + "_" + coin.base).toLowerCase();
          coin.isFavor = false;
          state.coins._map[coin.symbol] = coin;
          if(coin.zone == 0){
            state.coins[coin.base].push(coin);
          }else{
            state.coins[coin.base + "2"].push(coin);
          }
          if (coin.symbol == state.currentCoin.symbol) {
            state.currentCoin = coin;
            state.form.buy.limitPrice = state.form.sell.limitPrice = coin.price;
          }
        }
        // if (state.isLogin) {
        //   state.getFavor();
        // }
        // require(["../../assets/js/exchange.js"], function(e) {
        //   e.clickScTab();
        // });
        // state.startWebsock();
        // state.changeBaseCion(state.basecion);
        console.log(state.coins)
      });
    }
    const getWallet = () => {
      axios
        .post(Api.baseURL.host + Api.uc.wallet + state.currentCoin.base, {})
        .then(response => {
          console.log("getWallet", response)
          // let resp = response.data;
          // state.wallet.base = resp.data.balance || "";
        });
      axios
        .post(Api.baseURL.host + Api.uc.wallet + state.currentCoin.coin, {})
        .then(response => {
          console.log("getWallet", response)
          // let resp = response.data;
          // state.wallet.coin = resp.data.balance || "";
        });
    }
    const buyWithLimitPrice = () => {
      if (state.form.buy.limitAmount == "") {
        return;
      }
      let maxAmount = state.wallet.base / state.form.buy.limitPrice;
      if (state.form.buy.limitAmount > maxAmount) {
        return;
      }
      let params = {};
      params["symbol"] = this.currentCoin.symbol;
      params["price"] = this.form.buy.limitPrice;
      params["amount"] = this.form.buy.limitAmount;
      params["direction"] = "BUY";
      params["type"] = "LIMIT_PRICE";
      params["useDiscount"] = this.isUseBHB ? "1" : "0";
      axios
        .post(this.host + this.api.exchange.orderAdd, params)
        .then(response => {
          var resp = response.data;
          if (resp.code == 0) {
            // this.$Notice.success({
            //   title: that.$t("exchange.tip"),
            //   desc: that.$t("exchange.success")
            // });
            getWallet();
            getCurrentOrder();
            getHistoryOrder();
            state.form.buy.limitAmount = 0;
            state.sliderBuyLimitPercent = 0;
          } else {
            return;
          }
        });
    }
    const buyWithMarketPrice = () => {
      if (this.form.buy.marketAmount == "") {
        // this.$Notice.error({
        //   title: this.$t("exchange.tip"),
        //   desc: this.$t("exchange.pricetip")
        // });
        return;
      }
      if (this.form.buy.marketAmount > parseFloat(this.wallet.base)) {
        // this.$Notice.error({
        //   title: this.$t("exchange.tip"),
        //   desc: this.$t("exchange.pricetipwarning") + this.wallet.base
        // });
        return;
      }
      let params = {};
      params["symbol"] = state.currentCoin.symbol;
      params["price"] = 0;
      params["amount"] = state.form.buy.marketAmount;
      params["direction"] = "BUY";
      params["type"] = "MARKET_PRICE";
      params["useDiscount"] = state.isUseBHB ? "1" : "0";
      // var that = this;
      axios
        .post(Api.baseURL.host + Api.exchange.orderAdd, params)
        .then(response => {
          var resp = response.data;
          if (resp.code == 0) {
            // this.$Notice.success({
            //   title: that.$t("exchange.tip"),
            //   desc: that.$t("exchange.success")
            // });
            refreshAccount();
            state.sliderBuyMarketPercent = 0;
          } else {
            // this.$Notice.error({
            //   title: that.$t("exchange.tip"),
            //   desc: resp.message
            // });
            return;
          }
        });
    }
    const getCurrentOrder = () => {
      let params = {};
      params["pageNo"] = 0;
      params["pageSize"] = 100;
      params["symbol"] = state.currentCoin.symbol;
      state.currentOrder.rows = [];
      // var that = this;
      axios
        .post(Api.baseURL.host + Api.exchange.current, params)
        .then(response => {
          console.log("getCurrentOrder", response)
          // var resp = response.data;
          // if (resp.content.length > 0) {
          //   state.currentOrder.rows = resp.content;
            // state.currentOrder.rows.forEach((row, index) => {
            //   row.skin = that.skin;
            //   row.price =
            //     row.type == "MARKET_PRICE"
            //       ? that.$t("exchange.marketprice")
            //       : row.price;
            // });
          // }
        });
    }
    const getHistoryOrder = (pageNo) => {
      if (pageNo == undefined) {
        pageNo = state.historyOrder.page;
      } else {
        pageNo = pageNo - 1;
      }
      state.historyOrder.rows = [];
      let params = {};
      params["pageNo"] = pageNo;
      params["pageSize"] = state.historyOrder.pageSize;
      params["symbol"] = state.currentCoin.symbol;
      // var that = this;
      axios
        .post(Api.baseURL.host + Api.exchange.history, params)
        .then(response => {
          console.log("getHistoryOrder", response)
          // let resp = response.data;
          // let rows = [];
          // if (resp.content.length > 0) {
          //   state.historyOrder.total = resp.totalElements;
          //   state.historyOrder.page = resp.number;
            // for (let i = 0; i < resp.content.length; i++) {
            //   let row = resp.content[i];
            //   if (row) {
                // row.skin = that.skin;
                // row.price =
                //   row.type == "MARKET_PRICE"
                //     ? that.$t("exchange.marketprice")
                //     : row.price;
            //     rows.push(row);
            //   }
            // }
            // this.historyOrder.rows = rows;
          // }
        });
    }
    const tipFormat = (val) => {
      return val + "%";
    }
    const changeBaseCoin = (str) => {
      state.basecion = str;
      if(str == "usdt"){
        state.dataIndex = state.coins.USDT;
        state.dataIndex2 = state.coins.USDT2;
      } else if(str == "btc"){
        state.dataIndex = state.coins.BTC;
        state.dataIndex2 = state.coins.BTC2;
      } else if(str == "eth"){
        state.dataIndex = state.coins.ETH;
        state.dataIndex2 = state.coins.ETH2;
      } else if(str == "favor"){
        state.dataIndex = state.coins.favor;
      }
    }
    const changePlate = (str) => {
      if (str != "all") {
        state.plate.maxPostion = 20;
      } else {
        state.plate.maxPostion = 10;
      }
      state.getPlate(str);
    }
    const changeImgTable = (str) => {
      state.currentImgTable = str;
    }
    const changeOrder = (str) => {
      state.selectedOrder = str;
    }
    const getCoin = (symbol) => {
      return state.coins._map[symbol];
    }
    const getFavor = () => {
      axios
        .post(Api.baseURL.host + Api.exchange.favorFind, {})
        .then(response => {
          console.log("getFavor", response);
          state.coins.favor = [];
          state.currentCoinIsFavor = false;
          let resp = response.data;
          for (let i = 0; i < resp.length; i++) {
            let coin = getCoin(resp[i].symbol);
            if (coin != null) {
              coin.isFavor = true;
              state.coins.favor.push(coin);
            }
            if (state.currentCoin.symbol == resp[i].symbol) {
              state.currentCoinIsFavor = true;
            }
          }
        });
    }
    const updatePlate = (type, row) => {
      if (type == "sell") {
        for (let i = 0; i < state.plate.askRows.length; i++) {
          if (
            row.price > state.plate.askRows[i].price &&
            i != 0 &&
            state.plate.askRows[i].price > 0
          ) {
            state.plate.askRows.splice(i, 0, row);
            state.plate.askRows.shift();
            break;
          } else if (
            i == state.plate.askRows.length - 1 &&
            (row.price < state.plate.askRows[i].price ||
              state.plate.askRows[i].price == 0)
          ) {
            state.plate.askRows.push(row);
            state.plate.askRows.shift();
            break;
          }
        }
      } else if (type == "buy") {
        for (let i = 0; i < state.plate.bidRows.length; i++) {
          if (row.price > state.plate.bidRows[i].price) {
            state.plate.bidRows.splice(i, 0, row);
            state.plate.bidRows.pop();
            break;
          }
        }
      }
    }
    const limited_price = () => {
      this.showMarket = false;
    }
    const market_price = () => {
      this.showMarket = true;
    }
    const currentCoinFavorChange = () => {
      // if (!this.isLogin) {
      //   this.$Message.warning(this.$t("common.logintip"));
      //   return;
      // }
      if (state.collecRequesting) {
        return;
      }
      const symbol = state.currentCoin.symbol;
      state.collecRequesting = true;
      if (state.currentCoinIsFavor) {
        axios
          .post(Api.baseURL.host + Api.exchange.favorDelete, {
            symbol
          })
          .then(response => {
            console.log("currentCoinFavorChange", response)
            let resp = response.data;
            if (resp.code == 0) {
              // this.$Message.info(this.$t("exchange.cancel_favorite"));
              getSymbol();
              state.currentCoinIsFavor = false;
            }
            state.collecRequesting = false;
          });
      } else {
        axios
          .post(Api.baseURL.host + Api.exchange.favorAdd, { symbol })
          .then(response => {
            console.log("currentCoinFavorChange else", response)
            let resp = response.data;
            if (resp.code == 0) {
              // this.$Message.info(this.$t("exchange.do_favorite"));
              getSymbol();
              state.currentCoinIsFavor = true;
            }
            state.collecRequesting = false;
          });
      }
    }
    const collect = (row) => {
      // if (!this.isLogin) {
      //   this.$Message.info(this.$t("common.logintip"));
      //   return;
      // }
      let params = {};
      params["symbol"] = row.symbol;
      axios
        .post(Api.baseURL.host + Api.exchange.favorAdd, params)
        .then(response => {
          let resp = response.body;
          if (resp.code == 0) {
            // this.$Message.info(this.$t("exchange.do_favorite"));
            getCoin(row.symbol).isFavor = true;
            row.isFavor = true;
            state.coins.favor.push(row);
            if (state.currentCoin.symbol == row.symbol) {
              state.currentCoinIsFavor = true;
            }
          }
        });
    }
    const cancelCollect = (row) => {
      // if (!this.isLogin) {
      //   this.$Message.info(this.$t("common.logintip"));
      //   return;
      // }
      let params = {};
      params["symbol"] = row.symbol;
      axios
        .post(Api.baseURL.host + Api.exchange.favorDelete, params)
        .then(response => {
          console.log("cancelCollect", response);
          let resp = response.data;
          if (resp.code == 0) {
            // this.$Message.info(this.$t("exchange.cancel_favorite"));
            getCoin(row.symbol).isFavor = false;
            for (let i = 0; i < state.coins.favor.length; i++) {
              let favorCoin = state.coins.favor[i];
              if (favorCoin.symbol == row.symbol) {
                state.coins.favor.splice(i, 1);
                break;
              }
            }
            if (state.currentCoin.symbol == row.symbol) {
              state.currentCoinIsFavor = false;
            }
          }
        });
    }
    const refreshAccount = () => {
      getCurrentOrder();
      getHistoryOrder();
      getWallet();
    }
    const sellMarketPrice = () => {
      // if (this.form.sell.marketAmount == "") {
      //   this.$Notice.error({
      //     title: this.$t("exchange.tip"),
      //     desc: this.$t("exchange.sellamounttip")
      //   });
      //   return;
      // }
      // if (this.form.sell.marketAmount > parseFloat(this.wallet.coin)) {
      //   this.$Notice.error({
      //     title: this.$t("exchange.tip"),
      //     // desc: this.$t("exchange.sellamounttipwarning") + this.wallet.coin
      //     desc: "最多能卖" + this.wallet.coin + "个"
      //   });
      //   return;
      // }

      let params = {};
      params["symbol"] = state.currentCoin.symbol;
      params["price"] = 0;
      params["amount"] = state.form.sell.marketAmount;
      params["direction"] = "SELL";
      params["type"] = "MARKET_PRICE";
      params["useDiscount"] = state.isUseBHB ? "1" : "0";
      // var that = this;
      axios
        .post(Api.baseURL.host + Api.exchange.orderAdd, params)
        .then(response => {
          console.log("sellMarketPrice", response)
          let resp = response.data;
          if (resp.code == 0) {
            // this.$Notice.success({
            //   title: that.$t("exchange.tip"),
            //   desc: that.$t("exchange.success")
            // });
            refreshAccount();
            state.sliderSellMarketPercent = 0;
          } else {
            // this.$Notice.error({
            //   title: that.$t("exchange.tip"),
            //   desc: resp.message
            // });
          }
        });
    }
    const sellLimitPrice = () => {
      // if (this.form.sell.limitAmount == "") {
      //   this.$Notice.error({
      //     title: this.$t("exchange.tip"),
      //     desc: this.$t("exchange.sellamounttip")
      //   });
      //   return;
      // }
      // if (this.form.sell.limitPrice == "") {
      //   this.$Notice.error({
      //     title: this.$t("exchange.tip"),
      //     desc: this.$t("exchange.sellpricetip")
      //   });
      //   return;
      // }
      // if (this.form.sell.limitAmount > parseFloat(this.wallet.coin)) {
      //   this.$Notice.error({
      //     title: this.$t("exchange.tip"),
      //     desc: "最多能卖" + this.wallet.coin + "个"
      //   });
      //   return;
      // }
      let params = {};
      params["symbol"] = state.currentCoin.symbol;
      params["price"] = state.form.sell.limitPrice;
      params["amount"] = state.form.sell.limitAmount;
      params["direction"] = "SELL";
      params["type"] = "LIMIT_PRICE";
      params["useDiscount"] = state.isUseBHB ? "1" : "0"; //是否试用手续费抵扣,0 不使用 1使用
      // var that = this;
      axios
        .post(Api.baseURL.host + Api.exchange.orderAdd, params)
        .then(response => {
          let resp = response.body;

          if (resp.code == 0) {
          //   this.$Notice.success({
          //     title: that.$t("exchange.tip"),
          //     desc: that.$t("exchange.success")
          //   });
            refreshAccount();
            state.form.sell.limitAmount = 0;
            state.sliderSellLimitPercent = 0;
          } else {
            // this.$Notice.error({
            //   title: that.$t("exchange.tip"),
            //   desc: resp.message
            // });
          }
        });
    }
    const buyPlate = (currentRow) => {
      state.form.buy.limitPrice = currentRow.price;
      state.form.sell.limitPrice = currentRow.price;
    }
    const sellPlate = (currentRow) => {
      state.form.buy.limitPrice = currentRow.price;
      state.form.sell.limitPrice = currentRow.price;
    }
    // const cancel = (index) => {
      // let order = state.currentOrder.rows[index];
      // this.$Modal.confirm({
      //   title: "撤单提示",
      //   content: this.$t("exchange.undotip"),
      //   onOk: () => {
      //     this.$http
      //       .post(
      //         Api.baseURL.host + Api.exchange.orderCancel + "/" + order.orderId,
      //         {}
      //       )
      //       .then(response => {
      //         var resp = response.body;
      //         if (resp.code == 0) {
      //           this.refreshAccount();
      //           this.$Notice.success({
      //             title: this.$t("exchange.tip"),
      //             desc: this.$t("exchange.cancelsuccess")
      //           });
      //         } else {
      //           this.$Notice.error({
      //             title: this.$t("exchange.tip"),
      //             desc: resp.message
      //           });
      //         }
      //       });
      //   }
      // });
    // }
    const showPublishMask = () => {
      if(!state.showPublish){
        state.showPublish = true;
      }
    }
    const hidePublishMask = () => {
      if(state.showPublish){
        state.showPublish = false;        
      }
    }
    const hideCountDown = () => {
      if(state.showCountDown){
        state.showCountDown = false;
      }
    }
    const seachInputChange = () => {
      state.searchKey = state.searchKey.toUpperCase();
      if(state.basecion == "favor"){
          state.dataIndex = state.coins.favor.filter(item => item["coin"].indexOf(state.searchKey) == 0);
      }else if(state.basecion == "usdt"){
          state.dataIndex = state.coins.USDT.filter(item => item["coin"].indexOf(state.searchKey) == 0);
      }else if(state.basecion == "btc"){
          state.dataIndex = state.coins.BTC.filter(item => item["coin"].indexOf(state.searchKey) == 0);
      }else if(state.basecion == "eth"){
          state.dataIndex = state.coins.ETH.filter(item => item["coin"].indexOf(state.searchKey) == 0);
      }
    }
    const silderGo = (silder, val) => {
      state[silder] = val;
    }
    const showPricePopover = () => {
      state.showPopover = !state.showPopover;
    }
    const order1 = () => {
      state.priceorder = 0;
      buttonorder1.value.classList.add("button-gradient")
      buttonorder2.value.classList.remove("button-gradient")
      buttonorder3.value.classList.remove("button-gradient")
      buttonorder4.value.classList.remove("button-gradient")
    }
    const order2 = () => {
      state.priceorder = 1;
      buttonorder1.value.classList.remove("button-gradient")
      buttonorder2.value.classList.add("button-gradient")
      buttonorder3.value.classList.remove("button-gradient")
      buttonorder4.value.classList.remove("button-gradient")
    }
    const order3 = () => {
      state.priceorder = 2;
      buttonorder1.value.classList.remove("button-gradient")
      buttonorder2.value.classList.remove("button-gradient")
      buttonorder3.value.classList.add("button-gradient")
      buttonorder4.value.classList.remove("button-gradient")
    }
    const order4 = () => {
      state.priceorder = 3;
      buttonorder1.value.classList.remove("button-gradient")
      buttonorder2.value.classList.remove("button-gradient")
      buttonorder3.value.classList.remove("button-gradient")
      buttonorder4.value.classList.add("button-gradient")
    }
    const documentClick = (e) => {
      if(!e.target.closest(".price-popover") && !e.target.closest(".show-price-popover")) {
        state.showPopover = false;
      }
    }
    const purchaseSellClick = () => {
      state.purchaseBuy = false;
    }
    const purchaseBuyClick = () => {
      state.purchaseBuy = true;
    }
    const priceTabClick = (key) => {
      state.selectedPriceTab = key;
    }
    const historyTabClick = (key) => {
      state.selectedHistoryTab = key;
    }
    const changeMarketLimit = (key) => {
      console.log(key)
      state.selectedMarketTab = key;
    }
    onMounted(() => {
      document.onclick = documentClick;
      // let params = route.params.pair;
      // if (params == undefined) {
      //   router.push("/exchange/" + state.defaultPath)
      //   params = state.defaultPath;
      // }
      let params = state.defaultPath;
      const basecion = params.split("_")[1];
      if (basecion) {
        state.basecion = basecion;
      }
      let coin = params.toUpperCase().split("_")[0];
      let base = params.toUpperCase().split("_")[1];
      state.currentCoin.symbol = coin + "/" + base;
      state.currentCoin.coin = coin;
      state.currentCoin.base = base;
      console.log(state.currentCoin)
      // this.$store.commit("navigate", "nav-exchange");
      // this.$store.commit("setSkin", state.skin);

      getCNYRate();
      getSymbolScale();
      getCoinInfo();
      getSymbol();
      getPlate();
      getPlateFull();
      getTrade();
      // getWallet();
      // if (this.isLogin) {
        // getWallet();
        // getCurrentOrder();
        // getHistoryOrder();
      // }
      state.sliderBuyLimitPercent = 0;
      state.sliderSellLimitPercent = 0;
      state.sliderBuyMarketPercent = 0;
    })
    return { 
      state,
      getWallet,
      buyWithLimitPrice,
      getCurrentOrder,
      getHistoryOrder,
      tipFormat,
      changeBaseCoin,
      changePlate,
      changeImgTable,
      changeOrder,
      getCoin,
      getFavor,
      updatePlate,
      limited_price,
      market_price,
      currentCoinFavorChange,
      collect,
      cancelCollect,
      buyWithMarketPrice,
      refreshAccount,
      sellMarketPrice,
      sellLimitPrice,
      buyPlate,
      sellPlate,
      // cancel,
      showPublishMask,
      hidePublishMask,
      hideCountDown,
      seachInputChange,
      silderGo,
      showPricePopover,
      order1,
      order2,
      order3,
      order4,
      buttonorder1,
      buttonorder2,
      buttonorder3,
      buttonorder4,
      priceTabs,
      historyTabs,
      purchaseBuyClick,
      purchaseSellClick,
      priceTabClick,
      historyTabClick,
      changeMarketLimit
    }
  },
};
</script>
<style>
.symbol-search input {
  border: 1px solid hsla(0,0%,100%,0.1);
  line-height: 30px;
  color: hsla(0,0%,100%,0.45);
}
.symbol-search i.fa-search {
  transform: translateY(-50%);
  color: hsla(0,0%,100%,0.45);
  font-size: 14px;
}
.symbol-search input:focus {
  outline: none;
  border-color: #ffb11a;
}
.price-tabs-content {
  height: 428px;
}
.price-tabs-content .tab-panels {
  height: 389px;
}
.price-tabs-content .tabs {
  border-bottom: 2px solid hsla(0,0%,100%,0.45);
}
.price-tabs-content .tabs .tab-title {
  margin-bottom: -2px;
}
.price-tabs-content .tabs .active {
  border-bottom: 2px solid #ffb11a;
}
.price-tabs-content .tabs .active .tab {
  color: #ffb11a!important;
}
.price-tabs-content .tabs .price-tab {
  cursor: pointer;
  margin: 0 12px -2px;
}
.price-tabs-content .tabs .price-tab .tab {
  padding: 0;
  color: rgba(255, 255, 255, 0.65);
  font-size: 14px;
  padding: 8px 0;
}


.price-history-content .tabs .history-tab .tab {
  color: white;
  font-size: 12px;
  font-family: SF Pro Display Regular;
  padding: 16px 8px;
}
.price-history-content .tabs .tab-title {
  border-top: 2px solid transparent;
}
.price-history-content .tabs .history-tab {
  cursor: pointer;
}
.price-history-content .tabs .active {
  border-bottom: none;
  border-top: 2px solid #92CB5A;
}
.price-item-content {
  width: 50%;
}
.price-history-content {
  min-width: 580px;
}
.chart-history-content {
  width: 100%;
}
.price-popover {
  width: 450px;
  height: 484px;
  left: -96px;
  background: #24252b;
  z-index: 5;
}
@media (min-width: 768px) {
  .chart-history-content {
    width: calc(100% - 520px);
  }
  .price-item-content {
    width: 260px;
  }
  .price-popover {
    width: 520px;
    left: 0;
  }
}
/* width */
.price-tabs-content .tab-panels div::-webkit-scrollbar {
  width: 4px;
}

/* Track */
.price-tabs-content .tab-panels div::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
.price-tabs-content .tab-panels div::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
.price-tabs-content .tab-panels div::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
.price-tabs-content .tab-panels table tr td:first-child, 
.price-tabs-content .tab-panels table tr th:first-child {
  width: 156px;
}
.price-tabs-content .tab-panels table tr td:nth-child(2), 
.price-tabs-content .tab-panels table tr th:nth-child(2) {
  width: 76px;
}
.price-tabs-content .tab-panels table tr td:nth-child(3), 
.price-tabs-content .tab-panels table tr th:nth-child(3) {
  width: 130px;
}
.market-limit-tabs div {
  cursor: pointer;
}
</style>
