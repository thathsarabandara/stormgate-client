<template>
  <div class="mx-4 mt-3">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Billing & Subscription</h1>
      <p class="text-sm text-gray-500 mt-1">Manage your subscription, payment methods, and billing history</p>
    </div>

    <!-- Current Subscription -->
    <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 mb-6 text-white">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div class="flex items-center gap-3 mb-2">
            <h2 class="text-2xl font-bold">{{ currentPlan.name }} Plan</h2>
            <span class="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Active</span>
          </div>
          <p class="text-green-100 mb-4">{{ currentPlan.description }}</p>
          <div class="flex flex-wrap gap-4 text-sm">
            <div class="flex items-center gap-2">
              <Icon icon="mdi:calendar" class="text-xl" />
              <span>Renews on {{ currentPlan.renewDate }}</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:clock" class="text-xl" />
              <span>{{ daysUntilRenewal }} days remaining</span>
            </div>
          </div>
        </div>
        <div class="text-right">
          <p class="text-4xl font-bold">${{ currentPlan.price }}</p>
          <p class="text-green-100">per month</p>
          <div class="flex gap-2 mt-4">
            <button @click="showCancelModal = true" class="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition">
              Cancel Plan
            </button>
            <button @click="showUpgradeModal = true" class="px-4 py-2 bg-white text-green-600 rounded-lg hover:bg-green-50 transition font-semibold">
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Usage Overview -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div class="bg-white rounded-xl shadow p-4">
        <div class="flex items-center justify-between mb-2">
          <p class="text-sm text-gray-500">API Requests</p>
          <Icon icon="mdi:api" class="text-2xl text-blue-600" />
        </div>
        <p class="text-2xl font-bold text-gray-800">{{ usage.apiRequests.toLocaleString() }}</p>
        <div class="mt-2">
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-blue-500 h-2 rounded-full" :style="`width: ${(usage.apiRequests / currentPlan.limits.apiRequests) * 100}%`"></div>
          </div>
          <p class="text-xs text-gray-500 mt-1">{{ ((usage.apiRequests / currentPlan.limits.apiRequests) * 100).toFixed(1) }}% of {{ currentPlan.limits.apiRequests.toLocaleString() }}</p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow p-4">
        <div class="flex items-center justify-between mb-2">
          <p class="text-sm text-gray-500">Storage Used</p>
          <Icon icon="mdi:database" class="text-2xl text-purple-600" />
        </div>
        <p class="text-2xl font-bold text-gray-800">{{ usage.storage }}GB</p>
        <div class="mt-2">
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-purple-500 h-2 rounded-full" :style="`width: ${(usage.storage / currentPlan.limits.storage) * 100}%`"></div>
          </div>
          <p class="text-xs text-gray-500 mt-1">{{ ((usage.storage / currentPlan.limits.storage) * 100).toFixed(1) }}% of {{ currentPlan.limits.storage }}GB</p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow p-4">
        <div class="flex items-center justify-between mb-2">
          <p class="text-sm text-gray-500">Team Members</p>
          <Icon icon="mdi:account-group" class="text-2xl text-green-600" />
        </div>
        <p class="text-2xl font-bold text-gray-800">{{ usage.teamMembers }}</p>
        <div class="mt-2">
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-green-500 h-2 rounded-full" :style="`width: ${(usage.teamMembers / currentPlan.limits.teamMembers) * 100}%`"></div>
          </div>
          <p class="text-xs text-gray-500 mt-1">{{ ((usage.teamMembers / currentPlan.limits.teamMembers) * 100).toFixed(1) }}% of {{ currentPlan.limits.teamMembers }}</p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow p-4">
        <div class="flex items-center justify-between mb-2">
          <p class="text-sm text-gray-500">Support Level</p>
          <Icon icon="mdi:headset" class="text-2xl text-orange-600" />
        </div>
        <p class="text-xl font-bold text-gray-800">{{ currentPlan.support }}</p>
        <p class="text-sm text-gray-500 mt-2">{{ currentPlan.supportResponse }}</p>
      </div>
    </div>

    <!-- Payment Methods -->
    <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-gray-800">Payment Methods</h2>
        <button @click="showAddCardModal = true" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition flex items-center gap-2">
          <Icon icon="mdi:plus" class="text-xl" />
          Add Card
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="card in paymentMethods" :key="card.id" class="border-2 rounded-xl p-4 hover:border-green-300 transition" :class="card.isDefault ? 'border-green-500 bg-green-50' : 'border-gray-200'">
          <div class="flex justify-between items-start mb-3">
            <div class="flex items-center gap-3">
              <div :class="getCardBrandColor(card.brand)" class="p-3 rounded-lg">
                <Icon :icon="getCardIcon(card.brand)" class="text-2xl text-white" />
              </div>
              <div>
                <p class="font-semibold text-gray-800">{{ card.brand }}</p>
                <p class="text-sm text-gray-500">•••• •••• •••• {{ card.last4 }}</p>
              </div>
            </div>
            <div v-if="card.isDefault" class="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
              Default
            </div>
          </div>
          
          <div class="flex justify-between items-center text-sm text-gray-600 mb-3">
            <span>Expires {{ card.expiry }}</span>
            <span>{{ card.holderName }}</span>
          </div>

          <div class="flex gap-2">
            <button v-if="!card.isDefault" @click="setDefaultCard(card.id)" class="flex-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              Set as Default
            </button>
            <button @click="editCard(card)" class="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              <Icon icon="mdi:pencil" />
            </button>
            <button @click="removeCard(card.id)" class="px-3 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 text-sm">
              <Icon icon="mdi:delete" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Billing History -->
    <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-gray-800">Billing History</h2>
        <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
          <Icon icon="mdi:download" />
          Export All
        </button>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="bill in billingHistory" :key="bill.id" class="hover:bg-gray-50">
              <td class="px-4 py-3 text-sm text-gray-700">{{ bill.date }}</td>
              <td class="px-4 py-3 text-sm text-gray-700">{{ bill.description }}</td>
              <td class="px-4 py-3 text-sm font-semibold text-gray-800">{{ bill.amount }}</td>
              <td class="px-4 py-3">
                <span :class="bill.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'" class="px-2 py-1 text-xs rounded-full">
                  {{ bill.status }}
                </span>
              </td>
              <td class="px-4 py-3">
                <button @click="downloadInvoice(bill.id)" class="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                  <Icon icon="mdi:download" />
                  Download
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Available Plans -->
    <div class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-6">Available Plans</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="plan in availablePlans" :key="plan.id" class="border-2 rounded-xl p-6 hover:border-green-300 transition" :class="plan.id === currentPlan.id ? 'border-green-500 bg-green-50' : 'border-gray-200'">
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ plan.name }}</h3>
            <div class="mb-2">
              <span class="text-4xl font-bold text-gray-900">${{ plan.price }}</span>
              <span class="text-gray-500">/month</span>
            </div>
            <p class="text-sm text-gray-600">{{ plan.description }}</p>
          </div>

          <div class="space-y-3 mb-6">
            <div v-for="feature in plan.features" :key="feature" class="flex items-start gap-2 text-sm">
              <Icon icon="mdi:check-circle" class="text-green-500 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-gray-700">{{ feature }}</span>
            </div>
          </div>

          <button
            v-if="plan.id === currentPlan.id"
            class="w-full py-3 bg-green-500 text-white rounded-lg font-semibold cursor-not-allowed opacity-50"
            disabled
          >
            Current Plan
          </button>
          <button
            v-else-if="plan.price > currentPlan.price"
            @click="upgradePlan(plan)"
            class="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 font-semibold"
          >
            Upgrade to {{ plan.name }}
          </button>
          <button
            v-else
            @click="downgradePlan(plan)"
            class="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold"
          >
            Downgrade to {{ plan.name }}
          </button>
        </div>
      </div>
    </div>

    <!-- Add Card Modal -->
    <div v-if="showAddCardModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl p-6 max-w-md w-full">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Add Payment Method</h3>
        <form @submit.prevent="addCard" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
            <input
              v-model="newCard.number"
              type="text"
              maxlength="19"
              placeholder="1234 5678 9012 3456"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
            <input
              v-model="newCard.holderName"
              type="text"
              placeholder="John Doe"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
              <input
                v-model="newCard.expiry"
                type="text"
                placeholder="MM/YY"
                maxlength="5"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">CVV</label>
              <input
                v-model="newCard.cvv"
                type="text"
                placeholder="123"
                maxlength="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>
          <div class="flex items-center gap-2">
            <input v-model="newCard.isDefault" type="checkbox" class="w-4 h-4 text-green-600 rounded focus:ring-green-500" />
            <label class="text-sm text-gray-700">Set as default payment method</label>
          </div>
          <div class="flex justify-end gap-3 pt-4 border-t">
            <button type="button" @click="showAddCardModal = false" class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Add Card
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Upgrade Plan Modal -->
    <div v-if="showUpgradeModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Upgrade Your Plan</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div v-for="plan in availablePlans.filter(p => p.price > currentPlan.price)" :key="plan.id" class="border-2 rounded-lg p-4 cursor-pointer hover:border-green-500 transition" @click="selectedUpgradePlan = plan">
            <h4 class="text-lg font-bold text-gray-800">{{ plan.name }}</h4>
            <p class="text-2xl font-bold text-green-600">${{ plan.price }}/mo</p>
            <p class="text-sm text-gray-600 mt-2">{{ plan.description }}</p>
          </div>
        </div>
        <div class="flex justify-end gap-3">
          <button @click="showUpgradeModal = false" class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Cancel
          </button>
          <button @click="confirmUpgrade" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Confirm Upgrade
          </button>
        </div>
      </div>
    </div>

    <!-- Cancel Subscription Modal -->
    <div v-if="showCancelModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl p-6 max-w-md w-full">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Cancel Subscription</h3>
        <p class="text-gray-600 mb-4">Are you sure you want to cancel your subscription? You'll lose access to premium features at the end of your billing period.</p>
        <div class="flex justify-end gap-3">
          <button @click="showCancelModal = false" class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Keep Subscription
          </button>
          <button @click="cancelSubscription" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Confirm Cancellation
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'

