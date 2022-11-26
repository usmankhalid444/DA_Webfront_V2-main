<template>
  <div>
    <!-- modal Edit Phone Number -->
    <div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="container">
                    <div
                      class="row"
                      style="padding-top: 5%; "
                    >
                      <div class="">
                        <div class="d-flex justify-content-between">
                          <h5 class="modal-title m-auto text-center">
                            ลบบัญชีธนาคาร
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span
                              aria-hidden="true"
                              @click="hide()"
                              style="color: #677f8e; font-size: 24px"
                              >&times;</span
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-body">
                  <div class="container">
                    <div class="row">
                      <div class="col text-center">
                         <p class="text-dark-grey" style="margin-top: 1rem">
                            คุณต้องการลบข้อมูลบัญชีธนาคารหรือไม่
                          </p>
                        
                      </div>
                    </div>
                  

                    <!-- modal button bottom -->
                    <div class="button mt-3 mb-4 text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-text-sarabun"
                        @click="hide()"
                      >
                       ยืนยัน
                      </button>
                      <button
                        type="button"
                        class="btn btn-cancel btn-text-sarabun ms-3"
                        @click="hide()"
                      >
                        ยกเลิก
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-content {
  width: 100% !important;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-dialog {
  background-color: #141b1f !important;
  max-width: 480px !important;
  border-radius: 8px;
}
</style>
