import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { TryMyAgentComponent } from './try-my-agent/try-my-agent.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { BusinessgoalsComponent } from './businessgoals/businessgoals.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { ManageteamComponent } from './manageteam/manageteam.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { AddQuestionFormComponent } from './add-question-form/add-question-form.component';
import { ManageTeamComponent } from './manage-team/manage-team.component';
import { AddMemberFormComponent } from './add-member-form/add-member-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAgentComponent,
    TryMyAgentComponent,
    SidebarComponent,
    AppearanceComponent,
    DashboardComponent,
    SignupLoginComponent,
    BusinessgoalsComponent,
    QuestionAnswerComponent,
    ManageteamComponent,
    AdvancedComponent,
    AddQuestionFormComponent,
    ManageTeamComponent,
    AddMemberFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