const currentPlan = ref({
  id: 2,
  name: 'Pro',
  price: 49,
  description: 'Perfect for growing businesses',
  renewDate: '2026-01-15',
  support: 'Priority',
  supportResponse: '24h response time',
  limits: {
    apiRequests: 100000,
    storage: 50,
    teamMembers: 10
  }
})

const usage = ref({
  apiRequests: 45230,
  storage: 23,
  teamMembers: 5
})

const daysUntilRenewal = computed(() => {
  const renew = new Date(currentPlan.value.renewDate)
  const today = new Date()
  const diff = renew - today
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
})

const paymentMethods = ref([
  { id: 1, brand: 'Visa', last4: '4242', expiry: '12/25', holderName: 'John Doe', isDefault: true },
  { id: 2, brand: 'Mastercard', last4: '8888', expiry: '09/26', holderName: 'John Doe', isDefault: false }
])

const billingHistory = ref([
  { id: 1, date: '2025-12-01', description: 'Monthly Subscription - Pro Plan', amount: '$49.00', status: 'Paid' },
  { id: 2, date: '2025-11-01', description: 'Monthly Subscription - Pro Plan', amount: '$49.00', status: 'Paid' },
  { id: 3, date: '2025-10-01', description: 'Monthly Subscription - Starter Plan', amount: '$19.00', status: 'Paid' }
])

