<template>
  <div
    v-if="alive"
    @click="close"
    ref="notification"
    :class="['FixedLayout FixedLayout--' + VkPlatform,
    'FixedLayout--bottom',
    'Snackbar',
    'Snackbar--' + VkPlatform,
    'Snackbar--l-vertical']">
    <div class="FixedLayout__in">
      <div class="Snackbar__in">
        <div class="Snackbar__body">
          <div class="Snackbar__before">
            <div class="Avatar Avatar--ios Avatar--type-default Avatar--sz-24">
              <div class="Avatar__in" style="width: 24px; height: 24px;">
                <div class="Avatar__img" style="background-color: var(--accent); border-radius: 50%;"></div>
                <span class="Avatar__shadow" style="border-radius: 50%;"></span>
                <div class="Avatar__children" style="width: 24px; height: 24px; border-radius: 50%;">
                  <div class="Icon Icon--14 Icon--w-14 Icon--h-14 Icon--done_16 " style="width: 14px; height: 14px;">
                    <svg viewBox="0 0 16 16" width="14" height="14" style="display: block;">
                      <use xlink:href="#done_16" style="fill: currentcolor; color: rgb(255, 255, 255);"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="Snackbar__content">
            <div class="Snackbar__content-text">
              {{ message }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const show = this.show
    return {
      isShow: show,
      alive: true,
      styleText: {}
    }
  },
  props: {
    message: {
      type: String,
      default: '',
      required: false
    }
  },
  methods: {
    open () {
      this.isShow = true
    },
    close () {
      this.$refs.notification.classList.add('Snackbar--closing')
      setTimeout(() => {
        this.$refs.notification.remove()
      }, 500)
    }
  }
}
</script>
