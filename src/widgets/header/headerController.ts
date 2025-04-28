import { EClasses } from '@shared/lib/enums/EClasses'
import { initBlockClass } from '@shared/lib/helpers/initBlockClass'
import { BodyOverflow } from '@shared/lib/helpers/bodyOverflow'
import { BurgerController } from '@widgets/header/components/burger/controller'

class HeaderController {
  private readonly burgerNode: HTMLElement | null
  private readonly dropMenuNode: HTMLElement | null
  private bodyOverflow: BodyOverflow

  constructor (private container: HTMLElement) {
    this.burgerNode = container.querySelector('.j-burger')
    this.dropMenuNode = container.querySelector('.j-drop-menu')
    this.bodyOverflow = new BodyOverflow()
    this.initBurger()
  }

  private initBurger = () => {
    if (this.burgerNode) {
      const burgerController = new BurgerController(this.burgerNode, this.onBurgerClick)
      if (burgerController.isOpen) {
        this.openMenu()
      } else {
        this.closeMenu()
      }
    }
  }

  private onBurgerClick = (isOpen: boolean) => {
    if (isOpen) {
      this.openMenu()
    } else {
      this.closeMenu()
    }
  }

  private openMenu = () => {
    if (!this.dropMenuNode) return
    this.bodyOverflow.lock()
    this.dropMenuNode.classList.add(EClasses.ACTIVE)
  }

  private closeMenu = () => {
    if (!this.dropMenuNode) return
    this.bodyOverflow.unlock()
    this.dropMenuNode.classList.remove(EClasses.ACTIVE)
  }
}

initBlockClass('.j-header', HeaderController)
