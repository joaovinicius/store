import { HttpClient } from '../../../Infrastructure/Support/Contracts/HttpClient'
import { Repository } from '../../../BoundedContext/Authentication/Repository'
import {
  Session,
  ISocialAuthentication,
  ILinkedinAccessToken,
  IRecoveryPasswordToken,
  IResetPasswordToken,
  IConfirmationAccountToken,
  IVerificationPasswordToken
} from '../../../Domain'
import sessionDM from '../../../Infrastructure/DataMapper/v1/Authentication/SessionDM'

import { RequestUpdatePasswordDTO } from './DataTransferObject/RequestUpdatePasswordDTO'
import { RequestSignInDTO } from './DataTransferObject/RequestSignInDTO'

import linkedinDM from './DataMapper/LinkedinDM'
import updatePasswordDM from './DataMapper/UpdatePasswordDM'

const STATUS_SUCCESS = 204

export class ApiRepository implements Repository {
  public readonly httpClient: HttpClient

  constructor (httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  async requestLinkedinAccessToken (url: string, params: ILinkedinAccessToken): Promise<string> {
    const response = await this.httpClient.post(url, {}, { params, headers: { Accept: 'application/json' } })

    return linkedinDM.responseDataToEntity(response)
  }

  async requestSignIn (url: string, body: RequestSignInDTO): Promise<Session> {
    const response = await this.httpClient.post(url, body)

    return sessionDM.responseDataToEntity(response)
  }

  async requestSignInWithSocial (url: string, body: ISocialAuthentication): Promise<Session> {
    const response = await this.httpClient.post(url, body)

    return sessionDM.responseDataToEntity(response)
  }

  async requestLinkedinRequestAccessToken (url: string, params: ILinkedinAccessToken): Promise<string> {
    const response = await this.httpClient.post(url, {}, { params, headers: { Accept: 'application/json' } })

    return linkedinDM.responseDataToEntity(response)
  }

  async requestRecoveryUserPassword (url: string, body: IRecoveryPasswordToken): Promise<boolean> {
    const { status } = await this.httpClient.post(url, body)

    return status === STATUS_SUCCESS
  }

  async requestResendUserPasswordRecoveryEmail (url: string, body: IRecoveryPasswordToken): Promise<boolean> {
    const { status } = await this.httpClient.post(url, body)

    return status === STATUS_SUCCESS
  }

  async requestResetUserPassword (url: string, body: IResetPasswordToken): Promise<boolean> {
    const { status } = await this.httpClient.post(url, body)

    return status === STATUS_SUCCESS
  }

  async requestValidateUserAccount (url: string, body: IConfirmationAccountToken): Promise<boolean> {
    const { status } = await this.httpClient.post(url, body)

    return status === STATUS_SUCCESS
  }

  async requestValidateUserResetPasswordToken (url: string, body: IVerificationPasswordToken): Promise<boolean> {
    const { status } = await this.httpClient.post(url, body)

    return status === STATUS_SUCCESS
  }

  async requestUpdatePassword (url: string, content: RequestUpdatePasswordDTO): Promise<boolean> {
    const body = updatePasswordDM.fromEntityToRequestData(content)
    const { status } = await this.httpClient.post(url, body)

    return status === STATUS_SUCCESS
  }
}