const availablePlans = ref([
  {
    id: 1,
    name: 'Starter',
    price: 19,
    description: 'For individuals and small projects',
    features: [
      '10,000 API requests/month',
      '5GB storage',
      '2 team members',
      'Email support',
      'Basic analytics'
    ]
  },
  {
    id: 2,
    name: 'Pro',
    price: 49,
    description: 'Perfect for growing businesses',
    features: [
      '100,000 API requests/month',
      '50GB storage',
      '10 team members',
      'Priority support',
      'Advanced analytics',
      'Custom domains'
    ]
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 199,
    description: 'For large-scale operations',
    features: [
      'Unlimited API requests',
      '500GB storage',
      'Unlimited team members',
      '24/7 phone support',
      'Advanced analytics',
      'Custom domains',
      'SLA guarantee',
      'Dedicated account manager'
    ]
  }
])

const showAddCardModal = ref(false)
const showUpgradeModal = ref(false)
const showCancelModal = ref(false)
const selectedUpgradePlan = ref(null)

const newCard = ref({
  number: '',
  holderName: '',
  expiry: '',
  cvv: '',
  isDefault: false
})

const getCardIcon = (brand) => {
  const icons = {
    Visa: 'mdi:credit-card',
    Mastercard: 'mdi:credit-card',
    Amex: 'mdi:credit-card',
    Discover: 'mdi:credit-card'
  }
  return icons[brand] || 'mdi:credit-card'
}

const getCardBrandColor = (brand) => {
  const colors = {
    Visa: 'bg-blue-500',
    Mastercard: 'bg-red-500',
    Amex: 'bg-green-500',
    Discover: 'bg-orange-500'
  }
  return colors[brand] || 'bg-gray-500'
}

const setDefaultCard = (cardId) => {
  paymentMethods.value.forEach(card => {
    card.isDefault = card.id === cardId
  })
}

const editCard = (card) => {
  console.log('Edit card:', card)
}

const removeCard = (cardId) => {
  if (confirm('Are you sure you want to remove this payment method?')) {
    const index = paymentMethods.value.findIndex(c => c.id === cardId)
    if (index !== -1) {
      paymentMethods.value.splice(index, 1)
    }
  }
}

const addCard = () => {
  const card = {
    id: paymentMethods.value.length + 1,
    brand: 'Visa',
    last4: newCard.value.number.slice(-4),
    expiry: newCard.value.expiry,
    holderName: newCard.value.holderName,
    isDefault: newCard.value.isDefault
  }
  
  if (newCard.value.isDefault) {
    paymentMethods.value.forEach(c => c.isDefault = false)
  }
  
  paymentMethods.value.push(card)
  showAddCardModal.value = false
  newCard.value = { number: '', holderName: '', expiry: '', cvv: '', isDefault: false }
}

const downloadInvoice = (billId) => {
  console.log('Downloading invoice:', billId)
  alert('Invoice downloaded!')
}

const upgradePlan = (plan) => {
  selectedUpgradePlan.value = plan
  showUpgradeModal.value = true
}

const downgradePlan = (plan) => {
  if (confirm(`Are you sure you want to downgrade to ${plan.name}? This will take effect at the end of your billing period.`)) {
    console.log('Downgrading to:', plan.name)
  }
}

const confirmUpgrade = () => {
  if (selectedUpgradePlan.value) {
    currentPlan.value = { ...selectedUpgradePlan.value, renewDate: currentPlan.value.renewDate }
    showUpgradeModal.value = false
    alert('Plan upgraded successfully!')
  }
}

const cancelSubscription = () => {
  showCancelModal.value = false
  alert('Your subscription will be cancelled at the end of the billing period.')
}
</script>
